# dApp Developer Platform Client

## Description

This repository contains the source code for the "dApp Developer Platform Client" React project. Below you will find information about the project stack, how to run it locally, and the necessary environment variables for proper app functionality.

## Project Stack

-   Programming Language: TypeScript (ts)
-   Framework: React (react)
-   Main Libraries: Material-UI (mui), Redux (redux), Redux-Axios (redux-axios), Redux-Saga (redux-saga)

## Requirements

-   Node.js version 16.14.0 or newer
-   Yarn (package manager) for installing dependencies and running the project

## Installation and Usage

1.  Download or clone the repository to your local machine.
2.  Open a terminal in the root directory of the project.
3.  Run the command `yarn install` to install the dependencies.
4.  Run the command `yarn dev` to start the project.

## Environment Configuration

To ensure proper functionality of the application, you need to configure the following environment variables, which are not included in this repository. Create a `.env` file and set the following variables:

-   `REACT_APP_API_URL` - URL for communicating with the API.
-   `REACT_APP_IMAGE_HOST_KEY` - Key for image hosting, using imgbb API.
-   `REACT_APP_AUTH0_DOMAIN` - Auth0 domain for user authentication.
-   `REACT_APP_AUTH0_CLIENT_ID` - Auth0 client ID.
-   `REACT_APP_AUTH0_REALM` - Auth0 realm.
-   `REACT_APP_AUTH0_USER_SCOPE` - Auth0 user scope.
-   `REACT_APP_AUTH0_LOGIN_RESPONSE_TYPE` - Response type for authentication.
-   `REACT_APP_AUTH0_CLIENT_SECRET` - Auth0 client secret.
-   `REACT_APP_AUTH0_TENANT` - Auth0 tenant.
-   `REACT_APP_MAINNET_URL` - Mainnet URL.
-   `REACT_APP_PREPROD_URL` - Pre-production URL.
-   `REACT_APP_PREVIEW_URL` - Preview URL.
-   `REACT_APP_STRIPE_SECRET_KEY` - Stripe secret key for financial operations.
-   `REACT_APP_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key for client-side usage.

Please note that the actual values for these variables should be provided by you, as they contain sensitive information such as access keys and secrets.

## Authentication

Authentication is handled using Auth0. Details about user authentication can be found on the [Auth0](https://auth0.com/) website.

## Financial Operations

Stripe is used for financial operations. Details about using Stripe can be found on the official [Stripe](https://stripe.com/) website.