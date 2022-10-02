

# MfeProxy


## Architecture

- There are three apps present in this project - home, contact and checkout
- This represents MFE with MPAs


## How it works

1. First we will set each app to run on a separate port during development. For this we will need to update `project.json` file of each app `targets.serve.configurations.development.port`
2. In the each of the apps, we have separate `proxy.conf.json` file. In order to use this proxy conf file, update `project.json` file to target correct proxy conf files
3. Inside `project.json` file for any app, update `targets.serve.configurations.development.proxyConfig` to `apps/home/proxy.conf.json`
  [Nx Docs Proxy Config](https://nx.dev/packages/next/executors/server#proxyconfig)
4. We will treat home as the base page and contact & checkout as other navigated pages
5. To differentiate the static assets of each of the apps, we will update both the navigated apps static asset folder
6. Add `assetPrefix: '/checkout-assets'` line to `next.config.js` file for checkout and `assetPrefix: '/contact-assets'` line to `next.config.js` file for contact app respectively
7. Next we will update the `proxy.conf.json` file for each of the navigated app

```json
{
  "/contact-assets": {
    "target": "http://localhost:4201",
    "pathRewrite": {
      "^/contact-assets/_next": "/_next"
    },
    "secure": false
  }
}
```

```json
{
  "/checkout-assets": {
    "target": "http://localhost:4202",
    "pathRewrite": {
      "^/checkout-assets/_next": "/_next"
    },
    "secure": false
  }
}

```
- Now we will update the `pacakge.json` file to run all the apps in parallel. Add `"serve:all": "nx run-many --target=serve"` to the script section
- Open terminal and run `npm run serve:all` to see working MFE with MPAs approach


This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@mfe-proxy/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
