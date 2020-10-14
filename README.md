# ⚡️ 11ty Web Component Generator

## Using the Generator

[Eleventy (11ty) is a static site generator](https://www.11ty.dev/docs/) that makes it possible to mix templating languages. More importantly to this generator is that we can customize the _output file type_ and composite a file from _includes_.

The web components are generated within a Nunjucks (`.njk`) template that outputs the final `.js` file.

This generator works with the inherent features of Eleventy, including that it expects templates and template partials to be placed in `_includes`.

This leads to the following file structure to create a web component with styles and additional scripting.

First, create the component template file in `src/components/[component-name].njk`. _It is important to kebab-case the file name_

Then within `_includes/components/` create:

```bash
[component-name]/
  script.js
  style.css
```

Keep the names of `script.js` and `style.css` so that the `_includes/component.njk` template can successfully include their contents to generate the web component.

## Using a Generated Web Component

The final web component will be output within `public/components/[component-name].js` and is ready to be included in another project such as:

```html
<script type="module" src="path/to/component-name.js"></script>
<component-name></component-name>
```

### Display a Component Within This Generator Project

Create additional pages in this project directly within `src` as Nunjuck (`.njk`) files and add the following frontmatter in addition to any HTML and Nunjuck template tags.

```md
title: Page Title
component: component-name
```

Then the `page.njk` template will use the `component` value to include the relative path to the web component script.

## Project Scripts

- **`npm start`** - run Eleventy on localhost with included Browsersync hot-reload
- **`npm run build`** - run only Eleventy for creating a production build of the generator project

## Web Component Resources

First a little disclaimer - I am brand new to web components, so I know this doesn't cover all the things you may want to do, or the best way to generically composite them. Submit a PR if you want to help extend this generator!

Here are some resources that helped me put together [my first web component](https://github.com/5t3ph/css-webring):

- [Encapsulating Style and Structure with Shadow DOM](https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/)
- [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Working_through_some_simple_examples)
- [Creating a Custom Element from Scratch](https://css-tricks.com/creating-a-custom-element-from-scratch/)
- [Custom Elements v1: Reusable Web Components](https://developers.google.com/web/fundamentals/web-components/customelements)

## 11ty Resources

I'm very fond of 11ty, so here's a list of my other resources:

**Learn to build an 11ty site in 20 mins** with my [egghead video course](https://5t3ph.dev/learn-11ty) and see how to add a blog and custom data.

**Add auto-generated social media images** by following [my tutorial](https://dev.to/5t3ph/automated-social-sharing-images-with-puppeteer-11ty-and-netlify-22ln)

**Explore advanced setup of custom data** through my [tutorial on building a community site](https://css-tricks.com/a-community-driven-site-with-eleventy-building-the-site/)

**For a full-featured starter** check out my [11ty Netlify Jumpstart](https://11ty-netlify-jumpstart.netlify.app/) (also works for hosts other than Netlify).

**For a featureless Sass starter** grab the template for my [11ty Sass Skeleton](https://github.com/5t3ph/11ty-sass-skeleton)
