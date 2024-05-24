import { DateTimePicker } from "../date-time-picker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";

export const CreateEventForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label>Event name</Label>
        <Input placeholder="Chess tournament at L'Illustration, Lille" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Description</Label>
        <Textarea
          maxLength={200}
          rows={6}
          placeholder="Write a short description with a maximum of 200 characters"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Full address</Label>
        <Input placeholder="18 Rue Royale, 59800 Lille, France" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Start date</Label>
        <DateTimePicker
          placeholder="Select a start date"
          defaultDate={new Date()}
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <Label htmlFor="bring-chessboard">
          Other players must bring board / pieces
        </Label>
        <Switch id="bring-chessboard" />
      </div>
      <Button>Create event</Button>
    </form>
  );
};
