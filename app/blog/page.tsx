// app/blog/page.tsx

import BlogClient from '../BlogClient';

export default function BlogPage() {
  return (
    <main className="min-h-screen p-6 lg:p-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-12">Blog</h1>
        <BlogClient />
      </div>
    </main>
  );
}
