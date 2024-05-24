import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Event } from "./types";

export const EventItem = ({ event }) => {
  return (
    <Card className="p-2 rounded-md">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>{event.description}</CardDescription>
          </div>
          <Button className="ont-semibold">Join event</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Separator orientation="vertical" />
        <div className="flex gap-2">
          <span>
            {event.date} at {event.time}
          </span>
          -<span className="font-semibold">{event.fullAddress}</span>
        </div>
      </CardContent>
    </Card>
  );
};
