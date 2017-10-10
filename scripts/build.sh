#!/bin/bash

set -e # exit when error

rm -rf public node_modules

echo "➡️  Installing dependencies"

yarn

wait

echo "➡️  Building website"

gulp build && hugo
