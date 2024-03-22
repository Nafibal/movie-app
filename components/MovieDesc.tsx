import { Cast, MovieMedia, Review } from "@/lib/types";
import React from "react";

interface MovieDescProps {
  title: string;
  items: Review[] | Cast[] | MovieMedia[];
  children: React.ReactNode;
}

const MovieDesc: React.FC<MovieDescProps> = ({ title, items, children }) => {
  return (
    <div className="px-10 pb-10">
      <h1 className="font-bold text-3xl mb-4 ">{title}</h1>
      <div className="flex flex-nowrap overflow-x-auto justify-start items-center scrollbar-none gap-8">
        {items.length != 0 ? (
          children
        ) : (
          <p>There are currently no {title} on this movie</p>
        )}
      </div>
    </div>
  );
};

export default MovieDesc;
