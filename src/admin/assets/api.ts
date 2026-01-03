/**
 * 后台统一 API 封装
 * Pages 只通过这里访问 Workers
 */
const API = 'https://jiaweidao-workers.xxoo443.workers.dev/';

export const api = {
  getPosts(): Promise<any[]> {
    return fetch(`${API}/posts`, {
      credentials: 'include'
    }).then(r => r.json());
  },
  save(data: Record<string, any>): Promise<Response> {
    return fetch(`${API}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include'
    });
  },
  publish(id: string | number): Promise<Response> {
    return fetch(`${API}/publish/${id}`, {
      method: 'POST',
      credentials: 'include'
    });
  },
  uploadImage(file: File): Promise<{ success: boolean; url?: string; error?: string }> {
    const formData = new FormData();
    formData.append('image', file);
    return fetch(`${API}/upload`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    }).then(r => r.json());
  }
};
