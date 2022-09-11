#!/usr/bin/env node
import { rmSync } from "node:fs";
import { argv } from "node:process";

// https://nodejs.org/docs/latest/api/process.html#processargv
// The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
// The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed.
// The second element will be the path to the JavaScript file being executed.

argv.shift();
argv.shift();

for (const x of argv) {
    rmSync(x, { recursive: true, force: true });
}
