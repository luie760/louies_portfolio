import React from "react";
import { Spotlight } from "../ui/Spotlight";

type Props = {
    text: string;
}

const SpotlightText = ({text}: Props) => {
  return (
    <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-section-bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          {text}
        </h1>
      </div>
    </div>
  );
}

export default SpotlightText