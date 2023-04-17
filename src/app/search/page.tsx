import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";
import React from "react";

const Search = async ({ searchParams }: any) => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  const response =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.q}
  `);

  if (!response.ok) {
    throw new Error("Something sent wrong");
  }

  const data = await response.json();

  const results = data;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">Try Something else or go back to home page</p>
        <Link href={"/"} className="text-blue-500">
          HOME
        </Link>
      </div>
    );
  }

  return (
    <div>
      {data &&
        <WebSearchResults results={results} />}
    </div>
  );
};

export default Search;
