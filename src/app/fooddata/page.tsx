
import { delay } from "@/lib/utils";
import ClapButton from "@/components/CalpButoon";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { BlogPost ,BlogPostsResponse} from "@/models/VlogPost";

interface BlogPostPageProps {
  params: { postId: string };
}

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  return posts.map(({ id }) => id);
}

// Manually deduplicate requests if not using fetch
// const getPost = cache(async (postId: string) => {
//   const post = await prisma.post.findUnique(postId);
//   return post;
// })

export async function generateMetadata({
  params: { postId },
}: BlogPostPageProps): Promise<Metadata> {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const post: BlogPost = await response.json();

  return {
    title: post.title,
    description: post.body,
    // openGraph: {
    //   images: [
    //     {
    //       url: post.imageUrl
    //     }
    //   ]
    // }
    
  };
}

export default async function BlogPostPage({
  params: { postId },
}: BlogPostPageProps) {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const { title, body }: BlogPost = await response.json();

  if (response.status === 404) {
    notFound();
  }

  await delay(1000);

  return (
    <article className="max-w-prose m-auto space-y-5 bg-white">
      <h1 className="text-3xl text-center font-bold">{title}</h1>
      <p className="text-lg">{body}</p>
    <ClapButton/>
    </article>
  );
}

// 'use client'
// import { title } from 'process';
// import React, { useState, useEffect } from 'react';
 



// const Page = () => {
//     const [testData, setTestData] = useState([]);

//     useEffect(() => {
//         const fetchTestData = async () => {
//             try {
//                 const response = await fetch('http://localhost:3600/api/testdata');
//                 if (response.ok) {
//                     const data = await response.json();
//                     setTestData(data);
//                     console.log("Data:", data[0].name); // Optional: log fetched data
//                 } else {
//                     console.error('Failed to fetch test data');
//                 }
//             } catch (error) {
//                 console.error('Error fetching test data:', error);
//             }
//         };

//         fetchTestData(); // Call the fetch function
//     }, []); // Empty dependency array ensures this effect runs once on mount

//     return (
//         <div className="min-h-screen bg-black py-12 pt-36">
//             <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Test Data</h1>
//             <div className="text-white text-center">
//                 {testData ? (
//                     testData.map((item) => (
//                         <div key={item['id']} className="m-4">
//                             <h2 className="text-xl font-bold text-neutral-600 text-center">{item['name']}</h2>
//                             <p className="text-neutral-500 text-sm text-center">{item['description']}</p>
//                             <img src={item['img']} alt={item['name']} className="h-60 w-full object-cover rounded-xl" />
//                         </div>
//                     ))
//                 ) : (
//                     <p>Loading...</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Page;

