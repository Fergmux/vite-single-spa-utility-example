# vite-single-spa-utility-example

This is a clone of the [vite-single-spa-example](https://github.com/joeldenning/vite-single-spa-example) and [vite-single-spa-root-config](https://github.com/joeldenning/vite-single-spa-root-config) repos made by [Joel Denning](https://github.com/joeldenning/vite-single-spa-root-config). The only thing I've changed is adding the new utility package to the rollup externals array in `vite.config.js` in the example app.

I have added a vite-single-spa-utility module and attempted to import it, howeever the import is failing and I'm not sure why.

To try this out yourself simply clone the repo, run `pnpm install` and then `pnpm run start` for the config/utility module and `pnpm run dev` for the example app.

You will most likely see the following error:

```Internal server error: Failed to resolve import "@org/vite-single-spa-utility" from "src\App.vue". Does the file exist?```

Any information on why this isn't working would be greatly appreciated!
