import Image from "next/image";
import Link from "next/link";
import React from "react";

const Photodetails = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    "https://pixgen-nextjs-one.vercel.app/data.json",
  );
  const data = await response.json();
  console.log(data);
  const photodetails = data.find((photo) => photo.id === parseInt(id));
  console.log(photodetails);
  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <Link
          href="/"
          className="mb-6 inline-block text-gray-500 hover:text-black transition-all"
        >
          <span className="text-2xl">←</span> Back
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Image Container */}
          <div className="lg:w-2/3">
            <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-gray-100">
              <Image
                src={photodetails.imageUrl}
            
                alt={photodetails.title}
                fill // ছবিকে কন্টেইনারের সমান করার জন্য 'fill' ব্যবহার করা হয়েছে
                className="object-cover" // যাতে ছবি স্ট্রেচ না হয়ে ক্রপ হয়ে ফিট হয়
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Category Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full font-bold shadow-md">
                {photodetails.category}
              </div>
            </div>

            {/* Prompt Section (Mobile/Tablet view er jonno niche thakbe) */}
            <div className="mt-8 p-6 bg-gray-50 rounded-3xl border border-gray-100">
              <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-3">
                Prompt
              </h3>
              <p className="text-gray-700 italic leading-relaxed text-lg italic">
                {photodetails.prompt}
              </p>
            </div>
          </div>

          {/* Right: Details Container */}
          <div className="lg:w-1/3 flex flex-col">
            <h1 className="text-4xl font-black text-gray-900 mb-2 leading-tight">
              {photodetails.title}
            </h1>
            <p className="text-gray-400 mb-8 text-sm">
              Created on: {new Date(photodetails.createdAt).toLocaleDateString()}
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-10 border-y border-gray-100 py-6 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">
                  {photodetails.likes}
                </span>
                <span className="text-gray-400 text-sm">Likes</span>
              </div>
              <div className="w-[1px] h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">
                  {photodetails.downloads}
                </span>
                <span className="text-gray-400 text-sm">Downloads</span>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">AI Model</span>
                <span className="bg-black text-white px-4 py-1 rounded-lg text-sm font-bold">
                  {photodetails.model}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">Resolution</span>
                <span className="text-gray-900 font-bold">
                  {photodetails.resolution}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-gray-400 uppercase mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {photodetails.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm text-gray-700 cursor-pointer transition-all"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto space-y-4">
              <button className="w-full bg-black text-white py-5 rounded-full text-xl font-bold hover:shadow-xl hover:bg-gray-800 transition-all active:scale-95">
                Download Now
              </button>
              <button className="w-full border-2 border-gray-100 text-gray-600 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all">
                Share Art
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photodetails;
