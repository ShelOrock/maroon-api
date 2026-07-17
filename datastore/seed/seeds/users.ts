import { generateUsers } from "../generators";

import { AppModelTypes } from "../../types";
import { UserTypes } from "../../Models/User/types";

const seedUsers = async ({ User }: AppModelTypes): Promise<UserTypes[]> => {
  try {
    const users = generateUsers(100);

    return await User.bulkCreate(users);

  } catch(error) {
    console.log("Error creating users", error);
    process.exit(1);
  };
}

export default seedUsers;
