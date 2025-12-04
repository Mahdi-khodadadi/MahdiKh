import { useParams } from "react-router-dom";
import { posts } from "../components/post";

const BlogPage = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center bg-backg text-white p-8">
        <p className="text-xl">Post not found</p>
      </div>
    );

  return (
    <div className="pt-14 min-h-screen bg-backg flex flex-col items-center text-white">
      <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-white">
        {post.title}
      </h2>

      <div className="mt-8 gap-4 flex flex-col w-[90%] md:w-[70%]">
        <p className="flex flex-col gap-6 bg-[#1f1f2e] border border-[#333] leading-[2.2rem] text-justify text-gray-200 px-8 py-[1.2rem] rounded-xl">
          {post.LongText}
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
