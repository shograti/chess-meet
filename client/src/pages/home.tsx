import { EventList } from "@/components/events/event-list";
import { Event } from "@/components/events/types";
import { Map } from "@/components/map";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const events: Event[] = [
  {
    title: "Chess Tournament",
    description: "Join our annual chess tournament and showcase your skills!",
    date: "15/02/2022",
    time: "10:00 - 18:00",
    fullAddress: "123 Main St, Anytown, USA",
  },
  {
    title: "Chess Workshop",
    description: "Learn advanced chess strategies from Grandmaster John Doe.",
    date: "10/03/2022",
    time: "14:00 - 16:00",
    fullAddress: "456 Elm St, Somewhere, USA",
  },
  {
    title: "Chess Club Meeting",
    description: "Discuss chess tactics and play friendly matches.",
    date: "25/03/2022",
    time: "19:00 - 21:00",
    fullAddress: "789 Oak Ave, Nowhere, USA",
  },
  {
    title: "Chess Simultaneous Exhibition",
    description: "Challenge the chess master in a simultaneous exhibition.",
    date: "05/04/2022",
    time: "16:00 - 18:00",
    fullAddress: "321 Pine Rd, Anytown, USA",
  },
  {
    title: "Chess Strategy Workshop",
    description: "Improve your chess strategy with expert guidance.",
    date: "20/04/2022",
    time: "10:00 - 12:00",
    fullAddress: "654 Cedar Ln, Somewhere, USA",
  },
  {
    title: "Chess Blitz Tournament",
    description: "Test your speed chess skills in a fast-paced tournament.",
    date: "30/04/2022",
    time: "13:00 - 17:00",
    fullAddress: "987 Maple Dr, Nowhere, USA",
  },
];

export const Home = () => {
  const [isMapVisible, setIsMapVisible] = useState(true);
  const [areEventsVisible, setAreEventsVisible] = useState(true);
  return (
    <MaxWidthWrapper>
      <div className="mt-6 flex flex-col ">
        <Label className="text-xl">Events</Label>
        <div className="flex gap-4 items-center mt-1.5">
          <Input className="" placeholder="Search anything..." />
          <Button variant="secondary" className="self-center font-bold">
            Create Event
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <h2
          className="flex gap-2 items-center text-xl cursor-pointer"
          onClick={() => setAreEventsVisible((prev) => !prev)}
        >
          Latest events {areEventsVisible ? <ChevronUp /> : <ChevronDown />}{" "}
        </h2>
        {areEventsVisible && <EventList events={events} />}
      </div>
      <div className="mt-6">
        <h2
          onClick={() => setIsMapVisible((prev) => !prev)}
          className="flex gap-2 items-center text-xl cursor-pointer"
        >
          <span>Map</span>

          {isMapVisible ? <ChevronUp /> : <ChevronDown />}
        </h2>
        {isMapVisible && <Map />}
      </div>
    </MaxWidthWrapper>
  );
};
