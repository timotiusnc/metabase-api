import * as yargs from "yargs";
import { auth, logout } from "./api/auth";
import { getEmbeddedCardDashboard, queryCard } from "./api/card";

yargs
  .command({
    command: "query-card",
    describe: "Query a card",
    builder: {
      cardId: {
        describe: "Card ID to be queried",
        demandOption: true,
        type: "number",
      },
    },
    handler: async (argv) => {
      auth().then(async (_) => {
        const response = await queryCard({
          id: argv.cardId as number,
        });

        console.log(response.data);

        await logout();
      });
    },
  })
  .help();

yargs
  .command({
    command: "query-card-embed-dashboard",
    describe: "Query a card from an embedded dashboard",
    builder: {
      token: {
        describe: "Token (JWT)",
        demandOption: true,
        type: "string",
      },
      dashcardId: {
        describe: "Dashboard card ID",
        demandOption: true,
        type: "number",
      },
      cardId: {
        describe: "Card ID",
        demandOption: true,
        type: "number",
      },
    },
    handler: async (argv) => {
      const response = await getEmbeddedCardDashboard({
        token: argv.token as string,
        dashcardId: argv.dashcardId as number,
        cardId: argv.cardId as number,
      });

      console.log(response.data);
    },
  })
  .help();

yargs.parse();
