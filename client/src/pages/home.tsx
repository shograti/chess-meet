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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget vestibulum urna. Sed consequat gravida neque, eget luctus lectus dignissim et. Nullam eget sapien sed ligula vulputate pharetra in quis ex. Sed elementum ligula a lorem dignissim rhoncus. Vivamus non felis diam. Fusce pulvinar ac mauris a malesuada. Vestibulum laoreet purus ac mattis pretium. Fusce placerat lorem augue, sed auctor elit consectetur ac. Donec id varius purus. Suspendisse feugiat laoreet efficitur. In porttitor consequat fermentum. Morbi faucibus venenatis ex, id ultricies dolor luctus eget. Aliquam odio erat biam. ",
    dateTime: new Date(),
    fullAddress: "123 Main St, Anytown, USA",
    participants: 0,
    createdAt: new Date("2022-09-01T12:00:00"),
  },
  {
    id: "2",
    title: "Chess Workshop",
    description: "Learn advanced chess strategies from Grandmaster John Doe.",
    dateTime: new Date(),
    fullAddress: "456 Elm St, Somewhere, USA",
    participants: 8,
    createdAt: new Date("2022-09-01T12:00:00"),
  },
  {
    id: "3",
    title: "Chess Club Meeting",
    description: "Discuss chess tactics and play friendly matches.",
    dateTime: new Date(),
    fullAddress: "789 Oak Ave, Nowhere, USA",
    participants: 8,
    createdAt: new Date("2022-09-01T12:00:00"),
  },
  {
    id: "4",
    title: "Chess Simultaneous Exhibition",
    description: "Challenge the chess master in a simultaneous exhibition.",
    dateTime: new Date(),
    fullAddress: "321 Pine Rd, Anytown, USA",
    participants: 8,
    createdAt: new Date("2022-08-01T12:00:00"),
  },
  {
    id: "5",
    title: "Chess Strategy Workshop",
    description: "Improve your chess strategy with expert guidance.",
    dateTime: new Date("2022-02-15T10:00:00"),
    fullAddress: "654 Cedar Ln, Somewhere, USA",
    participants: 8,
    createdAt: new Date("2022-09-01T12:00:00"),
  },
  {
    id: "6",
    title: "Chess Blitz Tournament",
    description: "Test your speed chess skills in a fast-paced tournament.",
    dateTime: new Date(),
    fullAddress: "987 Maple Dr, Nowhere, USA",
    participants: 8,
    createdAt: new Date("2022-09-01T12:00:00"),
  },
];

export const Home = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [areEventsVisible, setAreEventsVisible] = useState(true);
  const [sortMethod, setSortMethod] = useState("most-recent");

  const now: any = new Date();

  const sortedEvents = useMemo(() => {
    const eventsCopy = [...events];
    switch (sortMethod) {
      case "most-recent":
        return eventsCopy.sort((a: any, b: any) => b.createdAt - a.createdAt);
      case "most-popular":
        return eventsCopy.sort((a, b) => b.participants - a.participants);
      case "name":
        return eventsCopy.sort((a, b) => a.title.localeCompare(b.title));
      case "closest-in-time":
        return eventsCopy.sort((a: any, b: any) => {
          const distanceA = Math.abs(a.dateTime - now);
          const distanceB = Math.abs(b.dateTime - now);
          return distanceA - distanceB;
        });
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
