import { useRouter } from 'next/router';

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dynamic Blog Page</h1>
      <p>The slug for this page is: {slug}</p>
    </div>
  );
};

export default BlogPage;
