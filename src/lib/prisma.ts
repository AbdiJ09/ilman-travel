import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

declare global {
  interface GlobalThis {
    [key: string]: any;
  }
}

if (process.env.NODE_ENV !== "production") {
  (globalThis as any).prisma = prisma;
} else {
  (globalThis as any).prisma = prisma;
}
