# ts-rest : Next + Nest Example

This is a example of how to use the `@ts-rest` library in a fullstack monorepo.
`@ts-rest/core` is used to create `@ts-rest-example/contract` package.
`@ts-rest/react-query` is used to consume the api on the client side.
`@ts-rest/nest` is used to type the api implementation on the server side.

## What's inside

This example repo uses [Lerna](https://lerna.js.org/) for monorepo workflow.

### Apps and Packages

- `api`: a [NestJS](https://nestjs.com/) app
- `web`: a [Next.js](https://nextjs.org) app
- `contract` : a [ts-rest](https://ts-rest.com/) contract
- `db` : a [Prisma](https://www.prisma.io/) client

## Setup

### Prerequisites

- Install Yarn.

```bash
npm install -g yarn
```

### Install Dependencies

- Install dependencies.

```bash
npx lerna bootstrap
```

### Migrate DB

- Make sure MySQL server is running on your local machine.

```bash
npx lerna run migrate:local
```

### Build

```bash
npx lerna run build
```

### Develop

To develop all apps and packages, run the following command at the root of project:

```bash
npx lerna run dev
```
