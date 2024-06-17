import ExploreDestination from "@/components/ExploreDestination";
import Hero from "@/components/Hero";
import Memories from "@/components/Memories";
import Services from "@/components/Services";
import Navbar from "@/components/ui/navbar";
import { useEffect, useState } from "react";

export default async function Home() {
  async function getDestinations() {
    "use server";
    const res = await fetch("http://localhost:3000/api/destination", {
      next: { revalidate: 10 },
    });
    const data = await res.json();
    return data;
  }

  const data = await getDestinations();

  return (
    <>
      <div className="container overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <ExploreDestination destinations={data} />
          <Memories />
        </main>
        <footer className="mt-10 py-5 flex gap-3 items-center justify-center">
          <p className="text-zinc-500 text-center">
            © 2023 Ilman Travel. All rights reserved.
          </p>
        </footer>
      </div>
      <div className="w-2/4 h-full absolute top-0 opacity-10 -z-10 blur-2xl bg-primary rounded-r-full"></div>
    </>
  );
}
