# Climate Change PWA

A basic PWA learning project I'm making for myself, just to get familiar with service workers.

`npm run dev`

Runs the app in development mode via webpack-dev-server, does not register service worker

`npm run build`

generates a prod build in the `/build` directory, w/ an auto-generated `service-worker.js`

`npm run prod:local`

generates a prod build, and runs a local http-server (on port 8080) that services the app. It does properly create a service-worker.js, does not hot reload or recompile on changes, you need to rerun build if there are changes made
