#!/usr/bin/env sh

# abort on errors
set -e

yarn docs:build

cp -r changelog dist/changelog

cd dist

git init

git add -A

git commit -m "deploy"

git push --force --quiet "https://github.com/Kuaizi-co/cep.git" master:gh-pages

cd -
