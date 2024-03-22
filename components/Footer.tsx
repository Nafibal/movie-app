import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="px-4 md:px-16 py-10 bg-zinc-900 flex gap-28 items-start">
        <div>
          <h1 className="font-bold text-xl mb-4">Movies</h1>
          <div className="flex flex-col gap-2">
            <Link
              className="opacity-80 hover:opacity-100 transition"
              href={"/movie/now_playing"}
            >
              Now Playing
            </Link>
            <Link
              className="opacity-80 hover:opacity-100 transition"
              href={"/movie/popular"}
            >
              Popular
            </Link>
            <Link
              className="opacity-80 hover:opacity-100 transition"
              href={"/movie/top_rated"}
            >
              Top Rated
            </Link>
            <Link
              className="opacity-80 hover:opacity-100 transition"
              href={"/movie/upcoming"}
            >
              Upcoming
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-4">Series</h1>
          <div className="flex flex-col gap-2">
            <Link
              className="opacity-80 hover:opacity-100 transition"
              href={"/series/airing_today"}
            >
              Airing Today
            </Link>
            <Link
              className="opacity-80 hover:opacity-100 transition"
              href={"/series/on_the_air"}
            >
              On The Air
            </Link>
            <Link
              className="opacity-80 hover:opacity-100 transition"
              href={"/series/popular"}
            >
              popular
            </Link>
            <Link
              className="opacity-80 hover:opacity-100 transition"
              href={"/series/top_rated"}
            >
              Top Rated
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-16 py-10 bg-black flex gap-20 items-center">
        <h1 className="text-2xl font-bold">MOVIE APP</h1>
        <p className="opacity-60">©2024 Nafibal. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
