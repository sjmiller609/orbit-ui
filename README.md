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
* Run `npm install` in orbit repo
* Run `npm run local` to start the app.
* Go to http://localhost:5000/ to access the app

### Run Storybook

Follow the following steps to launch a hot-reloading instance of Storybook:

* Download orbit https://github.com/astronomerio/orbit-ui
* Run `npm install` in orbit repo
* Run `npm run storybook` to launch storybook.
* Go to the generated url to access storybook.

# How it's built

Orbit is a React app built with Apollo GraphQL.

## Component Library

Orbit's component library is designed with atomic principles.

Each component is a self-contained folder with related files:

```
Link
|--index.js
|--styles.scss
|--tests
   |--index.test.js
   |--__snapshots__
      |--index.test.js.snap
```

### Instruments

`src/instruments` are all the composable 'atoms' of the app, organized by type. These can be imported into any component, eg:

```
import { TextField, Link, H1 } from 'instruments'
```

Any new instruments must be added to `src/instruments/index.js`.

### Modules

`src/modules` contains the primary modules within the app. Each module has a single `Data` folder for the api calls (mutations and queries) for that data type. As well as a variety of "molecule" components that make up that module.

## Stylesheets

Styles are defined as classes (ie not css-in-js) attached to each component using CSS Modules to avoid name/scope conflicts (each class gets renamed on build). Defining styles at the instrument level often means that when composed at the module level, no additional styles are needed—most components can simply be dropped in.

All styles are defined in Sass. Though outside of color variables, few mixins or other more advanced Sass features are necessary.

Each component includes a `className` prop that enables styles passed down to any children components.

## Storybook

[Storybook](https://storybook.js.org/) is a library that supports building an component library for UI elements. This is useful for developing individual UI elements and containers as well as providing a ready-made documentation per component.

Included in Storybook are the following add-ons:

- Viewport - for testing components at various viewport sizes
- Info - displays available component props and other details
- A11y - tests and provides accessibility information
- Knobs - for testing various information (text, objects, etc.) on different props
- Actions - provides mock functions for button clicks and form submissions
- Router - includes Redux for each component

While building a new component or updating an existing component, it is important to also create or update the `_story.js` file associated with it. Storybook is only useful when its provided with the most up-to-date and accurate information.

To run Storybook locally:

```
npm install
npm run storybook
```

> Note: Astronomer fonts aren't showing since they are applied at a global level and not tied directly into the component(s). Can be fixed.

## Apollo

Orbit and Houston use Apollo graphql to manage all API calls.

In Orbit, `modules/api/fragments.js` contains all the app's defined data types. These fragments are imported into specific gql mutations and queries for each module (eg. `modules/deployments/Data/api.js`).

Then, `api.js` containing gql documents is imported into a query HOC `deployments/Data/index.js` or a mutation HOC `deployments/Data/Update.js` defined specifically for a single call on that data type, and used wherever that call is wanted.

```
import Data from 'modules/deployments/Data'

const ListDeployments = ({ deployments }) => {
  ...
}

export default Data(ListDeployments)
```

A couple things to note:

* Variables can be passed into the Data HOC's from a parent component( eg. `deploymentId`). Other props are passed through.
* Atomic `Query` `Create` `Delete` and a baseline `Mutation` components are defined as `instruments`, with preset and configurable functionality for managing Apollo API calls and responses (error handling, cache updating, snackbar messaging, redirects, analytics tracking, etc.) This makes it super easy to define a new query or mutation without wiring up a bunch of stuff everytime.
* Apollo's query and mutation components use the renderProp pattern (returning a function to render, instead of an element). Wrapping them in Higher Order Components allows for a more consistent component flow throughout the app (Orbit doesn't really use render props elsewhere).

## State

Wherever possible, state is maintained locally within self-contained components.

For global state, Apollo handles all API calls and data caching. With the exception of a few UI elements like modals, all view state is mapped to specific routes maintained in the router (React Router 4), enabling full use of browser actions and url mappings.

React's `Context.Provider` && `Context.Consumer` wrapped in HOC's manage the remaining session auth and global UI elements (eg modals, snackbar) cleanly and succintly,.

## Testing

We use Prettier in combo with Eslint to maintain code quality throughout.

Unit tests (Jest + Enzyme) for each component are lighlty defined as a series of UI snapshots for most `instruments`, testing significant prop changes when mounted. For more data-intensive components, assertion tests are used to verify the functional shape of data on input/output.

Increasing test coverage is a work in progress.

## Tooling

The original scaffolding comes from https://github.com/coryhouse/react-slingshot. Though this has been adapted significantly for Astronomer's needs.

# Branch Releases

New releases are tagged `v0.3.0` and created from branches `release-0.3` to maintain a history of branches for each release (as well as an ability to hotfix).

Development should be done via feature branches off master and PRs to merge back.

# License

https://github.com/astronomerio/orbit-ui/blob/master/LICENSE
