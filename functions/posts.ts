export async function onRequestPost({ request, env }) {
  console.log("📦 Pages：收到发布请求，转发给 Workers");

  const body = await request.text();

  return env.API.fetch(
    "/posts", // 👈 替换为实际的 API 路径
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    }
  );
}

export async function onRequestGet({ request, env }) {
  console.log("📦 Pages：收到获取文章列表请求，转发给 Workers");

  return env.API.fetch(
    "/posts", // 👈 替换为实际的 API 路径
    {
      method: "GET",
      headers: request.headers
    }
  );
}
