import { fetchSeries } from "@/api/action";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";

export default async function Home() {
  const airingTodaySeries = await fetchSeries("airing_today");
  const onTheAirSeries = await fetchSeries("on_the_air");
  const popularSeries = await fetchSeries("popular");
  const topRatedSeries = await fetchSeries("top_rated");

  return (
    <>
      <Billboard movie={airingTodaySeries[0]} isMovie={false} />
      <div className="pb-20">
        <MovieList
          isMovie={false}
          data={airingTodaySeries.slice(0, 4)}
          path="airing_today"
          seeMore
        />
        <MovieList
          isMovie={false}
          data={onTheAirSeries.slice(0, 4)}
          path="on_the_air"
          seeMore
        />
        <MovieList
          isMovie={false}
          data={popularSeries.slice(0, 4)}
          path="popular"
          seeMore
        />
        <MovieList
          isMovie={false}
          data={topRatedSeries.slice(0, 4)}
          path="top_rated"
          seeMore
        />
      </div>
    </>
  );
}
