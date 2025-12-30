import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    const data = await request.json();
    const { title, markdownContent } = data;
    
    // 生成文件名 - 使用时间戳确保唯一性和兼容性
    const timestamp = new Date().getTime();
    // 尝试保留中文标题，同时确保Windows兼容性
    const safeTitle = title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5\-]/g, '-');
    const fileName = timestamp + '-' + safeTitle + '.md';
    
    // 确保目录存在
    const postsDir = resolve(process.cwd(), 'src', 'content', 'posts');
    if (!existsSync(postsDir)) {
      mkdirSync(postsDir, { recursive: true });
    }
    
    // 写入文件
    const filePath = resolve(postsDir, fileName);
    console.log('Attempting to write to:', filePath);
    console.log('Content length:', markdownContent.length);
    writeFileSync(filePath, markdownContent);
    console.log('Write successful');
    
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
