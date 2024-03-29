[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

<div style='display: flex; justify-content: center;'>
  <img src='https://raw.githubusercontent.com/tugboatcoding/react-design-system-adapters/master/logo.png' width='240px' />
</div>

# React Design System Adapters

Collection of adapters for React design systems (e.g. [Evergreen](https://evergreen.segment.com/components)) that transform JSON to props that React design systems understand.

## Why?

The adapters in this repo serve a specific use case. When you have data to display with a certain design system, you can use `react-design-system-adapters`. It will convert your data into props that the target design system can understand.

More generally however, it makes the UI more declarative. By expressing your UI as data (i.e. JSON), you get all the benefits of declarative programming (understandable code, scalable, immutability, etc). When the UI is defined in this way, adapters are naturally needed and that is the purpose of this repo.

This example demonstrates how you can use the Evergreen adapter to use Evergreen design system components:

```jsx
import {
  mapToEvergreenProps as mapToProps,
  EvergreenComponent,
} from "@react-design-system-adapters/evergreen-ui";

// UI expressed as JSON.
const ui = {
  recursive: true,
  type: "box",
  props: {
    children: [
      {
        type: "box",
        props: {
          mt: 16,
          children: [
            {
              type: "h1",
              props: { children: "Heading 900" },
            },
          ],
        },
      },
      {
        type: "box",
        props: {
          mt: 16,
          children: [
            {
              type: "link1",
              props: { href: "https://github.com", children: "Link 500" },
            },
          ],
        },
      },
    ],
  },
};

/**
 *  Completely declarative UI made possible by the Evergreen adapter for your data.
 */
<EvergreenComponent {...mapToProps(ui)} />;
```

## Supported design systems

Design systems for which currently there are adapters:

- [Evergreen](https://evergreen.segment.com/components), [Segment](http://segment.io/)'s design system
- [React Potion](https://github.com/tugboatcoding/react-potion), a [Notion](https://notion.so)-like design system

## Usage

Adapters for each design system is an individual `npm` package.

```bash
# Install adapters you need. Packages are separate for tree shaking.

npm i -S @react-design-system-adapters/evergreen-ui
npm i -S @react-design-system-adapters/react-potion
```

To import:

```jsx
import { mapToEvergreenProps } from "@react-design-system-adapters/evergreen-ui";
```

You'll need to transpile the source. To do so, use e.g. [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/):

```js
module: {
  ...config.module,
  rules: [
    ...config.module.rules,
    {
      test: /\.js/,
      include: /node_modules\/(react-design-system-adapters|react-potion)\/.*/, // For now, both these dependencies need transpiling.
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-object-rest-spread'],
        },
      },
    },
  ],
},
```

To view examples, open Storybook:

```
npm run storybook
```

![Storybook](https://raw.githubusercontent.com/tugboatcoding/react-design-system-adapters/master/screenshots/storybook.png)

## How it works

### Props adapters

`react-design-system-adapters` offers functions (i.e. **adapters**) that transform your data (**input**) to props that React design systems can understand (**output**).

An example:

```jsx
import { Heading } from "evergreen-ui";
import { mapToEvergreenProps } from "@react-design-system-adapters/evergreen-ui";

const MyComponent = () => {
  const input = { type: "heading1" };
  const output = mapToEvergreenProps(input);
  return <Heading {...output}>Heading 900</Heading>;
};
```

#### Input

Adapters are pure JavaScript functions. Each function will take an **input** (JSON of a certain shape/schema) and transform it to props for the target design system. The schema is:

```jsx
/**
 * Supported `<TYPE>`s include:
 *    h1, h2, h3, h4, h5, h6, h7, h8, h9,
 *    text1, text2, text3,
 *    bold1, bold2, bold3,
 *    link1, link2, link3,
 *    code1, code2, code3,
 *    box, flex, todoListItem.
 */
{
  type: '<TYPE>',
  props: {
    // Props specific to the <TYPE>.
  },
  recursive: false, // Optionally apply adapter recursively.
}
```

For example, for a link component (layout primitive):

```jsx
{
  type: 'link2',
  props: {
    href: 'https://github.com',
  },
}
```

#### Output

The **output** from the adapter is a JavaScript object that can be passed directly to the target design system component. For example, to adapt your data to [Evergreen](https://evergreen.segment.com/components)'s `Link`:

```jsx
import { Link } from "evergreen-ui";
import { mapToEvergreenProps } from "@react-design-system-adapters/evergreen-ui";

const MyComponent = () => {
  const input = { type: "link2", props: { href: "https://github.com" } };
  const output = mapToEvergreenProps(input);
  return <Link {...output}>Link 400</Link>;
};
```

### Component adapters

`react-design-system-adapters` also offers convenience components that will take the output of props adapters and render the appropriate component. For example:

```jsx
import {
  mapToEvergreenProps,
  EvergreenComponent,
} from "react-design-system-adapters";

const MyComponent = () => {
  const input = {
    type: "link2",
    props: { href: "https://github.com", children: "Link 400" },
  };
  const output = mapToEvergreenProps(input);
  return (
    // Renders 'Link 400'.
    <EvergreenComponent {...output} />
  );
};
```

## Contribute

This repo is still very much in its infancy.

It would be great to add [other design systems](https://github.com/alexpate/awesome-design-systems), including Bootstrap, Material, etc. Please fork and make a pull request! Make sure to document your work a [Storybook](http://storybook.js.org/) story. 😊

All packages are managed by [Lerna](https://github.com/lerna/lerna).

### Adding a package

Have a look at existing packages and follow their structure. In your PR, try to keep the `webpack.config.js` and `package.json` config in your new package similar to existing packages.

## Release

Commit and then:

```
npx lerna bootstrap
npm run release
```
