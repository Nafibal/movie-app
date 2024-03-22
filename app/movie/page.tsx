import { fetchMovies } from "@/api/action";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";

export default async function Home() {
  const nowPlayingMovies = await fetchMovies("now_playing");
  const popularMovies = await fetchMovies("popular");
  const topRatedMovies = await fetchMovies("top_rated");
  const upcomingMovies = await fetchMovies("upcoming");

  return (
    <>
      <Billboard movie={nowPlayingMovies[0]} />
      <div className="pb-20">
        <MovieList
          data={nowPlayingMovies.slice(0, 4)}
          path="now_playing"
          seeMore
        />
        <MovieList data={popularMovies.slice(0, 4)} path="popular" seeMore />
        <MovieList data={topRatedMovies.slice(0, 4)} path="top_rated" seeMore />
        <MovieList data={upcomingMovies.slice(0, 4)} path="upcoming" seeMore />
      </div>
    </>
  );
}
