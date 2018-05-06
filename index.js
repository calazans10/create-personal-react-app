#! /usr/bin/env node
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const colors = require('colors');

const appName = process.argv[2];
const appDirectory = `${process.cwd()}/${appName}`;
const currentDirectory = path.resolve(__dirname);

const dependencies = [
  'bourbon',
  'classnames',
  'history',
  'node-sass-chokidar',
  'normalize.css',
  'npm-run-all',
  'prop-types',
  'react-redux',
  'react-router-dom',
  'react-router-redux@next',
  'redux-logger',
  'redux-saga',
  'redux',
];
const devDependencies = [
  'eslint-config-airbnb',
  'eslint-config-prettier',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-prettier',
  'prettier',
  'redux-devtools-extension',
  'sass-lint',
];

const run = async () => {
  const success = await createReactApp();

  if (!success) {
    console.log(colors.red('Something went wrong while trying to create a new Reac app using create-react-app'));
    return;
  }

  await cdIntoNewApp();
  await installPackages();
  await updateTemplates();
  await updateScriptsFromPackagesJSON();
}

const createReactApp = async () => {
  return new Promise(resolve => {
    if (appName) {
      shell.exec(`create-react-app ${appName}`, () => resolve(true));
    } else {
      console.log(colors.red('\nNo app name provided.'));
      console.log('\nProvide an app name in the following format:');
      console.log('\ncreate-personal-react-app ', colors.cyan('app-name\n'));
      resolve(false);
    }
  });
}

const cdIntoNewApp = async () => {
  return new Promise(resolve => {
    shell.cd(appDirectory);
    resolve();
  });
}

const installPackages = async () => {
  return new Promise(resolve => {
    console.log(colors.cyan('\nInstalling dependencies.\n'));
    shell.exec(`npm i ${dependencies.join(' ')}`, () => {
      console.log(colors.green('\nFinished installing dependencies.\n'))
    });

    console.log(colors.cyan('\nInstalling dev dependencies.\n'));
    shell.exec(`npm i -D ${devDependencies.join(' ')}`, () => {
      console.log(colors.green('\nFinished installing dev dependencies.\n'))
    });

    resolve();
  });
}

const updateTemplates = async () => {
  return new Promise(resolve => {
    shell.cd(`${appDirectory}/src`).exec('find . -type f -not -name "registerServiceWorker.js" -print0 | xargs -0 rm --');
    shell.cp('-R', `${currentDirectory}/templates/*`, appDirectory);
    shell.cp('-R', `${currentDirectory}/templates/.*`, appDirectory);
    resolve();
  });
}

const updateScriptsFromPackagesJSON = async () => {
  return new Promise(resolve => {
    const packageJSON = JSON.parse(shell.cat(`${appDirectory}/package.json`));
    const scripts = {
      "build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
      "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
      "start-js": "react-scripts start",
      "start": "env $(cat .env.development.local) run-p watch-css start-js",
      "build-js": "react-scripts build",
      "build": "env $(cat .env.production.local) run-s build-css build-js",
      "test": "react-scripts test --env=jsdom",
      "eject": "react-scripts eject",
    };
    const updatedPackageJSON = { ...packageJSON, scripts };

    console.log(colors.cyan('\nUpdating package.json\n'));
    fs.writeFile(`${appDirectory}/package.json`, JSON.stringify(updatedPackageJSON), err => {
      if (err) {
        console.log(colors.red(err));
        resolve(false);
      } else {
        console.log(colors.green('\nFinished updating package.json\n'));
        resolve(true);
      }
    });
  });
}

run();
