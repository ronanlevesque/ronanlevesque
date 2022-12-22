/* eslint-disable import/no-commonjs, no-console */

const fs = require('fs');

const fragments = require('./fragments.config');
const helpers = require('./src/helpers');

const selectors = [
  {
    className: 'fsz',
    properties: ['font-size'],
    minMax: [
      [14, 16],
      [16, 18],
      [22, 32],
    ],
  },
  {
    className: 'ggap',
    properties: ['grid-gap'],
    minMax: [[12, 32]],
  },
  {
    className: 'ml',
    properties: ['margin-left'],
    minMax: [[8, 12]],
  },
  {
    className: 'mt',
    properties: ['margin-top'],
    minMax: [
      [12, 32],
      [12, 16],
      [48, 96],
    ],
  },
  {
    className: 'mr',
    properties: ['margin-right'],
    minMax: [[8, 12]],
  },
  {
    className: 'p',
    properties: ['padding'],
    minMax: [
      [8, 12],
      [12, 20],
    ],
  },
  {
    className: 'ph',
    properties: ['padding-left', 'padding-right'],
    minMax: [
      [8, 12],
      [12, 20],
    ],
  },
  {
    className: 'pv',
    properties: ['padding-top', 'padding-bottom'],
    minMax: [[80, 160]],
  },
  {
    className: 'pt',
    properties: ['padding-top'],
    minMax: [
      [12, 32],
      [48, 96],
    ],
  },
  {
    className: 'pb',
    properties: ['padding-bottom'],
    minMax: [
      [20, 40],
      [48, 96],
    ],
  },
  {
    className: 'w',
    properties: ['width'],
    minMax: [
      [18, 24],
      [22, 28],
      [24, 32],
      [200, 260],
    ],
  },
  {
    className: 'h',
    properties: ['height'],
    minMax: [
      [32, 40],
      [48, 64],
    ],
  },
  {
    className: 'maw',
    properties: ['max-width'],
    minMax: [[700, 824]],
  },
];

const styles = selectors
  .map(selector =>
    selector.minMax
      .map(value =>
        helpers.fluidCSS({
          prefix: '.fluid\\:',
          selector: `${selector.className}-${value[0]}-${value[1]}`,
          properties: selector.properties,
          values: {
            min: value[0],
            max: value[1],
          },
          breakpoints: {
            min: fragments.config.breakpoints.xs.replace('px', ''),
            max: fragments.config.breakpoints.lg.replace('px', ''),
          },
        })
      )
      .join('')
  )
  .join('');

fs.writeFile('src/css/fluid.css', styles, err =>
  err
    ? console.log(err)
    : console.log('✅ Fluid CSS classes successfully generated.')
);
