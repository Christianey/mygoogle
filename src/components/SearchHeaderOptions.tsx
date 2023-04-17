"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

const SearchHeaderOptions = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchTerm = useSearchParams();

  function selectTab(tab: string) {
    router.push(`/search${tab === "images" ? "/images" : ""}?${searchTerm}`);
  }
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center md:justify-start md:pl-40 text-gray-700 text-sm">
      <div
        className={`flex items-center bg-red space-x-1 border-transparent border-b-4 active:text-blue-500 px-3 pb-2 cursor-pointer ${
          pathname === "/search" ? "text-blue-600 !border-blue-600" : ""
        }`}
        onClick={() => {
          selectTab("");
        }}
      >
        <AiOutlineSearch />
        <p>All</p>
      </div>
      <div
        className={`flex items-center bg-red space-x-1 border-transparent border-b-4 active:text-blue-500 px-3 pb-2 cursor-pointer ${
          pathname === "/search/images" ? "text-blue-600 !border-blue-600" : ""
        }`}
        onClick={() => {
          selectTab("images");
        }}
      >
        <AiOutlineCamera />
        <p>Images</p>
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
