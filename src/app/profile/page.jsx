"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@heroui/react"; // HeroUI এর স্ট্যান্ডার্ড ইমপোর্ট
import { authClient } from "@/lib/auth-client";
import { UpdateUserModal, WithForm } from "@/components/model";
// আইকনের জন্য lucide-react ব্যবহার করা হয়েছে

const ProfileCard = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // সেশন লোড হওয়ার সময় একটি লোডিং স্টেট (ঐচ্ছিক কিন্তু ভালো)
  if (isPending)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 ">
      {/* মেইন কার্ড কন্টেইনার */}
      <div className="bg-white rounded-[45px] shadow-sm border border-gray-100 p-12 w-full max-w-[400px] text-center -mt-28">
        {/* প্রোফাইল ইমেজ - ফ্লেক্স দিয়ে মাঝখানে আনা হয়েছে */}
        {/* প্রোফাইল ইমেজ - ফ্লেক্স দিয়ে মাঝখানে আনা হয়েছে */}
        <div className="flex justify-center mb-6">
          <Avatar
            // ১. কাস্টম সাইজ দেওয়ার জন্য style ব্যবহার করা সবচেয়ে নিরাপদ
            style={{ width: "120px", height: "120px" }}
            className="text-3xl" // নাম (Fallback) এর সাইজ বড় করার জন্য
          >
            <AvatarImage
              src={user?.image || "/default-avatar.png"}
              alt={user?.name || "User"}
              className="w-full h-full object-cover" // ইমেজকে পুরোটা জুড়ে রাখার জন্য
              referrerPolicy="no-referrer"
            />
            <AvatarFallback className="text-3xl font-bold">
              {user?.name?.[0] || "U"}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* নাম এবং ইমেল */}
        <div className="space-y-1 mb-10">
          <h2 className="text-3xl font-bold text-black tracking-tight">
            {user?.name || "Khaled Khan"}
          </h2>
          <p className="text-gray-500 text-xl font-normal">
            {user?.email || "khaledkhan1267@gmail.com"}
          </p>
        </div>

        {/* আপডেট প্রোফাইল বাটন */}
       <UpdateUserModal />
      </div>
    </div>
  );
};

export default ProfileCard;
