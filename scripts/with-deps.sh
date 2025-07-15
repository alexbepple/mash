#!/usr/bin/env -S pkgx bash -o errexit -o xtrace

pkgx $(pkgx mash deps-as-plus-pkg) $@
