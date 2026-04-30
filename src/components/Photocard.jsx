import Image from "next/image";
import Link from "next/link";
import React from "react";

const Photocard = ({ photo }) => {
  return (
    // কার্ডের নির্দিষ্ট প্রস্থ (w-full) এবং উচ্চতা নিশ্চিত করা হয়েছে
    <div className="w-full max-w-[400px] bg-white rounded-[2.5rem] p-5 shadow-lg border border-gray-100 font-sans flex flex-col">
      
      {/* Image Section */}
      <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-5">
        {/* Realistic Badge - এটাকে ইমেজের ডিভ-এর ভেতরে রাখা হয়েছে যাতে absolute পজিশন ঠিক থাকে */}
        <div className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md px-4 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
          {photo.category}
        </div>

        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill // ছবিকে কন্টেইনারের সমান করার জন্য 'fill' ব্যবহার করা হয়েছে
          className="object-cover" // যাতে ছবি স্ট্রেচ না হয়ে ক্রপ হয়ে ফিট হয়
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="px-2 flex flex-col flex-grow">
        {/* শিরোনাম - লাইন বেশি হলেও যাতে ডিজাইন না ভাঙে তাই line-clamp ব্যবহার করা যেতে পারে */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-1">
          {photo.title}
        </h2>

        {/* Stats Row */}
        <div className="flex items-center gap-6 mb-6 border-t border-gray-100 pt-5">
          {/* Likes */}
          <div className="flex items-center gap-2">
            <span className="text-xl text-red-500">❤️</span>
            <span className="text-xl font-semibold text-gray-800 tracking-tight">
              {photo.likes}
            </span>
          </div>

          {/* Vertical Divider */}
          <div className="h-6 w-[1px] bg-gray-200"></div>

          {/* Downloads */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="text-xl font-semibold text-gray-800 tracking-tight">
                {photo.downloads}
            </span>
          </div>
        </div>

        {/* Action Button -mt-auto ব্যবহার করা হয়েছে যাতে বাটন সবসময় নিচে থাকে */}
        <Link href={`/all-photo/${photo.id}`} className="mt-auto">
          <button className="w-full mt-auto py-3 text-lg font-medium text-gray-800 border-2 border-gray-100 rounded-full hover:bg-gray-50 transition-colors duration-200">
          View
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Photocard;