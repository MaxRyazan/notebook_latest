#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New deploy'
git push -f git@github.com/MaxRyazan/notebook_latest.git master:gh-pages

cd -