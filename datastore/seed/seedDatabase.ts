import chalk from "chalk";
import { seedFriendships, seedPosts, seedUsers } from "./seeds";
import { AppModelTypes } from "../types";

const seedDatabase = async (models: AppModelTypes) => {
  try {
    console.log(chalk.yellowBright("Creating a new seed..."));
    const users = await seedUsers(models);
    await seedFriendships(models, users);
    await seedPosts(models, users);
    console.log(chalk.greenBright("Seed successfully created!"));

  } catch(error) {
    console.log(chalk.redBright("Error creating a new seed", error));
    process.exit(1);
  };
};

export default seedDatabase;
