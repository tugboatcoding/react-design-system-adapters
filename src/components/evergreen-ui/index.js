/**
 * Adapter for Evergreen.
 *
 * DONE: Typography
 *   Heading
 *   Text
 *   Link
 *   Strong
 *   Small
 *   Code
 *   OrderedList
 *   UnorderedList
 *   ListItem
 *
 * DONE: Layout primitives
 *   Pane

 * TODO: Layout primitives
 *   Card
 *
 * TODO: Typography
 *   Paragraph
 *   Pre
 *
 * TODO: Icons
 *   CrossIcon
 *   BanCircleIcon
 *   TickCircleIcon
 *   WarningSignIcon
 *   InfoSignIcon
 *   EditIcon
 *
 * TODO: Buttons and atomic elements
 *   Button
 *   IconButton
 *   BackButton
 *   TextDropdownButton
 *   Tab
 *   SidebarTab
 *   TabNavigation
 *   Badge
 *   Pill
 *   Avatar
 *
 * TODO: Text inputs and file uploading
 *   TextInput
 *   SearchInput
 *   TagInput
 *   Textarea
 *   Autocomplete
 *   Filepicker
 *
 * TODO: Selects and dropdown menus
 *   Select
 *   SelectMenu
 *   Popover
 *   Menu
 *   Checkbox
 *   Radio
 *   RadioGroup
 *   SegmentedControl
 *   Switch
 *
 * TODO: Feedback indidcators
 *   toaster
 *   Alert
 *   InlineAlert
 *   Spinner
 *
 * TODO: Overlays
 *   Dialog
 *   SideSheet
 *   Tooltip
 *   CornerDialog
 *
 * TODO: Tables
 *   Table
 *
 * @see https://evergreen.segment.com/components
 */


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
 * Returns props that Evergreen understands.
 * @param {Object} props Props of standard schema.
 */
const mapToProps = (type, props = {}) => {
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
      return {
        size: mapToSize(type),
      };
    case 'text1':
    case 'text2':
    case 'text3':
    case 'bold1':
    case 'bold2':
    case 'bold3':
      return {
        color: mapToTextColor(props),
        size: mapToSize(type),
      };
    case 'link1':
    case 'link2':
    case 'link3':
      return {
        color: mapToLinkColor(props),
        size: mapToSize(type),
      };
    case 'code1':
    case 'code2':
    case 'code3':
      return {
        appearance: props.appearance,
        size: mapToSize(type),
      };
    case 'box':
    case 'flex':
      return {
        ...mapToFlexProps(props),
        ...mapToPaddingProps(props),
        ...mapToMarginProps(props),
      };
    default:
      return {};
  }
};

const mapToEvergreenProps = ({ type, props }) => {
  return mapToProps(type, props);
};

export default mapToEvergreenProps;
