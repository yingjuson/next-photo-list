This is a simple application that displays a list of images from https://jsonplaceholder.typicode.com/photos in a Grid View, utilizing React Query's [useInfiniteQuery](https://tanstack.com/query/v4/docs/framework/react/guides/infinite-queries) for infinite scrolling and [Next.js' Image](https://nextjs.org/docs/pages/building-your-application/optimizing/images) component built-in optimization features.

## Getting Started

I used Node v21.7.3 when creating this project. You can check the Node version installed in your machine by running this:

```bash
node -v
```

The first step is to install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then run the app

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build the app, run

```bash
npm run build
```

And enter this to run the build locally

```bash
npm run start
```

Lastly, for running the tests

```bash
npm run tests
```

## Deployed Version

You can also check out the [deployed version](https://next-photo-list.vercel.app) in Vercel.
