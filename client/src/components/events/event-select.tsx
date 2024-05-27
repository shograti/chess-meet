import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface EventSelectProps {
  onSortChange: (value: string) => void;
}

export const EventSelect: React.FC<EventSelectProps> = ({ onSortChange }) => {
  return (
    <Select onValueChange={onSortChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="most-recent">Most recent</SelectItem>
        <SelectItem value="most-popular">Most popular</SelectItem>
        <SelectItem value="name">Name</SelectItem>
      </SelectContent>
    </Select>
  );
};
