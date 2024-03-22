import React from "react";

import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";
import Link from "next/link";
import formatString from "@/utils/formatString";
import LoadMore from "./LoadMore";
import { Movie } from "@/lib/types";

interface MovieListProps {
  data: Movie[];
  path: string;
  seeMore?: boolean;
  loadMore?: boolean;
  isMovie?: boolean;
}

const MovieList: React.FC<MovieListProps> = ({
  data,
  path,
  seeMore,
  loadMore,
  isMovie = true,
}) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 mb-8 space-y-8">
      <div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
            {formatString(path)}
          </p>
          {seeMore && (
            <Link href={`/${isMovie ? "movie" : "series"}/${path}`}>
              <button className="bg-neutral-800 px-4 py-1 rounded hover:bg-neutral-600 transition">
                See More
              </button>
            </Link>
          )}
        </div>
        <div className="grid grid-cols-4 gap-2 mb-2">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} isMovie={isMovie} />
          ))}
        </div>
        {loadMore && <LoadMore path={path} isMovie={isMovie} />}
      </div>
    </div>
  );
};

export default MovieList;
