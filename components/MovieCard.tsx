import displayScore from "@/utils/displayScore";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

interface MovieCardProps {
  data: Record<string, any>;
  isMovie: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ data, isMovie }) => {
  return (
    <Link
      href={isMovie ? `/movie/${data.id}` : `/series/${data.id}`}
      className="group bg-zinc-900 col-span relative h-[12vw]"
    >
      <div className="shadow-xl rounded-md w-full h-[12vw] overflow-hidden group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 cursor-pointer object-cover transition duration relative">
        <div className="absolute top-2 right-2 z-10 bg-zinc-800 py-1 px-2 rounded flex flex-row justify-center items-center gap-1">
          <FaStar /> <span> {displayScore(data.vote_average)} </span>
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={isMovie ? data.title : data.name}
          fill
          sizes="(min-width: 780px) calc(25vw - 30px), calc(25vw - 14px)"
          draggable="false"
          className="rounded-md"
        />
      </div>
      <div className="opacity-0 absolute top-0 transition duration-200 z-20 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <div className="cursor-pointer transition duration shadow-xl rounded-t-md w-full h-[12vw] overflow-hidden relative">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt={isMovie ? data.title : data.name}
            fill
            sizes="(min-width: 780px) calc(25vw - 30px), calc(25vw - 14px)"
            draggable="false"
            className="rounded-t-md"
          />
        </div>
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <h2 className="font-bold">{isMovie ? data.title : data.name}</h2>
          <p className="text-sm opacity-90 mb-1">
            {isMovie
              ? formatDate(data.release_date)
              : formatDate(data.first_air_date)}
          </p>
          <div className="text-sm flex flex-row  items-center gap-1">
            <FaStar /> <span> {displayScore(data.vote_average)} </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
