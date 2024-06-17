import Memories1 from "@/assets/daniel-jensen-tQpypKA92k8-unsplash.jpg";
import Image from "next/image";
import memerioes2 from "@/assets/pietro-de-grandi-Q5dMq3cKqec-unsplash.jpg";
import memerioes3 from "@/assets/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg";
import memerioes4 from "@/assets/geoffrey-lucas-r-nJDGpjRic-unsplash.jpg";
const Memories = () => {
  return (
    <>
      <div className="w-full py-10 mt-5 flex items-start flex-row-reverse gap-4 relative">
        <div className="w-[35rem]">
          <h5 className="text-primary font-medium  text-lg tracking-wide">
            Memories
          </h5>
          <h1 className="text-[3.2rem] mt-3 font-bold leading-[3.4rem] text-zinc-800">
            Sweet memories come to life again
          </h1>
          <p className="text-zinc-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut labore
            veritatis expedita repudiandae dolor nesciunt mollitia modi aperiam
            pariatur libero?
          </p>
          <div className="flex w-full gap-3 mt-5">
            <div className="w-1/2 rounded-2xl h-32 bg-secondary p-4 shadow">
              <h2 className="text-center font-bold text-primary text-2xl">
                10
              </h2>
              <p className="text-center text-zinc-500 font-medium text-lg">
                Years Experience
              </p>
            </div>
            <div className="w-1/2 rounded-2xl h-32 bg-secondary shadow p-4">
              <h2 className="text-center font-bold text-primary text-2xl">
                100
              </h2>
              <p className="text-center text-zinc-500 font-medium text-lg">
                Destination Collaboration
              </p>
            </div>
            <div className="w-1/2 rounded-2xl h-32 bg-secondary shadow p-4">
              <h2 className="text-center font-bold text-primary text-2xl">
                10K
              </h2>
              <p className="text-center text-zinc-500 font-medium text-lg">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/4 relative">
          <div className="w-96 h-[32rem] rounded-t-full rounded-b-full overflow-hidden border-4 border-white">
            <Image
              src={Memories1}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="w-fit h-32 rounded-3xl absolute right-10 bg-white gap-5 bottom-0 flex p-4">
            <Image
              src={memerioes2}
              alt=""
              className="w-32 object-cover rounded-xl border-4 border-white"
            />
            <Image
              src={memerioes3}
              alt=""
              className="w-32 object-cover rounded-xl  -ms-10 border-4 border-white"
            />
            <Image
              src={memerioes4}
              alt=""
              className="w-32 object-cover rounded-xl -ms-10 border-4 border-white"
            />
          </div>
        </div>
        <div className="w-2/4 h-full absolute top-0 opacity-10 -z-10 blur-2xl bg-blue-500 rounded-r-full"></div>
      </div>
    </>
  );
};

export default Memories;
