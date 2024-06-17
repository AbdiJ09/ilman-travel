import { CiCalendarDate, CiLocationOn, CiSearch } from "react-icons/ci";
import { Button } from "./ui/button";

const Destination = () => {
  return (
    <div className="w-fit bg-white rounded-full py-5 px-8 mt-10 shadow-xl flex items-center absolute gap-6">
      <div className="flex items-center gap-3">
        <CiLocationOn size={24} className="text-primary" />
        <div className="">
          <p className="text-zinc-500">Location</p>
          <h5 className="font-bold text-zinc-700">Jakarta, Indonesia</h5>
        </div>
      </div>
      <hr className="w-px h-8 bg-zinc-200" />
      <div className="flex items-center gap-3">
        <CiCalendarDate size={24} className="text-primary" />
        <div className="">
          <p className="text-zinc-500">Date</p>
          <h5 className="font-bold text-zinc-700">26 Aug 2024</h5>
        </div>
      </div>
      <hr className="w-px h-8 bg-zinc-200" />
      <div className="flex items-center gap-3">
        <CiCalendarDate size={24} className="text-primary" />
        <div className="">
          <p className="text-zinc-500">Return</p>
          <h5 className="font-bold text-zinc-700">1 Sep 2024</h5>
        </div>
      </div>
      <Button className="rounded-full" size="icon">
        <CiSearch size={24} />
      </Button>
    </div>
  );
};

export default Destination;
