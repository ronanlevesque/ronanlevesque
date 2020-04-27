/* eslint-disable import/no-commonjs, no-console */

const fs = require('fs');
const helpers = require('./src/helpers');

const minBreakpoint = 500;
const maxBreakpoint = 1200;

const selectors = [
  {
    className: 'fsz',
    properties: ['font-size'],
    minMax: [
      [12, 16],
      [14, 18],
      [18, 32],
    ],
  },
  {
    className: 'ml',
    properties: ['margin-left'],
    minMax: [[4, 12]],
  },
  {
    className: 'mt',
    properties: ['margin-top'],
    minMax: [
      [4, 12],
      [48, 120],
    ],
  },
  {
    className: 'mr',
    properties: ['margin-right'],
    minMax: [[8, 12]],
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
    minMax: [
      [12, 16],
      [80, 160],
    ],
  },
  {
    className: 'pt',
    properties: ['padding-top'],
    minMax: [[48, 120]],
  },
  {
    className: 'pb',
    properties: ['padding-bottom'],
    minMax: [[24, 48]],
  },
  {
    className: 'w',
    properties: ['width'],
    minMax: [
      [16, 24],
      [20, 28],
      [24, 32],
      [180, 260],
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
        helpers.fluidCSS(
          'fluid',
          `${selector.className}-${value[0]}-${value[1]}`,
          selector.properties,
          value[0],
          value[1],
          minBreakpoint,
          maxBreakpoint
        )
      )
      .join('')
  )
  .join('');

fs.writeFile('src/css/fluid.css', styles, err => console.log(err));
