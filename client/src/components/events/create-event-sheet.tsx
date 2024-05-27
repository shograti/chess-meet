import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CreateEventForm } from "./create-event-form";

export const CreateEventSheet = () => {
  return (
    <SheetContent className="z-[9999]">
      <SheetHeader>
        <SheetTitle className="text-2xl">Create a chess event</SheetTitle>
        <SheetDescription>
          On this panel you can create a new chess event. Fill in the details
          and click "Create" to create the event.
        </SheetDescription>
      </SheetHeader>
      <div className="mt-8">
        <CreateEventForm />
      </div>
    </SheetContent>
  );
};
