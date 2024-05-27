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
import { Button } from "../ui/button";
import { Blocks, Clock, Euro, Star, X } from "lucide-react";
import { format } from "date-fns";

export interface TEvent {
  id: string;
  title: string;
  description: string;
  dateTime: Date;
  fullAddress: string;
  participants: number;
  gamePace: string;
  areBoardAndPiecesProvided: boolean;
  cashPrize?: number | null;
}

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
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <CardTitle className="flex items-start flex-wrap gap-2 md:flex-row flex-col">
              {event.title}{" "}
              <span className="text-xs font-light uppercase text-yellow-500">
                {event.participants
                  ? event.participants + " participant(s)"
                  : "Become the first participant by joining the event !"}
              </span>
            </CardTitle>
            <CardDescription className="mt-1">
              {event.description}
            </CardDescription>
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
        <div className="flex sm:flex-row flex-col justify-between sm:gap-2 gap-4">
          <div className="flex flex-col gap-4 items-start">
            <div className="flex flex-col items-start gap-2 sm:gap-4 flex-wrap border-2 rounded-lg p-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="text-sm flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {event.gamePace}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Game pace</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="text-sm flex items-center gap-1">
                      <Blocks className="h-4 w-4" />
                      {event.areBoardAndPiecesProvided
                        ? "Board and pieces provided"
                        : "Bring your own board and pieces"}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Do I have to bring my own board ?</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {event.cashPrize ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="text-sm flex items-center gap-1">
                        <Euro className="h-4 w-4" />
                        {event.cashPrize / 100} cashprize
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Cashprize</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : null}
            </div>

            <div className="flex gap-2 font-semibold text-xs">
              <span>{format(event.dateTime, "dd/MM/yyyy 'at' HH:mm")}</span>
              <span className="text-yellow-500 cursor-pointer hover:text-yellow-400">
                {event.fullAddress}
              </span>
            </div>
          </div>
          <Button className="font-semibold self-stretch sm:self-end">
            Join event
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
