Gravina Demo Echo React App
============================

__[See an in-depth demo]()__

What
----

Gravina is a very small React app that is designed to work with [an echo server](https://github.com/monknomo/gravina-dropwizard-configurable-assets-bundle-skeleton), to demonstrate hosting external static assets.

Why
----

It is easy to build React apps, and it is easy to build Dropwizard apps, but it is hard to package React apps inside Dropwizard apps.  It is, however, easy to place React app files on the same computer as a Dropwizard app.

How
---

Start the Dropwizard server.  Note the port it is running on (probably port 8087, if it's set to default settings).

Run this app in development mode with `npm run start`.  This allows you to develop on this app with auto-reload, and all the usual React goodies.

Build this app for production with `npm run build`.  This will create a build directory.  Either move the contents of this directory to where the Dropwizard server is hosting, or point the Dropwizard external hosting location to the build folder.

__[See an in-depth demo]()__