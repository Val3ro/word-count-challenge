This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This is the code for the coding challenge. The solution has been made using TypeScript and Next.js, I am not very familiar with Next but I wanted to get closer to the stack you mostly use at the moment.

The Application has been deployed in Vercel. I wanted to deploy it because I thought it would be more efficient than having to clone and run the repository. The reason why I used Vercel is because until now I had only used Heroku. (Find the app [here](https://word-count-challenge.vercel.app/))

You can run the code locally anyway by downloading the code and run the following instructions:

1- Install dependencies and packages

```bash
npm install
# or
yarn
```

2- Run the app

For the Development Environment use:

```bash
npm run dev
# or
yarn dev
```

And for the Production Environment use:

```bash
npm run build
# or
yarn build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assumptions

Since the assignment was open for interpretation, some assumptions have been made:

- Multiple spaces between words count as one space.
- Fullstops and Commas at the beggining or end of a word are removed.
- Not case sentitive. All text is converted to Lower Case.
- A word has always at least one letter or a number. `..` does not count as a word.
