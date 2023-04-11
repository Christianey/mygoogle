"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import randomWords from "random-words";

function HomeSearch(): JSX.Element {
  const router = useRouter();
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web/?searchTerm=${input.trimStart()}`);
  };

  const handleRandomSearch = () => {
    const randomWord = randomWords(1)[0];
    router.push(`/search/web/?searchTerm=${randomWord}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-center mt-5 border border-gray-200 px-5 py-3 rounded-full focus-within:shadow-md hover:shadow-md transition-shadow max-w-[90%] sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsMicFill className="text-xl text-gray-500 mr-3" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button className="btn" onClick={handleRandomSearch}>
          I'm feeling lucky
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
