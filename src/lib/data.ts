import { prisma } from "@/lib/prisma";

export async function getDestinations() {
  const destinations = await prisma.destination.findMany();
  return destinations;
}
