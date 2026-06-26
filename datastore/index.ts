import chalk from "chalk";
import connection from "./connection"
import verifyAndCreateDatabase from "./createDatabase";
import createModels from "./Models";
import seedDatabase from "./seed/seedDatabase";

const initializeDatabase = async () => {
  try {
    await verifyAndCreateDatabase();

    console.log(chalk.yellowBright("Creating database models..."));
    const models = createModels(connection);
    console.log(chalk.greenBright("Database models successfully created!"));
    
    console.log(chalk.yellowBright("Syncing database..."));
    await connection.sync({ force: true });
    console.log(chalk.greenBright("Database successfully synced!"));

        
    console.log(chalk.yellowBright("Syncing database..."));
    await seedDatabase(models);
    console.log(chalk.greenBright("Database successfully synced!"));

    process.exit(0);

  } catch(error) {
    console.log(chalk.redBright("Error syncing database", error));
    process.exit(1);
  };
};

initializeDatabase();
