import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  mapToPotionProps as mapToProps,
  PotionComponent,
} from './index';

storiesOf('Potion', module)
  .add('Typography', () => {
    return (
      <>
        <PotionComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <PotionComponent {...mapToProps({ type: 'h1', props: { children: 'Heading 900' } })} />
        </PotionComponent>
        <PotionComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <PotionComponent {...mapToProps({ type: 'h2' })}>Heading 800</PotionComponent>
        </PotionComponent>
        <PotionComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <PotionComponent {...mapToProps({ type: 'h3' })}>Heading 700</PotionComponent>
        </PotionComponent>
        <PotionComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <PotionComponent {...mapToProps({ type: 'h4' })}>Heading 600</PotionComponent>
        </PotionComponent>
        <PotionComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <PotionComponent {...mapToProps({ type: 'text2' })}>Text 400</PotionComponent>
        </PotionComponent>
        <PotionComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <PotionComponent {...mapToProps({ type: 'link2', props: { href: 'https://github.com' } })}>Link 400</PotionComponent>
        </PotionComponent>
        <PotionComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <PotionComponent
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
        </PotionComponent>
      </>
    );
  });
