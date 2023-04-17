"use client";

import React, { useState} from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsMicFill } from "react-icons/bs";


const SearchBox = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const [input, setInput] = useState<string>(search as string || "");
  
  const handleSubmit = (e: React.FormEvent<HTMLElement | SVGElement>) => {
    e.preventDefault();
    if(!input || !input.trim()) return
    router.push(`/search?q=${input}`)
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full justify-center items-center border border-gray-200 px-5 py-3 rounded-full focus-within:shadow-md hover:shadow-md transition-shadow max-w-[95%]"
    >
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        className="flex-grow focus:outline-none"
      />
      <RxCross2 className="text-xl text-gray-500 mr-3 cursor-pointer" onClick={() => setInput("")} />
      <BsMicFill className="hidden sm:inline-flex mr-3 text-4xl pl-4 border-l-2 border-gray-300 text-blue-500 cursor-pointer" />
      <AiOutlineSearch className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer mr-3" onClick={handleSubmit} />
    </form>
  );
};

export default SearchBox;
