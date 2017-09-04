// import typescriptPlugin from 'rollup-plugin-typescript2';
// import typescript from 'typescript';
// import commonjs from 'rollup-plugin-commonjs';
// import nodeResolve from 'rollup-plugin-node-resolve';
// import path from 'path';

module.exports = {
  input: './tmp/server.js',
  output: {
    file: 'index.js',
    format: 'cjs'
  },
  external: [
    "@markis/stattleship",
    "body-parser",
    "config",
    "cookie-session",
    "cookie-parser",
    "dataloader",
    "express",
    "express-graphql",
    "graphql",
    "method-override",
    "passport",
    "passport-oauth2",
    "passport-oauth2-refresh",
    "yahoo-fantasy",
  ],
  sourcemap: true
};