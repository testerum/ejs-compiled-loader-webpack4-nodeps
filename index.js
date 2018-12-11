const path = require("path");
const ejs = require("ejs");

module.exports = function (source) {
    this.cacheable && this.cacheable();

    const opts = {};
    opts.client = true;

    // Skip compile debug for production when running with
    // webpack --optimize-minimize
    if (this.minimize) {
        opts.compileDebug = false;
    }

    // Use filenames relative to working dir, which should be project root
    opts.filename = path.relative(process.cwd(), this.resourcePath);

    var template = ejs.compile(source, opts);

    if (template.dependencies.length > 0) {
        template.dependencies.map(dep => this.addDependency(dep));
    }

    return 'module.exports = ' + template;
};
