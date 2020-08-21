# Development and Contributing guidelines

## Contents
* [Installation](#installation)
* [Development](#development)
* [Running Tests](#running-tests)

## Installation
Use docker or this part:

Install the gulp-cli globally (if you haven't already)

    npm install -g gulp-cli

Checkout the repository and and install npm dependencies

    npm install

Finally build the design system with gulp

    gulp build


## Development

### Directory structure
| Directory | Description |
| --- | --- |
| `app` | Contains the "Design System" astrum app |
| `app/components` | Contains the pattern descriptions and example markup |
| `app/pages` | As the name suggests, info and content pages |
| `patterns` | Contains the actual pattern source code, momentarily only Sass |

### Requirements
* NodeJS

Serve the design system locally via Browsersync:

    gulp serve

same with docker:

    docker run --rm --pid=host -v $(pwd):/app -w="/app" -p 3000:3000 node node node_modules/gulp/bin/gulp.js -f /app/gulpfile.js serve


and then start the application on:

    http:/localhost:3000

### Running Tests
To run the css lint tests

    gulp test

same with docker:

    docker run --rm --pid=host -v $(pwd):/app -w="/app" -p 3000:3000 node node node_modules/gulp/bin/gulp.js -f /app/gulpfile.js test

### Branching

Only the master branch are published to https://design.chefkoch.de/ and only tags on master are create a new nmp package (https://www.npmjs.com/package/chefkoch-design-system). Please ensure that on master are only valid versions withe correct version number and tag.

But travis-ci build all branches to get fast feedback. At the moment travis lint the scss.

#### Working with branches

Sometimes it could be use full to work with branches and use the code of the branch at other projects. How it works:

+ create branch at design-system (DSY)
+ now/direct update at package.json the version number of the design-system package (eg. "1.0.2-alpha"). This is required to ensure a save "./wok install" at the client project.
+ travis-ci build the branch and test it on every commit - but travis don't publish anything
+ at the client project (eg. recipe-amp) you can now reference the commit hash (from design-system) you want in package.json like `"chefkoch-design-system": "git://github.com/chefkoch-dev/design-system.git#87e173d",`
    + git://... url is the only way that works :-/
+ update at the client project your npm packages to get the commit via github. (eg. "./wok install")
+ before merge the branch to master, set the correct version number and tag on master

### Tagging

Create a release description at github. This will create a tag. Use the version number from package.json and tag it with the flowing format:

    v<$VERSION>

Hint: every commit on master should have a tag! (If not, design.chefkoch.de an the latest npm package are different.)
