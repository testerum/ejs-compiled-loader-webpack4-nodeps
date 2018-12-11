const path = require("path");
const loader_utils = require("loader-utils");
const ejs = require("ejs");

function cloneFields(object) {
    return JSON.parse(
        JSON.stringify(object)
    );
}

module.exports = function (source) {
    this.cacheable && this.cacheable();

    // cloning options, to make sure we don't alter them by mistake between invocations
    const options = cloneFields(loader_utils.getOptions(this));

    const opts = ((options || {}).ejsOptions) || {};

    opts.client = true;

    // Use filenames relative to working dir, which should be project root
    opts.filename = path.relative(process.cwd(), this.resourcePath);

    var template = ejs.compile(source, opts);

    if (template.dependencies.length > 0) {
        template.dependencies.map(dep => this.addDependency(dep));
    }

    return 'module.exports = ' + template;
};
