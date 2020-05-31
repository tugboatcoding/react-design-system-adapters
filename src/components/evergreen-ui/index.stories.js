import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Heading, Link, Pane } from 'evergreen-ui';
import {
  mapToEvergreenProps as mapToProps,
  EvergreenComponent,
} from './index';

storiesOf('Evergreen', module)
  .add('Typography', () => {
    return (
      <>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'h1', props: { children: 'Heading 900' } })} />
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'h2' })}>Heading 800</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'h3' })}>Heading 700</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'h4' })}>Heading 600</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'h5' })}>Heading 500</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'h6' })}>Heading 400</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'h7' })}>Heading 300</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'h8' })}>Heading 200</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'h9' })}>Heading 100</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'text1' })}>Text 500</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'text2' })}>Text 400</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'text3' })}>Text 300</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'link1', props: { href: 'https://github.com' } })}>Link 500</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'link2', props: { href: 'https://github.com' } })}>Link 400</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent {...mapToProps({ type: 'link3', props: { href: 'https://github.com' } })}>Link 300</EvergreenComponent>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <Code {...mapToProps({ type: 'code1' })}>Code 500</Code>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <Code {...mapToProps({ type: 'code2' })}>Code 400</Code>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <Code {...mapToProps({ type: 'code3' })}>Code 300</Code>
        </EvergreenComponent>
        <EvergreenComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <EvergreenComponent
            {...mapToProps({
              type: 'orderedList',
              props: {
                children:  [
                  mapToProps({
                    type: 'listItem',
                    props: {
                      children: 'Item',
                    }
                  })
                ],
              },
            })}
          />
        </EvergreenComponent>
      </>
    );
  }).add('Typography (w/ base components)', () => {
    return (
      <>
        <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <Heading {...mapToProps({ type: 'h1', props: { children: 'Heading 900' } })} />
        </Pane>
        <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <Link {...mapToProps({ type: 'link1', props: { href: 'https://github.com' } })}>Link 500</Link>
        </Pane>
        <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <Link {...mapToProps({ type: 'link2', props: { href: 'https://github.com' } })}>Link 400</Link>
        </Pane>
        <Pane {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <Link {...mapToProps({ type: 'link3', props: { href: 'https://github.com' } })}>Link 300</Link>
        </Pane>
      </>
    );
  });
