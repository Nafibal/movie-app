"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import spinner from "../public/spinner.svg";

import { useInView } from "react-intersection-observer";
import { fetchMovies, fetchSeries } from "@/api/action";
import MovieCard from "./MovieCard";

interface LoadMoreProps {
  path: string;
  isMovie?: boolean;
}

const LoadMore: React.FC<LoadMoreProps> = ({ path, isMovie = true }) => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<Record<string, any>[]>([]);
  const [page, setPage] = useState<number>(2);

  useEffect(() => {
    if (inView) {
      if (isMovie) {
        fetchMovies(path, page).then((res) => setData([...data, ...res]));
      } else {
        fetchSeries(path, page).then((res) => setData([...data, ...res]));
      }
      setPage(page + 1);
    }
  }, [inView, data]);

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {data.map((movie) => (
          <MovieCard key={movie.id} data={movie} isMovie={isMovie} />
        ))}
      </div>
      <section>
        <div className="flex justify-center py-4" ref={ref}>
          <Image
            src={spinner}
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default LoadMore;
