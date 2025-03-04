import chalk from "chalk";

import connection from "../datastore/connection";
import createSeed from "./createSeed";

const syncDatabase = async () => {
  try {
    console.log(chalk.yellowBright("Syncing database..."));
    await connection.sync({ force: true });
    console.log(chalk.greenBright("Database successfully synced!"));

    await createSeed();
    process.exit(0);

  } catch(error) {
    console.log(chalk.redBright("Error syncing database", error));
    process.exit(1);
  };
};

syncDatabase();
