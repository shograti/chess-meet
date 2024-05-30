import { Link } from "react-router-dom";
import { Navigation } from "./navigation/navigation";

export const Header = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl md:px-20 px-5">
        <div className="flex items-center justify-between py-4 flex-wrap gap-2">
          <Link to="/">
            <h1 className="text-2xl font-bold">Chess Meet</h1>
          </Link>
          <Navigation />
        </div>
      </div>
    </div>
  );
};
