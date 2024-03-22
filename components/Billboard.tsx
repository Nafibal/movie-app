import React from "react";
import { fetchMovies } from "@/api/action";
import Image from "next/image";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Movie } from "@/lib/types";
import Link from "next/link";

interface BillboardProp {
  // movie: Movie;
  movie: Record<string, any>;
  isMovie?: boolean;
}

const Billboard: React.FC<BillboardProp> = async ({
  movie,
  isMovie = true,
}) => {
  return (
    <div className="relative h-[100vh]">
      {movie && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={isMovie ? movie.title : movie.name}
          fill
          draggable="false"
          className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
          priority
        />
      )}

      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {movie && (isMovie ? movie.title : movie.name)}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movie && movie.overview}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          {/* <PlayButton movieId={movie?.id} /> */}
          <Link href={`/movie/${movie.id}`}>
            <button
              // onClick={handleOpenModal}
              className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
              "
            >
              <AiOutlineInfoCircle className="w-4 md:w-7 mr-1" />
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
