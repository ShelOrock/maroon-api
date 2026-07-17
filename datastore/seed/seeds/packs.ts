import { generatePacks } from "../generators"

import { AppModelTypes } from "../../types";
import { UserTypes } from "../../Models/User/types";
import { PackTypes } from "../../Models/Pack/types";

const seedPacks = async ({ Pack }: AppModelTypes, users: UserTypes[]): Promise<PackTypes[]> => {
  try {
    const packs = generatePacks(users);

    return await Pack.bulkCreate(packs);

  } catch(error) {
    console.log("Error creating packs", error);
    process.exit(1);
  };
};

export default seedPacks;
