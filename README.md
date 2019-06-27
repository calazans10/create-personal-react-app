# Create Personal React App

[![dependencies Status](https://david-dm.org/calazans10/create-personal-react-app/status.svg)](https://david-dm.org/calazans10/create-personal-react-app)
[![npm package](https://img.shields.io/npm/v/create-personal-react-app.svg)](https://www.npmjs.com/package/create-personal-react-app)
[![npm package](https://img.shields.io/npm/dm/create-personal-react-app.svg)](https://www.npmjs.com/package/create-personal-react-app)

A thin wrapper around Facebook's [create-react-app](https://github.com/facebook/create-react-app) inspired by [@Chris Patty's](https://github.com/chrisjpatty) [blog post](https://blog.cloudboost.io/extending-create-react-app-to-make-your-own-app-generator-5d7b1ddc246).

Create Personal React App works on macOS, Windows, and Linux.

## Quick Overview

```
npm install -g create-personal-react-app
create-personal-react-app my-app
cd my-app
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel.<br/>
They are preconfigured and hidden so that you can focus on the code.

Just create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node >= 6 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

To create a new app, just run the following command:

```
create-personal-react-app my-app
```

It will create a directory called `my-app` inside the current folder.<br/>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
.
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .editorconfig
├── .env
├── .env.dist
├── .env.prod
├── .env.stg
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── .sass-lint.yml
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── app
    |   ├── core
    |   │   └── components
    |   │       ├── modules
    |   |       |   ├── MainContent
    |   |       |   |   ├── index.js
    |   |       |   |   ├── index.scss
    |   |       |   |   └── index.spec.js
    |   |       |   ├── MainHeader
    |   |       |   |   ├── index.js
    |   |       |   |   ├── index.scss
    |   |       |   |   └── index.spec.js
    |   │       |   └── MainNavigation
    |   |       |   |   ├── index.js
    |   |       |   |   ├── index.scss
    |   |       |   |   └── index.spec.js
    |   │       └── pages
    |   |           ├── Home
    |   |           |   ├── index.js
    |   |           |   └── index.spec.js
    |   │           └── NotFound
    |   |               ├── index.js
    |   |               └── index.spec.js
    |   ├── ui
    |   │   ├── actions
    |   │   |   ├── index.js
    |   |   |   └── index.spec.js
    |   │   ├── components
    |   │   |   └── modules
    |   |   |           ├── Loading
    |   |   |           |   ├── index.js
    |   |   |           |   ├── index.scss
    |   |   |           |   └── index.spec.js
    |   │   |           └── Snackbar
    |   |   |               ├── index.js
    |   |   |               ├── index.scss
    |   |   |               └── index.spec.js
    |   │   ├── constants
    |   |   |   └── actionTypes.js
    |   │   ├── reducers
    |   │   |   ├── loading
    |   |   │   |   ├── index.js
    |   |   |   |   └── index.spec.js
    |   │   |   ├── snackbar
    |   |   │   |   ├── index.js
    |   |   |   |   └── index.spec.js
    |   │   |   ├── index.js
    |   |   |   └── index.spec.js
    |   │   ├── sagas
    |   │   |   ├── index.js
    |   |   |   └── index.spec.js
    |   │   ├── selectors
    |   │   |   ├── index.js
    |   |   |   └── index.spec.js
    |   │   └── index.js
    |   ├── user
    |   │   ├── actions
    |   │   |   ├── index.js
    |   |   |   └── index.spec.js
    |   │   ├── api
    |   │   |   ├── index.js
    |   |   |   └── index.spec.js
    |   │   ├── components
    |   │   |   ├── modules
    |   │   |   |       └── UserTable
    |   |   |   |           ├── index.js
    |   |   |   |           ├── index.scss
    |   |   |   |           └── index.spec.js
    |   │   |   └── pages
    |   │   |           └── UserList
    |   |   |               ├── index.js
    |   |   |               └── index.spec.js
    |   │   ├── constants
    |   |   |   └── actionTypes.js
    |   │   ├── reducers
    |   │   |   ├── index.js
    |   |   |   └── index.spec.js
    |   │   ├── sagas
    |   │   |   ├── index.js
    |   |   |   └── index.spec.js
    |   │   ├── selectors
    |   │   |   ├── index.js
    |   |   |   └── index.spec.js
    |   │   └── index.js
    |   └── index.js
    ├── history
    │   └── index.js
    ├── images
    |   ├── closeicon.svg
    │   └── loader.gif
    ├── lib
    │   └── axios.js
    ├── reducers
    |   ├── index.js
    │   └── index.spec.js
    ├── sagas
    │   └── index.js
    ├── store
    |   ├── configureStore.js
    │   └── index.js
    ├── styles
    |   ├── _base.scss
    │   └── _utilities.scss
    ├── index.js
    ├── index.scss
    └── setupTests.js
```

No configuration or complicated folder structures, just the files you need to build your app.<br/>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start`

Runs the app in development mode.<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br/>
You will see the build errors and lint warnings in the console.

### `npm test`

Runs the test watcher in an interactive mode.<br/>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run build`

Builds the app for production to the `build` folder.<br/>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br/>

Your app is ready to be deployed.

## Naming convention

- **Action Types**

  - API related

    ```javascript
    export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
    export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
    export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
    ```

  - Others

    ```javascript
    export const LOADING_REQUEST = "LOADING_REQUEST";
    export const LOADING_SHOW = "LOADING_SHOW";
    export const LOADING_HIDE = "LOADING_HIDE";
    export const USERNAME_CHANGE = "USERNAME_CHANGE";
    ```

- **Action Creators**

  - API related

    ```javascript
    export const doRequestGetPosts = () => ({});
    export const doSuccesGetPosts = () => ({});
    export const doFailureGetPosts = () => ({});
    ```

  - Others

    ```javascript
    export const doRequestLogin = () => ({});
    export const doShowLogin = () => ({});
    export const doHideLogin = () => ({});
    export const doChangeusername = () => ({});
    ```

- **Sagas**

  ```javascript
  export function* handleChangeUsername() {}
  export function* handleRequestLogin() {}
  export function* handleRequestGetPosts() {}
  ```

- **Reducers**

  ```javascript
  const loadingReducer = (state = INITIAL_STATE, action) => {};
  const modalReducer = (state = INITIAL_STATE, action) => {};
  ```

  - Helpers

    ```javascript
    const applyShowLoading = (state, action) => ({});
    const applyChangeUsername = (state, action) => ({});
    ```

  - Combined reducers

    ```javascript
    const uiReducer = combineReducers({
      loading: loadingReducer,
      modal: modalReducer
    });
    ```

- **Selectors**

  - Boolean

    ```javascript
    export const isLoadingVisible = ({ ui }) => ui.loading.isVisible;
    export const hasPermission = ({ auth }) => auth.user.hasPermission;
    ```

  - Others

    ```javascript
    export const getUsername = ({ auth }) => auth.user.username;
    ```

- **API**

  ```javascript
  export const requestGetPosts = () => {};
  export const requestCreatePost = payload => {};
  export const requestGetPost = postId => {};
  export const requestUpdatePost = (postId, payload) => {};
  export const requestDeletePost = postId => {};
  ```

- **mapDispatchToProps**

  ```javascript
  import { doRequestLogin } from "../actions/auth";
  import { doShowLoading } from "../actions/ui";

  const mapDispatchToProps = {
    onRequestLogin: doRequestLogin,
    onShowLoading: doShowLoading
  };

  export default connect(
    null,
    mapDispatchToProps
  )(Home);
  ```

  ## Contribute

  1.  Fork it
  2.  Create your feature branch (`git checkout -b my-new-feature`)
  3.  Commit your changes (`git commit -am 'Add some feature'`)
  4.  Push to the branch (`git push origin my-new-feature`)
  5.  Submit a pull request

  ## License

  Create Personal React App is open source software [licensed as MIT](https://github.com/calazans10/create-personal-react-app/blob/master/LICENSE).
