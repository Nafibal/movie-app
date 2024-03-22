import formatDate from "@/utils/formatDate";
import formatTime from "@/utils/formatTime";
import Image from "next/image";
import React from "react";
import ReviewCard from "./ReviewCard";
import {
  Cast,
  MovieDetails,
  MovieMedia,
  Review,
  Series,
  SeriesDetails,
} from "@/lib/types";
import MovieDesc from "./MovieDesc";
import CastCard from "./CastCard";
import imageSource from "@/utils/imageSource";
import MediaList from "./MediaList";
import formatDollar from "@/utils/formatDollar";

interface MoviePageProps {
  movie: MovieDetails & SeriesDetails;
  reviews?: Review[];
  casts: Cast[];
  media?: MovieMedia[];
  isMovie: boolean;
}

const MoviePage: React.FC<MoviePageProps> = ({
  movie,
  reviews,
  casts,
  media,
  isMovie = true,
}) => {
  return (
    <div className="pb-20">
      {/* MOVIE HERO IMAGE */}
      <div className="w-full h-[85vh] absolute top-0">
        <Image
          // src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          src={imageSource("original", movie.backdrop_path)}
          alt={isMovie ? movie.title : movie.name}
          fill
          draggable="false"
          className="w-full h-full object-cover transition duration-500"
          priority
        />
        <div className=" w-full h-full absolute bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="relative z-20 mx-auto mt-[45vh] w-[85%]">
        {/* MOVIE DESCRIPTION */}
        <div className="w-[60%] bg-[rgba(0,0,0,.3)] px-10 py-16 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">
            {isMovie
              ? formatDate(movie.release_date, "year")
              : formatDate(movie.first_air_date, "year")}
          </h3>
          <h1 className="font-bold text-3xl mb-1">
            {isMovie ? movie.title : movie.name}
          </h1>
          <p className="opacity-80 mb-5">
            {isMovie
              ? formatDate(movie.release_date)
              : formatDate(movie.first_air_date)}{" "}
            |{" "}
            {movie.genres.map(
              (item: { id: number; name: string }) => `${item.name} `
            )}{" "}
            |{" "}
            {isMovie
              ? formatTime(movie.runtime)
              : `${movie.number_of_seasons} seasons, ${movie.number_of_episodes} episodes`}
          </p>
          <p className="mb-4 italic font-semibold text-white opacity-70">
            {movie.tagline}
          </p>
          <h2 className="mb-3 text-xl font-bold">Overview</h2>
          <p className="mb-4">{movie.overview}</p>
          {isMovie && (
            <div className="flex gap-8">
              <div>
                <h2 className="mb-3 text-xl font-bold">Budget</h2>
                <p className="mb-4">{formatDollar(movie.budget)}</p>
              </div>
              <div>
                <h2 className="mb-3 text-xl font-bold">Revenue</h2>
                <p className="mb-4">{formatDollar(movie.revenue)}</p>
              </div>
            </div>
          )}
        </div>
        {/* MOVIE CAST */}
        <MovieDesc title="Cast" items={casts}>
          {casts.slice(0, 10).map((cast: Cast) => {
            return <CastCard cast={cast} key={cast.id} />;
          })}
        </MovieDesc>
        {/* MOVIE REVIEW
        <MovieDesc title="Reviews" items={reviews}>
          {reviews.slice(0, 4).map((review: Review) => {
            return <ReviewCard review={review} key={review.id} />;
          })}
        </MovieDesc>
        MOVIE MEDIA
        <MovieDesc title="Media" items={media}>
          <MediaList media={media} />
        </MovieDesc> */}
      </div>
    </div>
  );
};

export default MoviePage;
