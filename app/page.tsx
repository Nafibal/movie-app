import { fetchDiscoverMovies, fetchDiscoverSeries } from "@/api/action";
import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default async function Home() {
  const { API_BASE_URL } = process.env;
  const movies = await fetchDiscoverMovies();
  const series = await fetchDiscoverSeries();

  return (
    <>
      <section className="w-full h-[80vh] relative">
        <Image
          src={`/hero-bg.jpg`}
          alt={"Hero Image"}
          fill
          draggable="false"
          className="w-full h-full object-cover brightness-[40%] transition duration-500"
          priority
        />
        <div className="absolute top-0 bottom-0 right-0 left-0 text-center flex flex-col justify-center items-center">
          <h2 className="mb-2 text-[3rem] font-bold">Welcome to MOVIE APP.</h2>
          <h3 className="mb-8 text-4xl font-semibold">
            Discover Million of Movies and Series that suits your taste!
          </h3>
          <SearchForm />
        </div>
      </section>
      <section className="py-20">
        <MovieList
          data={movies.slice(0, 4)}
          seeMore={false}
          loadMore={false}
          isMovie={true}
          path="discover_movie"
        />
        <MovieList
          data={series.slice(0, 4)}
          seeMore={false}
          loadMore={false}
          isMovie={false}
          path="discover_series"
        />
      </section>
    </>
  );
}
