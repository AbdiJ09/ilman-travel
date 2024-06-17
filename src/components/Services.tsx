import ticket from "@/assets/ticket-svgrepo-com.svg";
import Image from "next/image";
import world from "@/assets/globe-showing-europe-africa-svgrepo-com.svg";
import Konsultasi from "@/assets/interview-svgrepo-com.svg";
const Services = () => {
  return (
    <>
      <div className="w-full py-10 flex gap-20 relative mt-5">
        <div className="w-[30%]">
          <h3 className="text-primary font-medium uppercase">
            Apa yang kami layani
          </h3>
          <h1 className="text-[2.5rem] leading-10 font-bold text-zinc-800">
            Nilai Tertinggi Untuk Anda
          </h1>
          <p className="text-zinc-500">
            cobalah berbagai keuntungan saat menggunakan layanan kami
          </p>
        </div>
        <div className="w-3/4 grid grid-cols-3 gap-8">
          <div className="">
            <Image src={ticket} alt="ticket" width={80} height={80} />
            <h2 className="text-2xl font-bold text-zinc-800">
              Pemesanan Mudah
            </h2>
            <p className="text-zinc-500 text-sm">
              Kami mempusatkan pemesanan yang mudah dan cepat
            </p>
          </div>
          <div className="">
            <Image src={world} alt="ticket" width={80} height={80} />
            <h2 className="text-2xl font-bold text-zinc-800">Banyak Pilihan</h2>
            <p className="text-zinc-500 text-sm">
              Total 10 Destinasi yang bisa anda pilih
            </p>
          </div>
          <div className="">
            <Image src={Konsultasi} alt="ticket" width={80} height={80} />
            <h2 className="text-2xl font-bold text-zinc-800 ">
              konsultasi Gratis
            </h2>
            <p className="text-zinc-500 text-sm">
              Konsultasi gratis untuk anda yang ingin mengetahui keuntungan
              menggunakan layanan kami
            </p>
          </div>
        </div>
        <div className="w-2/4 h-full absolute top-0 right-0 opacity-10 -z-10 blur-2xl bg-blue-500 rounded-full"></div>
      </div>
    </>
  );
};

export default Services;
