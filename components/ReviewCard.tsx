import { Review } from "@/lib/types";
import formatDate from "@/utils/formatDate";
import shortenText from "@/utils/shortenText";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-neutral-900 px-8 py-4 rounded shadow w-[40%] h-[250px] flex flex-col flex-shrink-0">
      <h1 className="font-bold text-2xl mb-1"> {review.author}</h1>
      <div className="flex flex-row gap-2 items-center mb-2 text-sm">
        <span className="flex flex-row justify-center items-center gap-1 bg-black px-[8px] py-[2px] rounded">
          <FaStar className="text-yellow-400" /> {review.author_details.rating}
          .0
        </span>
        <span>{formatDate(review.created_at)}</span>
      </div>
      <p>{shortenText(review.content, 20)}</p>
      <Link
        className="mt-auto cursor-pointer hover:text-gray-300"
        href={review.url}
        target="_blank"
      >
        read more...
      </Link>
    </div>
  );
};

export default ReviewCard;
