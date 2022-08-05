import React from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchQuery } = useGlobalContext();

  return (
    <>
    
      <h1 className="text-center text-3xl font-extrabold text-blue-900 py-5">
        Tech News By Shiv Shakti Enterprises
      </h1>

    
      <form>
        <input
          type="text"
          placeholder="e.g. php"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-1 block w-3/4 mx-auto px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
        />
      </form>
    </>
  );
};

export default Search;
