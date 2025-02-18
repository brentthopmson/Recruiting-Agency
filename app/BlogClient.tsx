// app/BlogClient.tsx

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export default function BlogClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://your-appscript-url-to-fetch-posts'); // Replace with your endpoint
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {posts.map((post) => (
        <div key={post.id} className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{post.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
          <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
          <Link href={`/blog/${post.id}`} className="text-blue-600 dark:text-blue-400 hover:underline mt-4 block">
            Continue Reading
          </Link>
        </div>
      ))}
    </div>
  );
}
