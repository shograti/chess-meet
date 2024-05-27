import { CreateEventSheet } from "@/components/events/create-event-sheet";
import { EventList } from "@/components/events/event-list";
import { EventSelect } from "@/components/events/event-select";
import { Map } from "@/components/map";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { useMemo, useState } from "react";

const events = [
  {
    id: "1",
    title: "Chess Tournament",
    description: "Join our annual chess tournament and showcase your skills!",
    dateTime: new Date(),
    fullAddress: "123 Main St, Anytown, USA",
    participants: 0,
  },
  {
    id: "2",
    title: "Chess Workshop",
    description: "Learn advanced chess strategies from Grandmaster John Doe.",
    dateTime: new Date(),
    fullAddress: "456 Elm St, Somewhere, USA",
    participants: 8,
  },
  {
    id: "3",
    title: "Chess Club Meeting",
    description: "Discuss chess tactics and play friendly matches.",
    dateTime: new Date(),
    fullAddress: "789 Oak Ave, Nowhere, USA",
    participants: 8,
  },
  {
    id: "4",
    title: "Chess Simultaneous Exhibition",
    description: "Challenge the chess master in a simultaneous exhibition.",
    dateTime: new Date(),
    fullAddress: "321 Pine Rd, Anytown, USA",
    participants: 8,
  },
  {
    id: "5",
    title: "Chess Strategy Workshop",
    description: "Improve your chess strategy with expert guidance.",
    dateTime: new Date("2022-02-15T10:00:00"),
    fullAddress: "654 Cedar Ln, Somewhere, USA",
    participants: 8,
  },
  {
    id: "6",
    title: "Chess Blitz Tournament",
    description: "Test your speed chess skills in a fast-paced tournament.",
    dateTime: new Date(),
    fullAddress: "987 Maple Dr, Nowhere, USA",
    participants: 8,
  },
];

export const Home = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [areEventsVisible, setAreEventsVisible] = useState(true);
  const [sortMethod, setSortMethod] = useState("most-recent");

  const sortedEvents = useMemo(() => {
    const eventsCopy = [...events]; //
    switch (sortMethod) {
      case "most-recent":
        return eventsCopy.sort((a: any, b: any) => b.dateTime - a.dateTime);
      case "most-popular":
        return eventsCopy.sort((a, b) => b.participants - a.participants);
      case "name":
        return eventsCopy.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return eventsCopy;
    }
  }, [sortMethod]);

  return (
    <MaxWidthWrapper>
      <div className="mt-6 flex flex-col ">
        <Label className="text-xl">Events</Label>
        <div className="flex gap-4 items-center mt-1.5">
          <Input className="" placeholder="Search anything..." />
          <Sheet>
            <SheetTrigger>
              <Button variant="secondary" className="self-center font-bold">
                Create Event
              </Button>
            </SheetTrigger>
            <CreateEventSheet />
          </Sheet>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h2
            className="flex gap-2 items-center text-xl cursor-pointer"
            onClick={() => setAreEventsVisible((prev) => !prev)}
          >
            Latest events{" "}
            <Switch
              defaultChecked={true}
              onCheckedChange={(e) => setAreEventsVisible(e)}
            />
          </h2>
          <EventSelect onSortChange={setSortMethod} />
        </div>

        {areEventsVisible && <EventList events={sortedEvents} />}
      </div>
      <div className="mt-6">
        <h2
          onClick={() => setIsMapVisible((prev) => !prev)}
          className="flex gap-2 items-center text-xl cursor-pointer"
        >
          <span>Map</span>

          <Switch
            defaultChecked={false}
            onCheckedChange={(e) => setIsMapVisible(e)}
          />
        </h2>
        {isMapVisible && <Map />}
      </div>
    </MaxWidthWrapper>
  );
};
