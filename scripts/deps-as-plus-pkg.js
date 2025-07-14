#!/usr/bin/env -S pkgx +deno@2 -- deno --allow-read

import { Path } from 'https://raw.githubusercontent.com/pkgxdev/libpkgx/refs/tags/v0.21.0/mod.ts'
import sniff from 'https://raw.githubusercontent.com/alexbepple/mash/refs/heads/main/lib/sniff.v1.8.1.ts'
import * as r from 'jsr:@rambda/rambda'

const mapPkgToString = pkg => r.pipe(
  pkg,
  pkg => `${pkg.project}@${pkg.constraint}`,
  r.replace('@*', ''),
  r.replace('@~', '@'),
)

r.pipe(
  await sniff(Path.cwd()),
  r.prop('pkgs'),
  // r.tap(console.log),
  r.map(mapPkgToString),
  r.map(r.concat('+')),
  r.join(' '),
  console.log,
)
