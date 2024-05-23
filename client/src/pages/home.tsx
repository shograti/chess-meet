import { Map } from "@/components/map";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const Home = () => {
  const [isMapVisible, setIsMapVisible] = useState(true);
  return (
    <MaxWidthWrapper>
      <div className="mt-6"></div>
      <h2 className="flex gap-2 items-center text-xl">
        <span>Map</span>
        <button
          onClick={() => setIsMapVisible((prev) => !prev)}
          className="flex items-center gap-1"
        >
          {isMapVisible ? <ChevronUp /> : <ChevronDown />}
        </button>
      </h2>
      {isMapVisible && <Map />}
    </MaxWidthWrapper>
  );
};
