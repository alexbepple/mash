#!/usr/bin/env -S pkgx bash -eo pipefail

deps="$(pkgx mash deps-as-plus-pkg)"
pkgx $deps -- $@
