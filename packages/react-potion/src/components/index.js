import React from 'react';
import {
  Box,
  Callout,
  Caption,
  Checkbox,
  Code,
  Collection,
  Cover,
  Divider,
  Flex,
  Heading,
  Iframe,
  Image,
  Link,
  ListItem,
  OrderedList,
  PageIcon,
  Quote,
  Strong,
  Text,
  Toggle,
  Typeform,
  UnorderedList,
} from 'react-potion';
import { omitNil } from '../lib/object';

// FIXME: react-potion's Box and Flex theme seems to reset itself to Rebass defaults.
const theme = {
  breakpoints: [
    '414px',
    '768px',
    '1024px',
    '1280px',
    '1920px',
  ],
  space: [],
};

const mapToSize = (type) => {
  switch(type) {
    case 'h1':
      return 900;
    case 'h2':
      return 800;
    case 'h3':
      return 700;
    case 'h4':
      return 600;
    case 'h5':
    case 'text1':
    case 'link1':
    case 'bold1':
    case 'code1':
      return 500;
    case 'h6':
    case 'text2':
    case 'link2':
    case 'bold2':
    case 'code2':
      return 400;
    case 'h7':
    case 'text3':
    case 'link3':
    case 'bold3':
    case 'code3':
      return 300;
    case 'h8':
      return 200;
    case 'h9':
      return 100;
    default:
      // Text has default size of 400.
      return 400;
  }
};

const mapToTextColor = (props) => {
  switch(props.color) {
    case 'muted':
      return 'muted';
    default:
      return 'default';
  }
};

const mapToLinkColor = (props) => {
  switch(props.color) {
    case 'primary':
      return 'default';
    case 'secondary':
      return 'green';
    case 'tertiary':
      return 'blue';
    default:
      return 'neutral';
  }
};

const mapToFlexProps = (props) => {
  return {
    display: 'flex',
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
  };
};

const mapToPaddingProps = (props) => {
  const {
    p,
    padding,
    px,
    paddingX,
    py,
    paddingY,
    pt,
    paddingTop,
    pr,
    paddingRight,
    pb,
    paddingBottom,
    pl,
    paddingLeft,
  } = props;
  return {
    padding: p || padding,
    paddingX: px || paddingX,
    paddingY: py || paddingY,
    paddingTop: pt || paddingTop,
    paddingRight: pr || paddingRight,
    paddingBottom: pb || paddingBottom,
    paddingLeft: pl || paddingLeft,
  };
};

const mapToMarginProps = (props) => {
  const {
    m,
    margin,
    mx,
    marginX,
    my,
    marginY,
    mt,
    marginTop,
    mr,
    marginRight,
    mb,
    marginBottom,
    ml,
    marginLeft,
  } = props;
  return {
    margin: m || margin,
    marginX: mx || marginX,
    marginY: my || marginY,
    marginTop: mt || marginTop,
    marginRight: mr || marginRight,
    marginBottom: mb || marginBottom,
    marginLeft: ml || marginLeft,
  };
};

/**
 * Returns props that Potion understands.
 *
 * @param {Object} props Props of standard schema.
 */
const mapToProps = (type, props = {}) => {
  let result = {}

  switch(type) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
    case 'h7':
    case 'h8':
    case 'h9':
      result = {
        size: mapToSize(type),
        children: props.children,
      };
      break;
    case 'text1':
    case 'text2':
    case 'text3':
    case 'bold1':
    case 'bold2':
    case 'bold3':
      result = {
        color: mapToTextColor(props),
        size: mapToSize(type),
        children: props.children,
      };
      break;
    case 'link1':
    case 'link2':
    case 'link3':
      result = {
        href: props.href,
        color: mapToLinkColor(props),
        size: mapToSize(type),
        children: props.children,
      };
      break;
    case 'code1':
    case 'code2':
    case 'code3':
      result = {
        appearance: props.appearance,
        size: mapToSize(type),
        children: props.children,
      };
      break;
    case 'box':
    case 'flex':
      result = {
        ...(type === 'box' ? {} : mapToFlexProps(props)),
        ...mapToPaddingProps(props),
        ...mapToMarginProps(props),
        width: props.width,
        maxWidth: props.maxWidth,
        minHeight: props.minHeight,
        children: props.children,
      };
      break;
    case 'todoListItem':
      result = {
        disabled: true,
        checked: props.checked,
        label: props.label,
        children: props.children,
      };
      break;
    case 'collection':
      result = {
        name: props.name,
        views: props.views,
        cols: props.cols,
        rows: props.rows,
      };
      break;
    case 'toggle':
      result = {
        label: props.label,
        children: props.children,
      };
      break;
    default:
      result = props;
  }
  return omitNil({
    _type: type,
    className: props.className,
    ...result
  });
};

/**
 * Map type and props to props that Potion understands.
 *
 * @param {String} type       Type of component (h1, body2, link2, etc.)
 * @param {String} props      Props component
 * @param {String} recursive  Recursively apply mapping to children.
 */
export const mapToPotionProps = ({ type, props, recursive = false }) => {
  if (recursive) {
    return {
      ...mapToProps(type, props),
      children: Array.isArray(props.children)
        ? props.children.map((child) => mapToPotionProps({ ...child, recursive }))
        : props.children,
    };
  }
  else {
    return mapToProps(type, props);
  }
};

export const PotionComponent = ({ _type, renderer = (v) => v, ...props }) => {
  // Recursively apply Potion to children.
  let newProps;
  if (_type === 'collection') {
    newProps = {
      ...props,
      rows: props.rows.map((row) => row.map((cell) => {
        if (cell.type === 'text') {
          return {
            ...cell,
            value: renderer(cell.value),
          };
        }
        return cell;
      })),
    };
  } else if (_type === 'toggle') {
    newProps = {
      ...props,
      label: <PotionComponent renderer={renderer} {...mapToProps(_type, props.label)} />,
      children: Array.isArray(props.children)
        ? props.children.map((child, idx) => (
          <PotionComponent key={idx} renderer={renderer} {...child} />
        ))
        : renderer(props.children)
    };
  }
  else {
    newProps = {
      ...props,
      children: Array.isArray(props.children)
        ? props.children.map((child, idx) => (
          <PotionComponent key={idx} renderer={renderer} {...child} />
        ))
        : renderer(props.children)
    };
  }

  return (
    <>
      {_type === 'h1' && <Heading {...newProps} />}
      {_type === 'h2' && <Heading {...newProps} />}
      {_type === 'h3' && <Heading {...newProps} />}
      {_type === 'h4' && <Heading {...newProps} />}
      {_type === 'h5' && <Heading {...newProps} />}
      {_type === 'h6' && <Heading {...newProps} />}
      {_type === 'h7' && <Heading {...newProps} />}
      {_type === 'h8' && <Heading {...newProps} />}
      {_type === 'h9' && <Heading {...newProps} />}
      {_type === 'text1' && <Text {...newProps} />}
      {_type === 'text2' && <Text {...newProps} />}
      {_type === 'text3' && <Text {...newProps} />}
      {_type === 'bold1' && <Strong {...newProps} />}
      {_type === 'bold2' && <Strong {...newProps} />}
      {_type === 'bold3' && <Strong {...newProps} />}
      {_type === 'callout' && <Callout {...newProps} />}
      {_type === 'quote' && <Quote {...newProps} />}
      {_type === 'code' && <Code {...newProps} />}
      {_type === 'todoList' && <Box theme={theme} {...newProps} />}
      {_type === 'toggle' && <Toggle {...newProps} />}
      {_type === 'link1' && <Link {...newProps} />}
      {_type === 'link2' && <Link {...newProps} />}
      {_type === 'link3' && <Link {...newProps} />}
      {_type === 'image' && <Image {...newProps} />}
      {_type === 'cover' && <Cover {...newProps} />}
      {_type === 'pageIcon' && <PageIcon {...newProps} />}
      {_type === 'divider' && <Divider {...newProps} />}
      {_type === 'collection' && <Collection {...newProps} />}
      {_type === 'caption' && <Caption {...newProps} />}
      {_type === 'box' && (
        <Box theme={theme} {...newProps} />
      )}
      {_type === 'flex' && (
        <Flex theme={theme} {...newProps} />
      )}
      {_type === 'columnList' && (
        <Flex theme={theme} {...newProps} />
      )}
      {_type === 'column' && (
        <Box theme={theme} {...newProps} />
      )}
      {_type === 'orderedList' && (
        <OrderedList {...newProps} />
      )}
      {_type === 'unorderedList' && (
        <UnorderedList {...newProps} />
      )}
      {_type === 'listItem' && (
        <ListItem {...newProps} />
      )}
      {_type === 'todoListItem' && (
        <Checkbox {...newProps} />
      )}
      {['framer', 'iframe', 'tweet', 'gist', 'drive', 'figma', 'loom', 'codepen', 'maps', 'invision', 'video', 'embed'].includes(_type) && (
        <Iframe {...newProps} />
      )}
      {['typeform'].includes(_type) && (
        <Typeform {...newProps} />
      )}
    </>
  );
};
