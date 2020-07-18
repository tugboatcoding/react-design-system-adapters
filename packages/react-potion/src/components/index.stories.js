import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'markdown-to-jsx';
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
          <PotionComponent {...mapToProps({ type: 'link2', props: { className: 'underline', href: 'https://github.com' } })}>Link 400 (underline)</PotionComponent>
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
        <PotionComponent {...mapToProps({ type: 'box', props: { mt: 16 } })}>
          <PotionComponent
            {...mapToProps({
              type: 'text2',
              props: {
                children: '[This is a link](https://www.google.com)',
              }
            })}
            renderer={(v) => (typeof v === 'string' ? <Markdown>{v}</Markdown> : v)}
          />
        </PotionComponent>
      </>
    );
  })
  .add('Cover', () => {
    return (
      <PotionComponent
        {...mapToProps({
          recursive: true,
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
  })
  .add('Callout', () => {
    const mappedProps = mapToProps({
      type: 'callout',
      props: {
        children: [
          {
            type: 'flex',
            props: {
              alignItems: 'center',
              children: [
                {
                  type: 'box',
                  props: {
                    marginRight: '12px',
                    alignItems: 'center',
                    children: [
                      {
                        type: 'text2',
                        props: {
                          children: '\ud83d\udca1'
                        }
                      }
                    ]
                  }
                },
                {
                  type: 'text2',
                  props: {
                    children: 'This page was made with [Notion](http://notion.so)'
                  }
                }
              ]
            }
          }
        ]
      },
      recursive: true,
    });
    return (
      <PotionComponent
        {...mappedProps}
      />
    );
  })
  .add('Typeform', () => {
    const mappedProps = mapToProps({
      type: 'box',
      props: {
        children: [
          {
            type: 'typeform',
            props: {
              src: 'https://form.typeform.com/to/ABC',
            },
          },
        ],
      },
      recursive: true,
    });
    return (
      <PotionComponent
        {...mappedProps}
      />
    );
  })
  .add('Collection', () => {
    const mappedProps = mapToProps({
      recursive: true,
      "type": "box",
      "props": {
        "marginBottom": "72px",
        "children": [
          {
            "type": "flex",
            "props": {
              "justifyContent": "center",
              "children": [
                {
                  "type": "box",
                  "props": {
                    "width": "100%",
                    "maxWidth": "900px",
                    "paddingX": [
                      "24px",
                      "24px",
                      "24px",
                      "92px"
                    ],
                    "children": [
                      {
                        "type": "flex",
                        "props": {
                          "alignItems": "center",
                          "minHeight": "30px",
                          "marginTop": "24px",
                          "marginBottom": "12px",
                          "children": [
                            {
                              "type": "h1",
                              "props": {
                                "children": [
                                  {
                                    "type": "box",
                                    "props": {
                                      "className": "underline",
                                      "children": "Pubs & bars in London"
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "collection",
                        "props": {
                          "name": "Pubs & bars in London",
                          "views": [
                            {
                              "id": "5a3fbb4d-4dd0-4acd-a565-d8a02a5afa4a",
                              "name": "Default View",
                              "type": "table"
                            },
                            {
                              "id": "8b0f407b-f9c4-4e6f-8f8e-4c5fe5bd4424",
                              "name": "Table",
                              "type": "table"
                            },
                            {
                              "id": "e4e4d82f-40b8-4fd9-b4e7-50efdc0c69d3",
                              "name": "Gallery",
                              "type": "gallery"
                            },
                            {
                              "id": "a0df23fb-402b-4bac-9f20-a461625c6344",
                              "name": "List",
                              "type": "list"
                            },
                            {
                              "id": "451010f3-dfa6-4b3d-99dc-fd07a9284916",
                              "name": "Board",
                              "type": "board"
                            }
                          ],
                          "cols": [
                            {
                              "value": "Name",
                              "type": "title"
                            },
                            {
                              "value": "Type",
                              "type": "text"
                            },
                            {
                              "value": "Location",
                              "type": "multi_select"
                            },
                            {
                              "value": "Good for",
                              "type": "multi_select"
                            },
                            {
                              "value": "Food?",
                              "type": "text"
                            },
                            {
                              "value": "Must reserve?",
                              "type": "text"
                            },
                            {
                              "value": "Busy?",
                              "type": "text"
                            },
                            {
                              "value": "Notes",
                              "type": "text"
                            },
                            {
                              "value": "URL",
                              "type": "text"
                            }
                          ],
                          "rows": [
                            [
                              {
                                "value": "Dean Swift",
                                "type": "title"
                              },
                              {
                                "value": "Pub 🍺",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "a4647bf6-3d0f-45dd-af8f-731990913739",
                                    "color": "purple",
                                    "value": "London Bridge"
                                  },
                                  {
                                    "id": "7c5161d9-ddee-4bdf-8582-2a511fc799ff",
                                    "color": "pink",
                                    "value": "Tower Bridge"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "2df5670a-c675-4850-96aa-fd7c0560a689",
                                    "color": "brown",
                                    "value": "Pub food"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "🍔🐟🍟",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👤",
                                "type": "text"
                              },
                              {
                                "value": "If you want craft beers, Cloudwater is on the \"beer mile\" and serves sweet, hoppy IPAs and coffee stouts straight from the brewery",
                                "type": "text"
                              },
                              {
                                "value": "[https://cloudwaterbrew.co/location-enid-st](https://cloudwaterbrew.co/location-enid-st)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "Cloudwater",
                                "type": "title"
                              },
                              {
                                "value": "Taproom 🍻",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "a4647bf6-3d0f-45dd-af8f-731990913739",
                                    "color": "purple",
                                    "value": "London Bridge"
                                  },
                                  {
                                    "id": "7c5161d9-ddee-4bdf-8582-2a511fc799ff",
                                    "color": "pink",
                                    "value": "Tower Bridge"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "4544d2ab-57ce-4ff2-b7a2-d016ff5fde69",
                                    "color": "orange",
                                    "value": "Craft beer"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👥",
                                "type": "text"
                              },
                              {
                                "value": "Traditional pub food with old man ales (red ales). Can reserve",
                                "type": "text"
                              },
                              {
                                "value": "[http://thedeanswift.com/](http://thedeanswift.com/)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "The Garrison",
                                "type": "title"
                              },
                              {
                                "value": "Gastropub 🍴",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "a4647bf6-3d0f-45dd-af8f-731990913739",
                                    "color": "purple",
                                    "value": "London Bridge"
                                  },
                                  {
                                    "id": "7c5161d9-ddee-4bdf-8582-2a511fc799ff",
                                    "color": "pink",
                                    "value": "Tower Bridge"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "06441be2-dd02-4290-9564-5303e352c1ed",
                                    "color": "green",
                                    "value": "Gourmet"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "🥦🐟🥩",
                                "type": "text"
                              },
                              {
                                "value": "🗓",
                                "type": "text"
                              },
                              {
                                "value": "👥👤",
                                "type": "text"
                              },
                              {
                                "value": "Gastropub/gourmet dining. Reservation needed",
                                "type": "text"
                              },
                              {
                                "value": "[http://www.thegarrison.co.uk/](http://www.thegarrison.co.uk/)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "The Horniman at The Hay's Galleria",
                                "type": "title"
                              },
                              {
                                "value": "Pub 🍺",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "a4647bf6-3d0f-45dd-af8f-731990913739",
                                    "color": "purple",
                                    "value": "London Bridge"
                                  },
                                  {
                                    "id": "7c5161d9-ddee-4bdf-8582-2a511fc799ff",
                                    "color": "pink",
                                    "value": "Tower Bridge"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "807bc036-541e-4e7c-b5d6-1878f886366a",
                                    "color": "red",
                                    "value": "Scenic"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "🍔",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👥👤",
                                "type": "text"
                              },
                              {
                                "value": "Along the river, with a great view of Tower Bridge. More a spot for drinking a pint on a sunny day with a good view",
                                "type": "text"
                              },
                              {
                                "value": "[https://www.nicholsonspubs.co.uk/restaurants/london/thehornimanathayslondonbridge](https://www.nicholsonspubs.co.uk/restaurants/london/thehornimanathayslondonbridge)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "The Blue Anchor",
                                "type": "title"
                              },
                              {
                                "value": "Pub 🍺",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "6b695a45-d5f3-44f8-8e05-736353416fff",
                                    "color": "default",
                                    "value": "Hammersmith"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "807bc036-541e-4e7c-b5d6-1878f886366a",
                                    "color": "red",
                                    "value": "Scenic"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "🍔🐟🍟",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👥👥",
                                "type": "text"
                              },
                              {
                                "value": "Along the river, slightly further out of town, this pub is one of the busy residential pubs in Hammersmith. Lovely on a sunny day",
                                "type": "text"
                              },
                              {
                                "value": "[https://www.blueanchorlondon.com/](https://www.blueanchorlondon.com/)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "The Westminster Arms",
                                "type": "title"
                              },
                              {
                                "value": "Pub 🍺",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "1479b097-fd83-422c-bdbc-245102582280",
                                    "color": "gray",
                                    "value": "Westminster"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "fb5ab8e9-3ff4-47d2-a9ee-52d43402023a",
                                    "color": "gray",
                                    "value": "General"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👥👥",
                                "type": "text"
                              },
                              {
                                "value": "Where politicians go and get booze",
                                "type": "text"
                              },
                              {
                                "value": "[https://www.westminsterarms.co.uk/](https://www.westminsterarms.co.uk/)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "The Ned",
                                "type": "title"
                              },
                              {
                                "value": "Bar 🍺🍷",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "93baad10-b105-4af5-9478-cb914ab8c271",
                                    "color": "purple",
                                    "value": "Bank"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "4264834d-b736-4f2d-acce-c3e130f32c0d",
                                    "color": "blue",
                                    "value": "Dining"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "🍔🐟🍟",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👥",
                                "type": "text"
                              },
                              {
                                "value": "A former bank turned into bars and restaurants. Very ornate interior, with emerald green leather seating, and live band occasionally playing live music in the middle of The City",
                                "type": "text"
                              },
                              {
                                "value": "[https://www.thened.com/restaurants](https://www.thened.com/restaurants)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "Royal Oak",
                                "type": "title"
                              },
                              {
                                "value": "Pub 🍺",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "231397b8-4b11-4264-9d90-808db9521d1f",
                                    "color": "yellow",
                                    "value": "Borough"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "2df5670a-c675-4850-96aa-fd7c0560a689",
                                    "color": "brown",
                                    "value": "Pub food"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "🍔🐟🍟",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👤",
                                "type": "text"
                              },
                              {
                                "value": "Traditional pub with a good scotch egg. Can reserve",
                                "type": "text"
                              },
                              {
                                "value": "[https://royaloaklondon.co.uk/](https://royaloaklondon.co.uk/)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "The Windsor Castle",
                                "type": "title"
                              },
                              {
                                "value": "Pub 🍺",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "544f376b-1397-47c3-bc0c-3a23aec54cdc",
                                    "color": "blue",
                                    "value": "High Street Kensington"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "2df5670a-c675-4850-96aa-fd7c0560a689",
                                    "color": "brown",
                                    "value": "Pub food"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "🍔🐟🍟",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👥",
                                "type": "text"
                              },
                              {
                                "value": "Traditional pub with good dining, tucked away in Kensington. Serves old man ales (red ales)",
                                "type": "text"
                              },
                              {
                                "value": "[https://www.thewindsorcastlekensington.co.uk/](https://www.thewindsorcastlekensington.co.uk/?utm_source=google&utm_medium=organic&utm_campaign=gmb)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "Mr. Fogg's Residence",
                                "type": "title"
                              },
                              {
                                "value": "Cocktail bar 🍺🍷",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "0216517d-fc5f-4835-96cd-d7c12331054e",
                                    "color": "green",
                                    "value": "Piccadilly"
                                  },
                                  {
                                    "id": "4e0b2ff3-aeeb-4ff4-81de-f84f628ee0cb",
                                    "color": "red",
                                    "value": "Green Park"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "98e4252d-e2e7-4293-8180-4ba121359d3d",
                                    "color": "pink",
                                    "value": "Cocktails"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "🥪",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👥👤",
                                "type": "text"
                              },
                              {
                                "value": "Lovely bar themed after and inspired by Mr. Fogg's 80 days around the world. Expect a charming experience. Try other Mr. Fogg's bars too (e.g. Gin Parlour, Tavern or House of Botanicals). Can reserve",
                                "type": "text"
                              },
                              {
                                "value": "[https://www.mr-foggs.com/mr-foggs-residence/](https://www.mr-foggs.com/mr-foggs-residence/)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "Gordon's wine bar",
                                "type": "title"
                              },
                              {
                                "value": "Wine bar 🍷",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "80ccf65e-3e03-4c30-b652-507b847a9f96",
                                    "color": "brown",
                                    "value": "Embankment"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "e0826920-d11e-49a6-8c76-7e9a228a4c69",
                                    "color": "blue",
                                    "value": "Wine"
                                  },
                                  {
                                    "id": "77efece0-40e6-4014-be5c-5ecacafff518",
                                    "color": "purple",
                                    "value": "Cheese"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "🧀",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👥👤",
                                "type": "text"
                              },
                              {
                                "value": "Dark, under archways, drink wine in a candle lit, dungeon-like place. Recommend a cheese board too",
                                "type": "text"
                              },
                              {
                                "value": "[https://gordonswinebar.com/gallery/](https://gordonswinebar.com/gallery/)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "The Builders Arms",
                                "type": "title"
                              },
                              {
                                "value": "Pub 🍺",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "544f376b-1397-47c3-bc0c-3a23aec54cdc",
                                    "color": "blue",
                                    "value": "High Street Kensington"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "ef760775-d9b8-4ef8-9b14-9db540b939c2",
                                    "color": "red",
                                    "value": "Burger"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "🍔",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👥",
                                "type": "text"
                              },
                              {
                                "value": "Quaint, pretty, little pub in Kensington. Can reserve",
                                "type": "text"
                              },
                              {
                                "value": "[https://www.thebuildersarmskensington.co.u](https://www.thebuildersarmskensington.co.u/)",
                                "type": "text"
                              }
                            ],
                            [
                              {
                                "value": "The Princess Arms",
                                "type": "title"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": [
                                  {
                                    "id": "3650bb3e-8e66-42f9-9a07-6018da0a86ea",
                                    "color": "orange",
                                    "value": "Shoreditch"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": [
                                  {
                                    "id": "06441be2-dd02-4290-9564-5303e352c1ed",
                                    "color": "green",
                                    "value": "Gourmet"
                                  }
                                ],
                                "type": "multi_select"
                              },
                              {
                                "value": "🥦🐟🥩",
                                "type": "text"
                              },
                              {
                                "value": "",
                                "type": "text"
                              },
                              {
                                "value": "👥",
                                "type": "text"
                              },
                              {
                                "value": "Fairly new pub serving gourmet food",
                                "type": "text"
                              },
                              {
                                "value": "[https://theprincessofshoreditch.com/](https://theprincessofshoreditch.com/)",
                                "type": "text"
                              }
                            ]
                          ],
                          "children": []
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    });
    return (
      <PotionComponent
        renderer={(v) => (typeof v === 'string' ? <Markdown>{v}</Markdown> : v)}
        {...mappedProps}
      />
    );
  });
