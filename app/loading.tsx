import Image from "next/image";
import React from "react";
import spinner from "../public/spinner.svg";

const loading = () => {
  return (
    <div className="h-screen w-screen bg-black transition flex justify-center items-center">
      <Image
        src={spinner}
        alt="spinner"
        width={56}
        height={56}
        className="object-contain"
      />
    </div>
  );
};

export default loading;
