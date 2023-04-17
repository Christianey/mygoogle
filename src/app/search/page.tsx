import React from "react";

const Search = async ({ searchParams }: any) => {
  const result =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.q}
  `);
  const data = await result.json();

  return (
    <div>
      {data &&
        data.items.map((item: any) => <p key={item.title}>{item.title}</p>)}
    </div>
  );
};

export default Search;
