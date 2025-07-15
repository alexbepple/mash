#!/usr/bin/env -S pkgx bash -o errexit

deps="$(pkgx mash deps-as-plus-pkg)"

echo "Running"
echo "  pkgx $deps"
echo "  $@"
echo

pkgx $deps $@
