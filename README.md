[![CircleCI](https://circleci.com/gh/w3bdesign/nav-jobs/tree/master.svg?style=shield)](https://circleci.com/gh/w3bdesign/nav-jobs)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/w3bdesign/nav-jobs/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/w3bdesign/nav-jobs/?branch=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_nav-jobs&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_nav-jobs)

<img src="https://user-images.githubusercontent.com/45217974/111244849-fe09a180-8603-11eb-9d79-9c7bd3a68388.png" alt="Screenshot" />

# NAV home assignment

We want you to create a simple app / website that retrieves job advertisements from NAV's REST API and shows them to the user.

The ads are downloaded from NAV's website <https://arbeidsplassen.nav.no/>

# Live URL

https://nav-jobs.vercel.app/

## Features

-   React with Typescript
-   Typography and colors used by NAV
-   NAV frontend library implemented with multiple components like Pagination and Button
-   State management with Typescript typings
-   Responsive design

## Requirements

The app must meet these criteria:

-   The user should be able to see the last 10 ads when the app is opened

-   Each ad should show:

    -   dato (published)
    -   job title (jobtitle)
    -   ad title

-   The user should be able to press a button to see the next 10 ads

-   Each ad should have an "Open" button that allows the ad to show:

    -   job description (description)
    -   employer
    -   degree of extent (extent)
    -   applicationDue.

-   Each ad should have a "Save" button. Saved ads must be presented in a separate field.

-   Saved ads should not disappear even if the browser is closed and reopened.

## TODO

-   Fix all known bugs

-   Connect CircleCI and DevOps tools

-   Add functionality for saving ads

-   Add animations

-   Add testing
