import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import { TbGridDots } from "react-icons/tb";
import { RiSettings3Line } from "react-icons/ri";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  return (
    <header className="stick top-0 bg-white">
      <div className="flex items-center w-full p-6 justify-between">
        <Link href={"/"}>
          <Image
            alt="Google image"
            width={100}
            height={40}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            }
          />
        </Link>
        <div className="flex-1 flex justify-center">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-1">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 rounded-md text-white font-md  hover:brightness-105 focus:outline-none active:ring-gray-300 hover:shadow-md transition-all px-6 py-2 ml-2">
          {" "}
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
