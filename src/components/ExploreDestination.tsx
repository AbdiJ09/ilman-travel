"use client";
import Image from "next/image";
import { CiCalendarDate, CiLocationOn, CiSearch } from "react-icons/ci";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useState } from "react";
import { LuTicket } from "react-icons/lu";
import { PiTicket, PiTicketThin } from "react-icons/pi";

const ExploreDestination = ({ destinations }: any) => {
  const [destinationDetail, setDestinationDetail] = useState(0);
  const convertPriceToIDR = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      minimumFractionDigits: 0,
      currency: "IDR",
    }).format(price);
  };

  const convertDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const handleBookNow = (destination: any) => {
    const phoneNumber = "6289630289268"; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, saya tertarik untuk memesan trip ke ${
      destination.name
    }. 
  Berikut detailnya:
  Lokasi: ${destination.location}
  Durasi: ${destination.duration_days} hari
  Tanggal Berangkat: ${convertDate(destination.departure_date)}
  Tanggal Pulang: ${convertDate(destination.return_date)}
  Harga: ${convertPriceToIDR(destination.price)} / per orang`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="w-full py-10 mt-5 relative ">
        <h5 className="text-primary font-medium  text-lg">Explore</h5>
        <h1 className="text-3xl text-zinc-800 leading-10 font-bold">
          Explore to destination
        </h1>
        <p className="text-zinc-500">
          Cari dan temukan destinasi yang sesuai dengan keinginanmu
        </p>

        <div className="w-full flex gap-5 items-center justify-center mt-4 ">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <div className="absolute right-4 -top-10 space-x-5">
              <CarouselPrevious className="bg-primary text-primary-foreground hover:bg-primary/80  disabled:bg-white disabled:text-black hover:text-primary-foreground" />
              <CarouselNext className="bg-primary text-primary-foreground hover:bg-primary/80  disabled:bg-white disabled:text-black hover:text-primary-foreground" />
            </div>
            <CarouselContent>
              {destinations?.map((destination: any, index: number) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 p-4 lg:basis-1/3 relative transition duration-300 ease-in-out"
                >
                  <Card
                    className={`w-full overflow-hidden rounded-3xl border-none shadow-md ${
                      destinationDetail === destination.id ? "expanded" : ""
                    }`}
                  >
                    <CardHeader className="p-0 h-60"></CardHeader>
                    <CardContent className="py-2 px-4">
                      <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-zinc-800">
                          {destination.name}
                        </h1>
                        <p className="text-zinc-500 text-sm font-medium">
                          {destination.duration_days} Days Trip
                        </p>
                      </div>
                      <div className="flex items-center mt-1">
                        <CiLocationOn className="text-primary" size={20} />
                        <h5 className="text-zinc-500">
                          {destination.location}
                        </h5>
                      </div>
                      <div
                        className={`description ${
                          destinationDetail === destination.id
                            ? "visible"
                            : "hidden"
                        }`}
                      >
                        <p className="text-zinc-500 text-sm">
                          {destination.description}
                        </p>
                        <div className="flex items-center gap-1 mt-3">
                          <CiCalendarDate size={20} className="text-primary" />
                          <p className="text-zinc-500 text-sm font-medium">
                            {convertDate(destination.departure_date)} -{" "}
                            {convertDate(destination.return_date)}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                          <PiTicketThin className="text-primary" size={20} />
                          <p className="text-zinc-500 text-sm  font-medium">
                            {destination.available_slots} Slots
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <h3 className="font-bold text-xl text-zinc-800">
                        {convertPriceToIDR(destination.price)}
                        <span className="text-zinc-500 font-normal text-sm">
                          /per orang
                        </span>
                      </h3>
                      {destinationDetail === destination.id ? (
                        <Button onClick={() => handleBookNow(destination)}>
                          Book Now
                        </Button>
                      ) : (
                        <Button
                          variant="secondary"
                          onClick={() =>
                            setDestinationDetail(
                              destinationDetail === destination.id
                                ? null
                                : destination.id
                            )
                          }
                        >
                          Detail
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="w-2/4 h-full absolute top-0 opacity-10 -z-10 blur-2xl bg-primary rounded-r-full"></div>
      </div>
    </>
  );
};

export default ExploreDestination;
