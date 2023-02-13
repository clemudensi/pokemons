This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and a Typescript template.

## Steps to run test in the application.
1. Unit Tests
    * run `yarn test`

### Improvements
* Adding e2e tests.
* Implement ErrorBoundary for application

### How the app works
* On starting the application it fetches a list of pokemons with limit set to 50
* ONn Scrolling to the bottom, additional 50 pokemons are added to the existing list of pokemons
* Each pokemon can be marked as favorite (not persisted)
* View pokemon details by clicking pokemon name to see more info

### Architectural decision
* @emotion/react with tailwind is used for UI design, twin-macro is used to combine both libraries efficiently
* React-query is used for fetching data and managing server states.
