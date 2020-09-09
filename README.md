# NextJS, Material UI, Graphql, i18n, Jest boilerplate

A simple boilerplate ripped off of `big dipper default interface`

## Quick Start
If you don't want to clone this repo, in your new project repo.
```
git init
git remote add boilermaker https://github.com/forbole/next-material-graphql-boilerplate.git
git fetch boilermaker
git merge boilermaker/master
npm i
npm run dev
```

## What's included
- hot reloading
- material ui
- apollo client (graphql)
- ramda
- jest testing
- ts pre-defined alias (see tsconfig)
- eslint
- i18n
- custom express server
- codecov (for public repos)
- github actions (for public repos)
  - default just runs lint and test
- default env file that will load if no `.env` is found

## known issues
- graphql ssg is not setup
