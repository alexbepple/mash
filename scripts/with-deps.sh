#!/usr/bin/env -S pkgx bash -eo pipefail

deps="$(pkgx mash deps-as-plus-pkg)"

echo "Running"
echo "  $@"
echo "with dependencies"
echo "  $deps"

pkgx $deps -- $@
