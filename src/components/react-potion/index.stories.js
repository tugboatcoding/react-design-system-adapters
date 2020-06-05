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
  })
  .add('Cover', () => {
    return (
      <PotionComponent
        {...mapToProps({
          type: 'box',
          props: {
            children: [
              {
                type: 'cover',
                props: {
                  src: 'https://images.unsplash.com/photo-1589802787293-c7009d1fce33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
              },
              {
                type: 'flex',
                props: {
                  justifyContent: 'center',
                  children: [{
                    type: 'box',
                    props: {
                      paddingX: 92,
                      width: '100%',
                      maxWidth: '900px',
                      children: [
                        {
                          type: 'pageIcon',
                          props: {
                            children: '🍕'
                          },
                        },
                        {
                          type: 'h1',
                          props: {
                            children: 'Pizza!'
                          },
                        },
                        {
                          type: 'text2',
                          props: {
                            children: 'Salami, pepperoni, Hawaaian, all the pizzas.'
                          },
                        },
                      ],
                    },
                  }],
                },
              },
            ],
          },
          recursive: true,
        })}
      />
    );
  });
