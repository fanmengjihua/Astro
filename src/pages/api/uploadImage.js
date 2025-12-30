import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';
import { parse } from 'url';

export const prerender = false;

export async function POST({ request }) {
  try {
    // 检查请求是否是multipart/form-data
    if (!request.headers.get('content-type')?.startsWith('multipart/form-data')) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid content type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // 解析表单数据
    const formData = await request.formData();
    const file = formData.get('image');
    
    if (!file) {
      return new Response(JSON.stringify({ success: false, error: 'No file provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // 读取文件内容
    const buffer = await file.arrayBuffer();
    
    // 生成唯一的文件名
    const timestamp = new Date().getTime();
    const imageName = timestamp + '-' + file.name;
    
    // 确保目录存在
    const imagesDir = resolve(process.cwd(), 'public', 'images', 'posts');
    if (!existsSync(imagesDir)) {
      mkdirSync(imagesDir, { recursive: true });
    }
    
    // 写入文件
    const filePath = resolve(imagesDir, imageName);
    writeFileSync(filePath, Buffer.from(buffer));
    
    // 返回文件路径
    const fileUrl = `/images/posts/${imageName}`;
    
    return new Response(JSON.stringify({ success: true, fileUrl }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}