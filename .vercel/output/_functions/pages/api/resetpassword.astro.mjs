import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import bcrypt from 'bcrypt';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    // 读取用户数据文件
    const usersPath = resolve(process.cwd(), 'src', 'data', 'users.json');
    const usersData = JSON.parse(readFileSync(usersPath, 'utf8'));
    
    const data = await request.json();
    const { email, currentPassword, newPassword } = data;
    
    // 查找用户
    const userIndex = usersData.users.findIndex(u => u.email === email);
    
    if (userIndex === -1) {
      return new Response(JSON.stringify({ success: false, error: '用户不存在' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const user = usersData.users[userIndex];
    
    // 验证当前密码
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    
    if (!passwordMatch) {
      return new Response(JSON.stringify({ success: false, error: '当前密码错误' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // 验证新密码强度
    if (newPassword.length < 6) {
      return new Response(JSON.stringify({ success: false, error: '新密码长度不能少于6位' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // 哈希新密码
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    // 更新用户密码
    usersData.users[userIndex] = {
      ...user,
      password: hashedPassword,
      updatedAt: new Date().toISOString()
    };
    
    // 保存到文件
    writeFileSync(usersPath, JSON.stringify(usersData, null, 2));
    
    return new Response(JSON.stringify({ success: true, message: '密码重置成功' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
