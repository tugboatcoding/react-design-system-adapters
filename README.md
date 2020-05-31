# react-design-system-adapters

Collection of adapters for React design systems (e.g. [Evergreen](https://evergreen.segment.com/components)). Adapters (JavaScript functions) transform a "standard" JSON to props that React design systems understand.

## Why

The adapters in this repo serve a specific use case. When you want to dynamically choose a design system, you can use `react-design-system-adapters`. It will convert your data into props that the target design system can understand (e.g. [Evergreen](https://evergreen.segment.com/components)).

More generally however, it makes the UI more declarative. By expressing your UI as data (i.e. JSON), you get all the benefits of declarative programming (understandable code, scalable, immutability, etc.). When the UI is defined in this way, adapters will be needed and that is what this repo provides.

## Supported design systems

Design systems for which currently there are adapters:

* [Evergreen](https://evergreen.segment.com/components)

## Usage

Currently, this repo is only available via a git install.

```bash
npm i -S git+https://github.com/tugboatcoding/react-design-systems-adapter.git
```

To import:

```jsx
import { mapToEvergreenProps } from 'react-design-system-adapters';
```

To view examples, open Storybook:

```
npm run storybook
```

![Storybook](https://raw.githubusercontent.com/tugboatcoding/react-design-system-adapters/master/screenshots/storybook.png)

## How it works

`react-design-system-adapters` offers functions (i.e. adapters) that transform your data (input) to props that React design systems can understand (output).

An example:

```jsx
import { Heading } from 'evergreen-ui';
import { mapToEvergreenProps } from 'react-design-system-adapters';

const MyComponent = () => {
  const input = { type: 'heading1' };
  const output = mapToEvergreenProps(input);
  return (
    <Heading {...output}>Heading 900</Heading>
  );
};
```

### Input

The adapters are JavaScript functions. Each function will take an input of a standard shape and transform it to props for the target design system. The schema is:

```jsx
{
  type: '<TYPE>',
  props: {
    // Props specific to the <TYPE>.
  }
}
```

Supported `<TYPE>`s include:
* `h1`
* `h2`
* `h3`
* `h4`
* `h5`
* `h6`
* `h7`
* `h8`
* `h9`
* `text1`
* `text2`
* `text3`
* `bold1`
* `bold2`
* `bold3`
* `link1`
* `link2`
* `link3`
* `code1`
* `code2`
* `code3`
* `box`
* `flex`

### Output

The output from the adapter is a JavaScript object that can be passed directly to the target design system components. For example, to adapt your data to Evergreen's `Link`:

```jsx
import { Link } from 'evergreen-ui';
import { mapToEvergreenProps } from 'react-design-system-adapters';

const MyComponent = () => {
  const input = { type: 'link2' };
  const output = mapToEvergreenProps(input);
  return (
    <Link {...output}>Link 400</Link>
  );
};
```

## Contribute

This repo is still very much in its infancy. It would be great to add [other design systems](https://github.com/alexpate/awesome-design-systems), including Bootstrap, Material, etc. Please fork and make a pull request!
