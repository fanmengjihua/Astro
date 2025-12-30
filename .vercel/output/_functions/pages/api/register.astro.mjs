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
    
    // 检查是否已经注册过
    if (usersData.registered) {
      return new Response(JSON.stringify({ success: false, error: '已经注册过用户，无法再次注册' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const data = await request.json();
    const { email, password } = data;
    
    // 验证邮箱格式（必须是gmail）
    if (!email.endsWith('@gmail.com')) {
      return new Response(JSON.stringify({ success: false, error: '只能使用Gmail邮箱注册' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // 验证密码强度
    if (password.length < 6) {
      return new Response(JSON.stringify({ success: false, error: '密码长度不能少于6位' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // 哈希密码
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // 创建用户
    const user = {
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // 更新用户数据
    usersData.users.push(user);
    usersData.registered = true;
    
    // 保存到文件
    writeFileSync(usersPath, JSON.stringify(usersData, null, 2));
    
    return new Response(JSON.stringify({ success: true, message: '注册成功' }), {
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
