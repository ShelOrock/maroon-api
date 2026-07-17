import { generatePosts } from "../generators"

import { AppModelTypes } from "../../types";
import { PackTypes } from "../../Models/Pack/types";

const seedPosts = async ({ Post }: AppModelTypes, packs: PackTypes[]): Promise<void> => {
  try {
    const posts = generatePosts(packs);

    await Post.bulkCreate(posts);

  } catch(error) {
    console.log("Error creating posts", error);
    process.exit(1);
  };
};

export default seedPosts;
