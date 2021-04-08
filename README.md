[![CircleCI](https://circleci.com/gh/w3bdesign/nav-jobs/tree/master.svg?style=shield)](https://circleci.com/gh/w3bdesign/nav-jobs)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/w3bdesign/nav-jobs/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/w3bdesign/nav-jobs/?branch=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_nav-jobs&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_nav-jobs)

<img src="https://user-images.githubusercontent.com/45217974/113947801-c27d8400-980b-11eb-924b-b8ae9e455e33.png" alt="Screenshot" />

# NAV home assignment

We want you to create a simple app / website that retrieves job advertisements from NAV's REST API and shows them to the user.

The ads are downloaded from NAV's website <https://arbeidsplassen.nav.no/>

## Live URL

<https://nav-jobs.vercel.app/>

## Features

-   React with Typescript
-   Typography and colors used by NAV
-   SASS with modules
-   NAV frontend library implemented with multiple components like Pagination and Button
-   State management with Easy Peasy and Typescript typings
-   Responsive design
-   Saving of job ads
-   State-based API error handler with React-toastify
-   Prevent duplicate jobs from being saved (shows error with React-toastify)

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

-   Maybe save jobModalItems to global state (<https://github.com/ctrlplusb/easy-peasy/issues/126>)
-   Implement "Saved ads should not disappear even if the browser is closed and reopened"
-   Add animations

## Refactoring

From things that I'd improve:

-   Set up a proper redux ( ducks pattern ) and move all the APIs into the store, setting up a middleware to handle it ( using  axios ), the lightweight version you're using seems to be half working and it doesn't enable devtools which helps a lot in debugging stuff 

-   ~~It's probably because of my strong habit of doing so, but having an 'assets' folder in the 'src' to keep all the 'svg', 'utils' etc in it might be worth considering. In the current state of things it's not a big deal but once your project scales and you'll add more stuff to it - images, icons some utility functions. To prevent from polluting the 'src' I like to keep them together in the 'assets' folder.~~

-   ~~Speaking of CSS I'd recommend using modules, it allows you to pack up your css into packages and use those classes only in places where you import it therefore opens you up for more consistency in class naming.~~ 

~~You can create a folder for each of your component and create inside: 
ComponentName.tsx
ComponentName.module.css
It'll prevent you from accessing the class from components that you don't really want to is it and messing your css around leaving you a few hours to figure out what's what :wink: 
<https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87>~~

-   ~~I've noticed some CSS variables in your code hence it looks like you're pushing your css to do some extra stuff as it supposed to do, but the CSS is a bit messy when you expect it to do some extra.~~ 

~~I've started to use SASS recently and honestly that's what CSS should have done long ago, clear a syntax, simplify your work and lots more. Take a look at their quick start guide, it's a decent one: 
<https://sass-lang.com/guide>~~
