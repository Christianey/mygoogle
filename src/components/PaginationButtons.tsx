"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PaginationButtons = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("q");
  const startIndex = +(searchParams.get("start") || 1) as number;

  return (
    <div className="text-blue-600 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link href={`${pathname}?q=${searchTerm}&start=${startIndex - 10}`}>
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronLeft />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link href={`${pathname}?q=${searchTerm}&start=${startIndex + 10}`}>
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
