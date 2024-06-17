import Image from "next/image";
import Destination from "./Destination";
import imageHero1 from "@/assets/timo-stern-iUBgeNeyVy8-unsplash.jpg";
import imageHero2 from "@/assets/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg";
import aircraft from "@/assets/airplane-svgrepo-com.svg";
const Hero = () => {
  return (
    <>
      <div className="w-full py-8 md:py-32 flex  items-start gap-20 flex-col md:flex-row">
        <div className="w-full md:w-[60%] ">
          <h5 className="text-zinc-500 font-medium">
            Petualangan bersama Ilman Travel sudah menantimu 😊
          </h5>
          <h1 className="text-3xl md:text-[3.5rem] mt-3 font-extrabold text-zinc-800 md:leading-[3.9rem]">
            Hidup ini singkat, jelajahi dunia 🌍 bersama{" "}
            <span className="bg-primary text-primary-foreground">Ilman</span>{" "}
            Travel!
          </h1>
          <Destination />
          <Image
            src={aircraft}
            className="absolute bottom-20"
            width={50}
            height={50}
            alt="aircraft"
          />
        </div>
        <div className="w-full md:w-1/2 relative -mt-10 -z-10">
          <div className="w-48 h-[18rem] md:w-72 md:h-[30rem] rounded-t-full rounded-b-full overflow-hidden border-4 border-white">
            <Image
              src={imageHero1}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="w-36 h-[14rem] md:w-60 md:h-[24rem] rounded-t-full rounded-b-full overflow-hidden absolute bottom-0 right-20 md:right-20 -z-10">
            <Image
              src={imageHero2}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
