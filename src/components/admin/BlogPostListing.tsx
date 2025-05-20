
import React from 'react';
import { Button } from '@/components/ui/button';

type BlogPost = {
  id: number;
  title: string;
  status: string;
  date: string;
  views: number;
};

interface BlogPostListingProps {
  posts: BlogPost[];
}

const BlogPostListing = ({ posts }: BlogPostListingProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-medium">Titulli</th>
            <th className="text-left py-3 px-4 font-medium">Statusi</th>
            <th className="text-left py-3 px-4 font-medium">Data</th>
            <th className="text-left py-3 px-4 font-medium">Shikime</th>
            <th className="text-right py-3 px-4 font-medium">Veprime</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b border-gray-100">
              <td className="py-3 px-4">{post.title}</td>
              <td className="py-3 px-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  post.status === 'Publikuar' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {post.status}
                </span>
              </td>
              <td className="py-3 px-4 text-gray-500">{post.date}</td>
              <td className="py-3 px-4 text-gray-500">{post.views}</td>
              <td className="py-3 px-4 text-right">
                <Button variant="ghost" size="sm">Redakto</Button>
                <Button variant="ghost" size="sm" className="text-red-500">Fshi</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogPostListing;
