# grunt-ng-attr-hint
[![npm version](https://badge.fury.io/js/ng-attr-hint.svg)](http://badge.fury.io/js/ng-attr-hint) ![license](https://img.shields.io/badge/license-MIT-blue.svg)
> A static linting tool for angular ng directives

## Demo

![ng-attr-hint](https://gist.githubusercontent.com/princejwesley/accb5688eaf40ae338af/raw/38549764e5ae53fd9324b8c8f0d6ead6d43d9f6c/ng-attr-hint.png)

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ng-attr-hint --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ng-attr-hint');
```

## The "ng-attr-hint" task

### Overview
In your project's Gruntfile, add a section named `ng-attr-hint` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'ng-attr-hint': {
    options: {
      // Optional field
      // Task-specific options go here.
    },
    files: [
      // Target-specific file lists and/or options go here.
    ]
  }
});
```

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. Options field are not necessary (optional field), just to pass files argument with required fileNames in it.

```js
grunt.initConfig({
  'ng-attr-hint': {
      files: ['*.html']
   }
});
```

#### Custom Options
In this example, `options:skip` rule got added. This rule will help to skip specified attributes in the list. `files:[]` - mandatory field to run rules.

```js
grunt.initConfig({
  'ng-attr-hint': {
      options: {
          skip: ['ngMessage','ngInit']
      },
      files: ['*.html']
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1 - Released on 09-AUGUST-2015

## License
Copyright (c) 2015 [Senthil Porunan](http://www.toolitup.com). Licensed under the MIT license.
