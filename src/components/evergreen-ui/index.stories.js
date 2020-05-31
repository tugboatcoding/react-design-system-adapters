import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Heading, Link, Pane, Text } from 'evergreen-ui';
import mapToProps from './index';

storiesOf('Evergreen', module)
  .add('Typography', () => (
    <>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Heading {...mapToProps({ type: 'h1' })}>Heading 900</Heading>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Heading {...mapToProps({ type: 'h2' })}>Heading 800</Heading>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Heading {...mapToProps({ type: 'h3' })}>Heading 700</Heading>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Heading {...mapToProps({ type: 'h4' })}>Heading 600</Heading>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Heading {...mapToProps({ type: 'h5' })}>Heading 500</Heading>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Heading {...mapToProps({ type: 'h6' })}>Heading 400</Heading>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Heading {...mapToProps({ type: 'h7' })}>Heading 300</Heading>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Heading {...mapToProps({ type: 'h8' })}>Heading 200</Heading>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Heading {...mapToProps({ type: 'h9' })}>Heading 100</Heading>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Text {...mapToProps({ type: 'text1' })}>Text 500</Text>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Text {...mapToProps({ type: 'text2' })}>Text 400</Text>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Text {...mapToProps({ type: 'text3' })}>Text 300</Text>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Link {...mapToProps({ type: 'link1' })}>Link 500</Link>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Link {...mapToProps({ type: 'link2' })}>Link 400</Link>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Link {...mapToProps({ type: 'link3' })}>Link 300</Link>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Code {...mapToProps({ type: 'code1' })}>Code 500</Code>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Code {...mapToProps({ type: 'code2' })}>Code 400</Code>
      </Pane>
      <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
        <Code {...mapToProps({ type: 'code3' })}>Code 300</Code>
      </Pane>
    </>
  ));
