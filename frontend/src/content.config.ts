import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// 社交平台通用 Schema（复用减少冗余）
const socialSchema = z.object({
  facebook: z.string().url().optional(),
  x: z.string().url().optional(),
  instagram: z.string().url().optional(),
  github: z.string().url().optional(),
  website: z.string().url().optional(),
  youtube: z.string().url().optional(), // 用于存储 YouTube 频道链接
});

// About 集合（建议与 authors 区分数据源，避免冲突）
const aboutCollection = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "src/content/about" }), // 独立目录
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    youtube: z.string().url().optional(), // 关于页面的视频链接（可选）
    social: socialSchema.optional(),
    draft: z.boolean().optional().default(false), // 默认非草稿

  }),
});

// Contact 集合
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false), // 默认非草稿
    views: z.number().optional().default(0), // 点击量字段
  }),


});

// Authors 集合（新增视频 ID 字段）
const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/authors" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    youtubeVideoId: z.string().optional(), // 新增：存储 YouTube 视频 ID（如 "abc123"）
    youtube: z.string().optional(), // 支持完整的 YouTube URL
    social: socialSchema.optional(),
  }),
});

// 分类集合（使用posts集合中的categories字段进行管理）

// Posts 集合
const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    youtube: z.string().optional(), // YouTube视频ID（可选）
    categories: z.array(z.string()).default(["others"]),
    authors: z.array(z.string()).default(["Admin"]),

    draft: z.boolean().optional().default(false), // 默认非草稿
    views: z.number().optional().default(0), // 点击量字段
  }),
});

// Pages 集合
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }), // 补充 loader 配置
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
  about: aboutCollection,
  contact: contactCollection,
  authors: authorsCollection,
  pages: pagesCollection,
};