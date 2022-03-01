# Mobile Club: URL shortener test

> ❗️ We do not want you to spend more than 3 hours on this test.
> Please turn in your test even if it is not functional.

## Requirements

* node (version 16 and up)
* yarn
* docker
* docker-compose
* SQL client supporting PostgreSQL (PgAdmin, DBeaver, TablePlus...)

## Stack

* PostgreSQL
* NestJS
* GraphQL
* Apollo
* GraphQL codegen
* React
* Jest
* Cypress

## Getting started

> 📘 There is no production build configuration (not required for the scope of
> this test)

Install and start the application:
```bash
yarn # install dependencies
yarn dev # run dev. environment
```

NestJS & React & GraphQL codegen are hot reloaded.

- front-end accessible at: http://localhost:3000
- back-end accessible at: http://localhost:4000
- PostgreSQL accessible at: mobile-club:mobile-club@localhost:5432/url-shortener

To stop the application:
```bash
yarn stop
```

> ❗️ If you choose to add dependencies be sure to re-build the corresponding
> docker image. Because `node_modules` are baked into the image.
> To do so: `yarn rebuild`

Test launch commands are available in `package.json` files, in front-end and
back-end subdirectories.

## User stories

- As an end user, I want to generate shorter URLs that redirects to the same
location, so when I share a link it appears shorter.
- (Bonus): Implement any feature that you like. Few examples to get your
imagination started: usage count, expiration date, authentication, user agent
tracking.

## Submitting your test

- Upload the project on a public repository (Github, Gitlab, BitBucket...)
- Send the link of the project by email to `tech@mobile.club`

🍀 Best of luck, from Mobile Club’s tech team.
