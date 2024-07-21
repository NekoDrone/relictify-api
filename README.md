# Relictify API

This project is a simple backend API service for [Relictify](https://github.com/NekoDrone/relictify-app).
This API is RESTful, and is used to load configurations for the app.

The stats and information used in creating this API is taken from the [HSR Fandom Wiki](https://honkai-star-rail.fandom.com/).

## Usage

This API is not meant to be publicly accessible without the correct auth token(s).\
If you would like access to the API, you can fork the project, and host the API on your own.

The data provided is for reference, and will be updated as Honkai: Star Rail is updated.

For [Relictify](https://github.com/NekoDrone/relictify-app) contributors, you will not need to set up this project in order to set up the project. The development copy of the application uses the production database to populate configurations such as character data and relic information.

Please refer to the instructions for setup on Relictify's [contributing page](https://github.com/NekoDrone/relictify-app/blob/master/CONTRIBUTING.md) if you intend to contribute to the frontend.

## Setup

### Requirements

- Node
- PostgreSQL >=16 running on port 5432
- OpenSSL (if your machine does not ship it).

### Steps

1. Install [dotenv-cli](https://www.npmjs.com/package/dotenv-cli). This repo does not provide the cli tool for you.
2. Install other dependencies. `npm install`
3. Decrypt development environment variables. `npm run decrypt-dev -- -k <decryption key>`
4. Install the [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started).
6. Run the project using `supabase functions serve`.

## Contributing

The project is not accepting contributions at this moment. If you would like to contribute to an open source project, please consider contributing to [Relictify](https://github.com/NekoDrone/relictify-app) instead.
