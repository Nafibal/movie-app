import React from "react";
import {
  fetchMovies,
  getCast,
  getMovie,
  getMovieMedia,
  getMovieReview,
} from "@/api/action";
import MoviePage from "@/components/MoviePage";
import MovieList from "@/components/MovieList";

const page = async ({ params }: { params: { path: string } }) => {
  if (
    params.path == "now_playing" ||
    params.path == "popular" ||
    params.path == "top_rated" ||
    params.path == "upcoming"
  ) {
    const movies = await fetchMovies(params.path);
    return (
      <div className="mt-20">
        <MovieList data={movies} path={params.path} loadMore />
      </div>
    );
  } else {
    const movie = await getMovie(params.path);
    const reviews = await getMovieReview(params.path);
    const casts = await getCast("movie", params.path);
    const media = await getMovieMedia(params.path);

    return (
      <MoviePage
        movie={movie}
        reviews={reviews}
        casts={casts}
        media={media}
        isMovie
      />
    );
  }
};

export default page;
