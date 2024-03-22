import { Cast } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface CastCardProps {
  cast: Cast;
}

const CastCard: React.FC<CastCardProps> = ({ cast }) => {
  return (
    <div className="flex flex-col bg-neutral-800 shadow w-[200px] h-[260px] rounded overflow-hidden flex-shrink-0">
      <div className="h-[70%] w-full relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
          alt="Cast"
          fill
          objectFit="cover"
          draggable={false}
        />
      </div>
      <div className="px-4 py-2">
        <h2 className="text-sm font-bold mb-1">{cast.name}</h2>
        <p className="text-sm">{cast.character}</p>
      </div>
    </div>
  );
};

export default CastCard;
