module.exports = function (eleventyConfig) {
  // Optional, used for the main application styles
  eleventyConfig.addWatchTarget("./src/app.css");
  eleventyConfig.addPassthroughCopy("./src/app.css");

  // Allows transforming ex. `hello-world` into `HelloWorld`
  // for the component `class` export
  eleventyConfig.addFilter("createClass", (str) => {
    if (!str) {
      return;
    }
    return str.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};