import { EventItem } from "./event-item";

export const EventList = ({ events }) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {" "}
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};
