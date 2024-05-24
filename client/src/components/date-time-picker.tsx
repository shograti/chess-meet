import * as React from "react";
import { add, format, isBefore, startOfDay } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TimePicker } from "./time-picker";

interface DateTimePickerProps {
  placeholder?: string;
  defaultDate?: Date; // Optional prop to set an initial date
}

export function DateTimePicker({
  placeholder = "Select a date",
  defaultDate,
}: DateTimePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(
    defaultDate ? new Date(defaultDate.setSeconds(0)) : undefined
  );

  const today = startOfDay(new Date());

  const handleSelect = (newDay: Date | undefined) => {
    if (!newDay) return;
    // Zero out the seconds when a new day is selected
    newDay.setSeconds(0);
    if (!date) {
      setDate(newDay);
      return;
    }
    const diff = newDay.getTime() - date.getTime();
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    const newDateFull = add(date, { days: Math.ceil(diffInDays) });
    newDateFull.setSeconds(0);
    setDate(newDateFull);
  };

  const disablePastDates = (date: Date) => {
    return isBefore(date, today);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP HH:mm") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 mt-2 w-full">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
          disabled={disablePastDates}
        />
        <div className="p-3 border-t border-border">
          <TimePicker setDate={setDate} date={date} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
