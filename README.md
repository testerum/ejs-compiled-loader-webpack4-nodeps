# ejs-compiled-loader-webpack4-nodeps

Webpack 4+ loader to compile EJS templates.

The loader loads a ``.ejs`` file and returns a compiled template.


## Why, oh why, yet another EJS webpack loader?

While there are many EJS webpack loaders, none of the ones I tried were good enough:
* some would render the template at build-time, but I needed template compilation, to be able to render the template at runtime
* some would do template compilation, but 3rd party dependencies like ``uglify-js`` would cause webpack to break with weird errors
 
This package does not depend on ``htmlmin``, ``uglify-js``, or other packages that may cause issues.


## Installation

``npm install --save-dev @testerum/ejs-compiled-loader-webpack4-nodeps``


## Webpack config

Minimum required configuration:
```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.ejs$/,
                use: "@testerum/ejs-compiled-loader-webpack4-nodeps"
            }
        ]
    }
};
```

It's also possible to pass options to EJS:
```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: "@testerum/ejs-compiled-loader-webpack4-nodeps",
                        options: {
                            ejsOptions: {
                                compileDebug: true
                            }
                        }
                    }
                ]
            }
        ]
    }
};
```
Everything inside ``ejsOptions`` will be passed to EJS.

## Usage
This plugin will compile EJS templates at build-time. That means that when doing ``require("./my-template.ejs")``, you get back a compiled template. A compiled template is a JavaScript function with the following signature: ``function render(model: Object): string`` - that is, you get back a function that evaluates the template with the given model and returns a string.

For details, check the demo project at [@testerum/ejs-compiled-loader-webpack4-nodeps-ts-demo](https://github.com/testerum/ejs-compiled-loader-webpack4-nodeps-ts-demo/).

## Limitations

### Includes
Includes don't seem to work: you get an error at runtime that ``include is not a function``.
If you know how to make this work, pull request are welcome.

## Release history
* 0.0.1 - Initial release


## License

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
