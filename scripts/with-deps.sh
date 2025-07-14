#!/usr/bin/env -S pkgx bash -eo pipefail

deps="$(pkgx mash deps-as-plus-pkg)"

echo "Running"
echo "  pkgx $deps"
echo "  $@"
echo

pkgx $deps $@
