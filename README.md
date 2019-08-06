# Orbit-UI for Astronomer

## Overview

React UI for Astronomer, a managed service to run Apache Airflow on Kubernetes.

# Run Locally

Orbit connects to Houston API. The steps to setup for local development:

### Run Houston API

Houston requires Docker to run. Make sure you have Docker installed.

* Download Houston from https://github.com/astronomerio/houston-api.
* Create a `.env` file and add appropriate variables.
* Run `npm i` to install the necessary packages.
* Run `docker-compose up` in your houston-api repo.
* Run `npm start` in your houston-api repo.
* Navigate to http://localhost:8871/v1/ to access the GraphQL playground (and ensure houston is running.)

Note: Sometimes the docker image doesn't spin down, and thus, doesn't start up again correctly. Run `docker-compose down && docker-compose up` to try again.

### Run Orbit

* Download orbit https://github.com/astronomerio/orbit-ui
* Run `yarn install` in orbit repo
* Copy `.sample.env` as `.env` and provide keys
* Run `yarn start` to start the app.
* Go to http://localhost:5000/ to access the app

### Run Storybook

Follow the following steps to launch a hot-reloading instance of Storybook:

* Run `yarn storybook` to launch storybook.
* Go to the generated url to access storybook.

# How it's built

Orbit is a React app built with Apollo GraphQL.

# Branch Releases

New releases are tagged `v0.3.0` and created from branches `release-0.3` to maintain a history of branches for each release (as well as an ability to hotfix).
Development should be done via feature branches off master and PRs to merge back.

# License

https://github.com/astronomerio/orbit-ui/blob/master/LICENSE
