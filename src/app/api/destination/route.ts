import prisma from "@/lib/prisma";
export async function GET(req: Request, res: Response) {
  const getDestinations = await prisma.destination.findMany();
  return new Response(JSON.stringify(getDestinations));
}
