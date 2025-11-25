import BlogArticle from "@/components/blog/BlogArticle";

export default async function BlogPost({ params }) {
  const { slug } = await params;   // ← REQUIRED in Next.js 15

  return <BlogArticle slug={slug} />;
}
