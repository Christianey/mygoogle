import Link from "next/link";
import React from "react";
import PaginationButtons from "./PaginationButtons";

const ImageSearchResults = ({ results }: any) => {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24  pb-24 mt-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items?.map((result: any) => {
          return (
            <div className="group mb-8" key={result.link}>
              <div className="group flex flex-col">
                <Link href={result.image.contextLink} className="mb-4">
                  <img className="h-60 group-hover:shadow-md w-full object-contain transition-shadow" src={result.link} alt={result.title} />
                </Link>
                <Link href={result.image.contextLink}>
                  <h2 className="group-hover:underline truncate text-xl">{result.title}</h2>
                </Link>
                <Link href={result.image.contextLink}>
                  <p className="group-hover:underline text-gray-600">{result.displayLink}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
};

export default ImageSearchResults;
