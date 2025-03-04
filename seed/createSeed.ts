import chalk from "chalk";
import generateData from "./generateData";

const createSeed = async () => {
  try {
    console.log(chalk.yellowBright("Creating a new seed..."));
    await generateData();
    console.log(chalk.greenBright("Seed successfully created!"));

  } catch(error) {
    console.log(chalk.redBright("Error creating a new seed", error));
    process.exit(1);
  };
};

export default createSeed;
