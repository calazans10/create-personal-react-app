#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const shell = require("shelljs");
const colors = require("colors");

const appName = process.argv[2];
const appDirectory = `${process.cwd()}/${appName}`;
const currentDirectory = path.resolve(__dirname);

const dependencies = [
  "axios",
  "classnames",
  "connected-react-router",
  "history",
  "node-sass",
  "normalize.css",
  "prop-types",
  "qs",
  "react-ga",
  "react-redux",
  "react-router-dom",
  "redux",
  "redux-devtools-extension",
  "redux-logger",
  "redux-persist",
  "redux-saga"
];

const devDependencies = [
  "@redux-saga/testing-utils",
  "@testing-library/react",
  "enzyme",
  "enzyme-adapter-react-16",
  "enzyme-to-json",
  "eslint-config-airbnb",
  "eslint-config-prettier",
  "eslint-plugin-babel",
  "eslint-plugin-import",
  "eslint-plugin-jsx-a11y",
  "eslint-plugin-prettier",
  "eslint-plugin-react",
  "prettier",
  "sass-lint",
  "sinon"
];

const run = async () => {
  const success = await createReactApp();

  if (!success) {
    console.log(
      colors.red(
        "Something went wrong while trying to create a new React App using create-react-app"
      )
    );
    return;
  }

  await cdIntoNewApp();
  await installPackages();
  await updateTemplates();
  await updateCoverageConfigFromPackageJSON();
};

const createReactApp = async () => {
  return new Promise(resolve => {
    if (appName) {
      shell.exec(`npx create-react-app ${appName}`, () => resolve(true));
    } else {
      console.log(colors.red("\nNo app name provided."));
      console.log("\nProvide an app name in the following format: ");
      console.log("\ncreate-personal-react-app ", colors.cyan("app-name\n"));
      resolve(false);
    }
  });
};

const cdIntoNewApp = async () => {
  return new Promise(resolve => {
    shell.cd(appDirectory);
    resolve();
  });
};

const installPackages = async () => {
  return new Promise(resolve => {
    console.log(colors.cyan("\nInstalling dependencies\n"));
    shell.exec(`npm i ${dependencies.join(" ")}`, () => {
      console.log(colors.green("\nFinished installing dependencies\n"));
    });

    console.log(colors.cyan("\nInstalling dev dependencies\n"));
    shell.exec(`npm i -D ${devDependencies.join(" ")}`, () => {
      console.log(colors.green("\nFinished installing dev dependencies\n"));
    });

    resolve();
  });
};

const updateTemplates = async () => {
  return new Promise(resolve => {
    shell
      .cd(`${appDirectory}/src`)
      .exec(
        'find . -type f -not -name "registerServiceWorker.js" -print0 | xargs -0 rm --'
      );
    shell.cp("-R", `${currentDirectory}/templates/*`, appDirectory);
    shell.cp("-R", `${currentDirectory}/templates/.*`, appDirectory);
    shell.cp(
      "-R",
      `${currentDirectory}/templates/.env.dist`,
      `${appDirectory}/.env`
    );
    resolve();
  });
};

const updateCoverageConfigFromPackageJSON = async () => {
  return new Promise(resolve => {
    const packageJSON = JSON.parse(shell.cat(`${appDirectory}/package.json`));
    const jest = {
      collectCoverageFrom: [
        "src/**/*.js",
        "!src/index.js",
        "!src/app/index.js",
        "!src/app/{ui,user}/index.js",
        "!src/history/index.js",
        "!src/lib/axios.js",
        "!src/sagas/index.js",
        "!src/store/*.js"
      ],
      snapshotSerializers: ["enzyme-to-json/serializer"]
    };
    const updatedPackageJSON = { ...packageJSON, jest };

    console.log(colors.cyan("\nUpdating package.json\n"));
    fs.writeFile(
      `${appDirectory}/package.json`,
      JSON.stringify(updatedPackageJSON),
      err => {
        if (err) {
          console.log(colors.red(err));
          resolve(false);
        } else {
          console.log(colors.green("\nFinished updating package.json\n"));
          resolve(true);
        }
      }
    );
  });
};

run();
