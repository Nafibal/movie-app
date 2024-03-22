"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

const SearchForm: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/movie?query=${query}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <form
      action=""
      className="w-[50%] min-w-[200px] relative"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for Movies or Series..."
        className="w-full rounded-full py-2 px-4 text-black outline-none border-none"
        name="route"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="h-full px-8 rounded-full bg-zinc-700 hover:bg-zinc-800 transition text-white absolute right-0 top-0 outline-none border-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
