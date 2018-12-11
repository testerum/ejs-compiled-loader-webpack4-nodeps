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

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: "ejs-compiled-loader-webpack4-nodeps"
                    }
                ]
            }
        ]
    }
};
```


## Release history
* 0.0.1 - Initial release


## License

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
