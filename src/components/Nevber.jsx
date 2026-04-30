"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // 👉 logout function
  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={30}
            height={30}
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-5 text-sm">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/all-photo"}>All Photos</Link></li>
          <li><Link href={"/pricing"}>Pricing</Link></li>
          

          {/* 👉 Profile only when logged in */}
          {user && (
            <li><Link href={"/profile"}>Profile</Link></li>
          )}
        </ul>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <ul className="flex items-center gap-3 text-sm">

            {isPending ? (
              <li>Loading...</li>
            ) : user ? (
              // 👉 Logged in
              <li className="flex items-center gap-3">
  <button
    onClick={handleLogout}
    className="px-3 py-1 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
  >
    SignOut
  </button>

  <Avatar>
    <AvatarImage
      src={user?.image || "/default-avatar.png"}
      alt={user?.name || "User"}
      referrerPolicy="no-referrer"
    />
    <AvatarFallback>
      {user?.name?.[0] || "U"}
    </AvatarFallback>
  </Avatar>
</li>
            ) : (
              // 👉 Logged out
              <>
                <li>
                  <Link href={"/singup"}>SignUp</Link>
                </li>
                <li>
                  <Link href={"/singin"}>SignIn</Link>
                </li>
              </> 
            )}

          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;