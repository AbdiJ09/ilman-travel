import { prisma } from "@/lib/prisma";

export async function GET() {
  const destinations = await prisma.destination.findMany();
  return new Response(JSON.stringify(destinations));
}
