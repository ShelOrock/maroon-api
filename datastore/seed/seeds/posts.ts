import { generatePosts } from "../generators"

import { AppModelTypes } from "../../types";
import { UserTypes } from "../../Models/User/types"

const seedPosts = async ({ Post }: AppModelTypes, users: UserTypes[]): Promise<void> => {
  try {
    const posts = generatePosts(users);

    await Post.bulkCreate(posts);

  } catch(error) {
    console.log("Error creating posts", error);
    process.exit(1);
  };
};

export default seedPosts;
