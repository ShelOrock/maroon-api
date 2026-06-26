import { FriendshipTypes } from "../../Models/Friendship/types";
import { UserTypes } from "../../Models/User/types"
import { AppModelTypes } from "../../types";
import { generateFriendships } from "../generators"

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
