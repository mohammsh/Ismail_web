import MyBlogs from '@/components/MyBlogs';

export default function BlogsPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Blogs</h1>
      <MyBlogs /> {/* Reuse the MyBlogs component */}
    </main>
  );
}
