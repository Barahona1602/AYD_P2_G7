import { defineConfig } from "cypress";
import { startServer } from "./server";
let procesos = { front: null, back: null };
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("before:run", async (details) => {
        procesos = await startServer();
        await delay(10000);
      });
      on("after:run", async (details) => {
        await killProcess(procesos.front.pid);
        await killProcess(procesos.back.pid);
      });
    },
    baseUrl: "http://localhost:4200"
  },
  // component: {
  //   devServer: {
  //     framework: 'angular',
  //     bundler: 'webpack',
  //     options: {
  //       projectConfig: {
  //         root: "",
  //         sourceRoot: "./src",
  //         buildOptions: {
  //           sourceMap: true,
  //           inlineSourceMap: false       
  //         },
  //       }
  //     }
  //   },
  //   specPattern: '**/*.cy.ts',
  // },
});

function killProcess(pid) {
  return new Promise((resolve, reject) => {
      treeKill(pid, 'SIGTERM', (err) => {
          if (err) {
              reject(err);
          } else {
              resolve();
          }
      });
  });
}