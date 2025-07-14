#!/usr/bin/env -S pkgx +deno@2 -- deno --allow-net --allow-write

import * as r from 'jsr:@rambda/rambda'

const version = '1.8.1'
const url = `https://raw.githubusercontent.com/pkgxdev/dev/refs/tags/v${version}/src/sniff.ts`

const originalSniffTs = await (await fetch(url)).text()
const newSniffTs = r.pipe(
  originalSniffTs,
  r.replace(/from "libpkgx"/, 'from "https://raw.githubusercontent.com/pkgxdev/libpkgx/refs/tags/v0.21.0/mod.ts"'),
  r.replace(/from "libpkgx\//g, 'from "https://raw.githubusercontent.com/pkgxdev/libpkgx/refs/tags/v0.21.0/src/'),
  r.replace('from "is-what"', 'from "https://deno.land/x/is_what@v4.1.15/src/index.ts"'),
)
await Deno.writeTextFile(`sniff.v${version}.ts`, newSniffTs)
