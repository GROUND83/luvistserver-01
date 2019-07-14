import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    storeById: (_, args) => {
      const { id } = args;
      return prisma.store({ id });
    }
  }
};