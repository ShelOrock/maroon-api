import { generateFriendships } from "../generators"

import { AppModelTypes } from "../../types";
import { UserTypes } from "../../Models/User/types"

const seedFriendships = async ({ Friendship }: AppModelTypes, users: UserTypes[]): Promise<void> => {
  try {
    const friendships = generateFriendships(users);

    await Friendship.bulkCreate(friendships);

  } catch(error) {
    console.log("Error creating friendships", error);
    process.exit(1);
  };
};

export default seedFriendships;
