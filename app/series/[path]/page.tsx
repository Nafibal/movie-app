import React from "react";
import {
  fetchMovies,
  fetchSeries,
  getCast,
  getMovie,
  getMovieMedia,
  getMovieReview,
  getSeriesDetail,
} from "@/api/action";
import MoviePage from "@/components/MoviePage";
import MovieList from "@/components/MovieList";

const page = async ({ params }: { params: { path: string } }) => {
  if (
    params.path == "airing_today" ||
    params.path == "on_the_air" ||
    params.path == "popular" ||
    params.path == "top_rated"
  ) {
    const series = await fetchSeries(params.path);
    return (
      <div className="mt-20">
        <MovieList data={series} path={params.path} loadMore isMovie={false} />
      </div>
    );
  } else {
    const series = await getSeriesDetail(params.path);
    // const reviews = await getMovieReview(params.path);
    const casts = await getCast("tv", params.path);
    // const media = await getMovieMedia(params.path);
    return (
      <MoviePage
        movie={series}
        // reviews={reviews}
        casts={casts}
        // media={media}
        isMovie={false}
      />
    );
  }
};

export default page;
