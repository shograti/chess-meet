import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">Chess Meet</h1>
          <Navigation />
        </div>
      </div>
    </div>
  );
};
