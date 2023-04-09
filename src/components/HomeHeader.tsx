import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader(): JSX.Element {
  return (
    <header className="flex  p-5 text-sm justify-end">
      <div className="flex items-center space-x-4">
        <Link className="hover:underline" href="https://mail.google.com">
          Gmail
        </Link>
        <Link className="hover:underline" href="https://image.google.com">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white rounded-md px-6 py-2 font-medium hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
}
