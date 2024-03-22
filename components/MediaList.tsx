"use client";
import { MovieMedia } from "@/lib/types";
import React, { useState } from "react";

interface MediaListProps {
  media: MovieMedia[];
}

const MediaList: React.FC<MediaListProps> = ({ media }) => {
  const uniqueType = Array.from(new Set(media.map((item) => item.type)));

  const [selectedType, setSelectedType] = useState(uniqueType[0]);

  return (
    <div>
      <div className="flex gap-4">
        {uniqueType.map((type) => {
          return (
            <span
              onClick={() => setSelectedType(type)}
              className={`pb-2 ${
                type == selectedType ? "border-b-2 border-b-white" : ""
              } cursor-pointer hover:font-bold transition-all `}
            >
              {type}
            </span>
          );
        })}
      </div>
      <div className="flex flex-nowrap overflow-x-auto justify-start items-center scrollbar-none gap-8">
        {media
          .filter((m) => m.type == selectedType)
          .map((m) => {
            return (
              <iframe
                src={`https://www.youtube.com/embed/${m.key}`}
                width="100%"
                height="200px"
                allowFullScreen
              ></iframe>
            );
          })}
      </div>
    </div>
  );
};

export default MediaList;
