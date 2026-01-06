export async function onRequestPost({ request, env }) {
  console.log("📦 Pages：收到发布请求，转发给 Workers");

  const body = await request.text();

  return env.API.fetch(
    "/publish", // 👈 替换为实际的 API 路径
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    }
  );
}