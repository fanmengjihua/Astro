import { readFileSync } from 'fs';
import { resolve } from 'path';
import bcrypt from 'bcrypt';

export const prerender = false;

export async function POST({ request }) {
  try {
    // 读取用户数据文件
    const usersPath = resolve(process.cwd(), 'src', 'data', 'users.json');
    const usersData = JSON.parse(readFileSync(usersPath, 'utf8'));
    
    const data = await request.json();
    const { email, password } = data;
    
    // 查找用户
    const user = usersData.users.find(u => u.email === email);
    
    if (!user) {
      return new Response(JSON.stringify({ success: false, error: '邮箱或密码错误' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // 验证密码
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      return new Response(JSON.stringify({ success: false, error: '邮箱或密码错误' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // 简单的认证token（在实际应用中应该使用更安全的JWT）
    const authToken = Buffer.from(`${email}:${Date.now()}`).toString('base64');
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: '登录成功',
      token: authToken,
      email: user.email
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}