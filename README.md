# Browser Extension Template and Tooling

This repo make your life easier when developing browser extensions.

* Provides a clear separation between application code and browser-specific code and configuration.
* Packages your extensions so you don't have to.
* All you have left to do is code and distribution!

## Requirements

[Gulp](http://gulpjs.com) is the only requirement. If not already installed, run
`npm install -g gulp`.

## Development

Generic code goes into `/js`, `/css`, `/img` folders.

Browser-specific code goes into the appropriate subfolder of `/vendor`.

### Commands

#### `$ gulp`

will package the extensions into the `/build` folder.

#### `$ gulp watch`

is the most useful tool for development. It rebuilds your extension at every filesystem change.

#### `$ gulp dist`

will build your extensions for distribution. __This the task you will call before publishing your extensions.__

Before your distribution, make sure to:

1. Update all `/vendor` package file with new version (`manifest.json`, `package.json`, `Settings.plist`).
2. Update `/vendor` browser file if necessary.

__Note__: Safari still requires a manual build.

# Acknowledgements

This repository follows up and generalizes the work of
[likeastore](https://github.com/likeastore) in their [browser-extension repository](https://github.com/likeastore).

Kudos to them for their hard work!

# License

MIT
