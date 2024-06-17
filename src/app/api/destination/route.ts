import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function GET() {
  const destinations = await prisma.destination.findMany();
  revalidatePath("/");
  return new Response(JSON.stringify(destinations));
}
