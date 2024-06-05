# Relictify API

This project is a simple backend API service for [Relictify](https://github.com/NekoDrone/Relictify).
This API is RESTful, and is used to load configurations for the app.

The stats and information used in creating this API is taken from the [HSR Fandom Wiki](https://honkai-star-rail.fandom.com/).

## Usage

This API is not meant to be publicly accessible without the correct auth token(s).\
If you would like access to the API, you can fork the project, and host the API on your own.

The data provided is for reference, and will be updated as Honkai: Star Rail is updated.

For [Relictify](https://github.com/NekoDrone/Relictify) contributors, please decrypt the dev keys according to the instructions on the Contributing page. The development copy of the application uses the production database to populate configurations.

## Setup

### Requirements

- Node
- PostgreSQL >=16 running on port 5432
- OpenSSL (if your machine does not ship it).

### Steps

1. Install [dotenv-cli](https://www.npmjs.com/package/dotenv-cli). This repo does not provide the cli tool for you.
2. Install other dependencies. `npm install`
3. Decrypt development environment variables. `npm run decrypt-dev -- -k <decryption key>`
4. Activate Prisma and seed the db `npm run db-migrate-dev`
5. Run the project using `npm run dev`.

## Contributing

The project is not accepting contributions at this moment. If you would like to contribute to an open source project, please consider contributing to [Relictify](https://github.com/NekoDrone/Relictify) instead.
