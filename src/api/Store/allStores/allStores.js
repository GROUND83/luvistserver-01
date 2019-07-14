import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    allStores: () => prisma.stores()
  }
};