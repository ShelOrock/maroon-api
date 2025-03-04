import app from "./app";
import chalk from "chalk";

const PORT: string | number = process.env.PORT || 3000;

const startServer = async (): Promise<void> => {
  try {
    await app.listen(PORT);
    console.log(chalk.blueBright(`Application listening on localhost:${ PORT }`));

  } catch(e) {
    console.log(chalk.red("Error starting server", e));
    process.exit(1);
  };
};

startServer();
