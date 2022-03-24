import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org/vite-single-spa-example",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:3000/src/main.js"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
