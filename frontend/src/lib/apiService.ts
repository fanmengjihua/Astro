const API_BASE_URL = 'http://localhost:11498'; // Rin-dev后端服务端口
export interface Post {
  id: number;
  title: string;
  content: string;
  summary: string;
  alias?: string;
  createdAt: string;
  updatedAt: string;
  hashtags: Array<{
    id: number;
    name: string;
  }>;
  pv: number;
  uv: number;
  avatar?: string;
}

export interface PostListResponse {
  size: number;
  data: Post[];
  hasNext: boolean;
}

/**
 * 获取文章列表
 */
export async function getPosts(page: number = 1, limit: number = 20): Promise<PostListResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/feed?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      size: 0,
      data: [],
      hasNext: false
    };
  }
}

/**
 * 获取单篇文章
 */
export async function getPostById(id: string | number): Promise<Post | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/feed/${id}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    return null;
  }
}

/**
 * 获取所有文章（用于生成静态路径）
 */
export async function getAllPosts(): Promise<Post[]> {
  const response = await getPosts(1, 100); // 假设最多100篇文章
  return response.data;
}