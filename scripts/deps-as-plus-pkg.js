#!/usr/bin/env -S pkgx +deno@2 -- deno --allow-read

import * as r from 'jsr:@rambda/rambda'
import { parse } from 'jsr:@std/yaml'

const yaml = await Deno.readTextFile("pkgx.yaml")
r.pipe(
  yaml,
  parse,
  r.prop('dependencies'),
  r.split(' '),
  r.map(r.concat('+')),
  r.join(' '),
  console.log,
)
