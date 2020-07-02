#! /usr/bin/env node
"use strict";

require("babel-polyfill");
const dotenv = require("dotenv");
const server = require("./app");

if (process.env.NODE_ENV === "production") {
  require("babel-register");
}

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

dotenv.config({ silent: true });

server.listen(port, () => {
  console.log("Server running on port: %d", port);
});
