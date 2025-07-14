#!/usr/bin/env -S pkgx +deno@2 -- deno --allow-read

import { Path } from 'https://raw.githubusercontent.com/pkgxdev/libpkgx/refs/tags/v0.21.0/mod.ts'
import sniff from 'https://raw.githubusercontent.com/alexbepple/mash/refs/heads/main/lib/sniff.v1.8.1.ts'
import * as r from 'npm:ramda@0.31.3'

const mapPkgToString = pkg => `'+${pkg.project}${pkg.constraint}'`

const sniffResult = await sniff(Path.cwd())
r.pipe(
  () => sniffResult,
  r.prop('pkgs'),
  // r.tap(console.log),
  r.map(mapPkgToString),
  r.join(' '),
  console.log,
)()
