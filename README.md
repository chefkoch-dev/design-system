# Chefkoch Design System
[![Build Status](https://travis-ci.org/chefkoch-dev/design-system.svg?branch=master)](https://travis-ci.org/chefkoch-dev/design-system)

This repository contains the Chefkoch Design System (DSY). 
Its patterns and documentation are built with
[Astrum](http://astrum.nodividestudio.com/).

Showcase: [https://design.chefkoch.de](https://design.chefkoch.de)

## Contents
* [Installation & Usage](#installation--usage)
* [Contributing](#contributing)
* [Disclaimer](#disclaimer)

## Installation & Usage

### Maintain the design-system with docker

    docker run --rm -v $(pwd):/app -w="/app" node npm install|update

### Usage Requirements

* npm
* Sass

Install the design patterns and add them in anyway you see fit to
your build pipeline.

    npm install chefkoch-design-system --save-dev

**Integration in the pipeline, example with gulp and gulp-sass**

    sass({
        includePaths: ['node_modules/chefkoch-design-system/components/']
    })

**Import the desired pattern(s) in your sass file**

    @import "~chefkoch-design-system/components/button";
    @import "~chefkoch-design-system/components/button-primary";

**Use the imported component in your markup**

    <button class="ds-btn ds-btn--primary">Primary Button</button>


## Contributing
Take a look at the [development and contributing guidelines](CONTRIBUTING.md) if you are in the
mood of extending the design system.

Please make sure to read the disclaimer first.

## Disclaimer
The Chefkoch Design System is a library for internal usage by the Chefkoch GmbH, its publication on Github and npm
 is mainly in the spirit of providing another implementation reference for display patterns and design systems.

We **do not encourage** its usage for other websites.
