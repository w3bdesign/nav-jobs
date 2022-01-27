[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/w3bdesign/nav-jobs.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/w3bdesign/nav-jobs/context:javascript)
[![CircleCI](https://circleci.com/gh/w3bdesign/nav-jobs/tree/master.svg?style=shield)](https://circleci.com/gh/w3bdesign/nav-jobs)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/w3bdesign/nav-jobs/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/w3bdesign/nav-jobs/?branch=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_nav-jobs&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_nav-jobs)
[![CodeFactor](https://www.codefactor.io/repository/github/w3bdesign/nav-jobs/badge)](https://www.codefactor.io/repository/github/w3bdesign/nav-jobs)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

<img src="https://user-images.githubusercontent.com/45217974/113947801-c27d8400-980b-11eb-924b-b8ae9e455e33.png" alt="Screenshot" />

# NAV home assignment

We want you to create a simple app / website that retrieves job advertisements from NAV's REST API and shows them to the user.

The ads are downloaded from NAV's website <https://arbeidsplassen.nav.no/>

Authentication is handled via a Bearer token saved as the environment variable REACT_APP_AUTH which needs to be retrieved from Nav.no (see https://github.com/navikt/pam-public-feed#authentication to retrieve an updated token).

## Live url: https://nav.dfweb.no

## Features

- Next.js with Typescript
- ESLint (included with Next.js by default)
- Typography and colors used by NAV
- Styling with SASS and modules
- Custom responsive @mixins
- Animations with React Transition Group and Animate.css
- NAV frontend library implemented with multiple components like Pagination and Button
- State management with Easy Peasy and Typescript typings
- Responsive design
- Saving of job ads
- State-based API error handler with React-toastify
- Fetched API results is saved in Redux state for easier debugging
- Prevent duplicate jobs from being saved (shows error with React-toastify)

## Requirements

The app must meet these criteria:

- The user should be able to see the last 10 ads when the app is opened

- Each ad should show:

  - dato (published)
  - job title (jobtitle)
  - ad title

- The user should be able to press a button to see the next 10 ads

- Each ad should have an "Open" button that allows the ad to show:

  - job description (description)
  - employer
  - degree of extent (extent)
  - applicationDue.

- Each ad should have a "Save" button. Saved ads must be presented in a separate field.

- Saved ads should not disappear even if the browser is closed and reopened.

## TODO

- Implement "Saved ads should not disappear even if the browser is closed and reopened"
