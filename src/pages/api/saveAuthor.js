import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

export const prerender = false;

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { name, markdownContent } = data;
    
    // 生成文件名
    const slug = name.replace(/[\s]+/g, '-');
    const fileName = slug + '.md';
    
    // 确保目录存在
    const authorsDir = resolve(process.cwd(), 'src', 'content', 'authors');
    if (!existsSync(authorsDir)) {
      mkdirSync(authorsDir, { recursive: true });
    }
    
    // 写入文件
    const filePath = resolve(authorsDir, fileName);
    writeFileSync(filePath, markdownContent);
    
    return new Response(JSON.stringify({ success: true, fileName }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}