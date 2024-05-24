import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button, buttonVariants } from "../ui/button";
import { TEvent } from "./types";
import { Star, X } from "lucide-react";

interface EventListProps {
  events: TEvent[];
}

export const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};

interface EventItemProps {
  event: TEvent;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <Card className="rounded-md">
      <CardHeader>
        <div className=" flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>{event.description}</CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Star className="opacity-50 hover:opacity-100 cursor-pointer h-5 w-5" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Bookmark Event</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <X className="opacity-50 hover:opacity-100 cursor-pointer h-6 w-6" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Dismiss</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center gap-2">
          <div className="flex gap-2 self-end font-semibold text-xs text-center">
            <span>
              {event.date} at {event.time}
            </span>
            <span className="text-yellow-500 cursor-pointer hover:text-yellow-400">
              {event.fullAddress}
            </span>
          </div>
          <Button className="font-semibold">Join event</Button>
        </div>
      </CardContent>
    </Card>
  );
};
