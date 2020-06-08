import { css } from '@emotion/core';
import * as breakpoints from 'constants/breakpoints';
import * as colors from 'constants/colors';
import * as fonts from 'constants/fonts';
import { fluidCSS } from 'helpers';

const generateFluidCSS = (selector, properties, [minValue, maxValue]) =>
  fluidCSS({
    selector,
    properties,
    values: {
      min: minValue,
      max: maxValue,
    },
    breakpoints: {
      min: breakpoints.XS.replace('px', ''),
      max: breakpoints.LG.replace('px', ''),
    },
  });

export default {
  root: css`
    * {
      margin-top: 0;
      margin-bottom: 0;
    }
    ${generateFluidCSS('> * + *', ['margin-top'], [16, 18])}
    > *:last-child {
      margin-bottom: 0;
    }
    h2 {
      font-weight: normal;
      font-family: ${fonts.LIBRE_BASKERVILLE};
    }
    h2,
    h3 {
      color: ${colors.ZIRCON};
    }
    h3 {
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
    ${generateFluidCSS('h2, h3', ['margin-top'], [36, 48])}
    ${generateFluidCSS('h2', ['font-size'], [18, 24])}
    ${generateFluidCSS('h3', ['font-size'], [14, 16])}
    ${generateFluidCSS('p, li, figure, div', ['font-size'], [16, 18])}
    p,
    li,
    figure {
      ${generateFluidCSS('code, kbd', ['font-size'], [14, 16])}
      code,
      kbd {
        padding: 0.2em 0.3em;
        background-color: ${colors.BUNKER};
        border-radius: 4px;
      }
    }
    ul,
    ol {
      padding: 0;
      list-style: none;
      li:before {
        color: ${colors.ZIRCON};
        display: inline-block;
      }
    }
    ul {
      li {
        padding-left: 1em;
        &:before {
          content: '•';
          margin-left: -1em;
          width: 1em;
          font-weight: bold;
        }
      }
    }
    ol {
      counter-reset: numbers;
      li {
        padding-left: 1.5em;
        counter-increment: numbers;
        &:before {
          content: counter(numbers) '.';
          margin-left: -1.5em;
          width: 1.5em;
        }
      }
    }
    a,
    figcaption {
      color: ${colors.LINK_WATER};
    }
    a:hover,
    a:focus {
      color: ${colors.ZIRCON};
    }
    ${generateFluidCSS(
      '> pre, > figure, > blockquote, > .info, > p .gatsby-resp-image-wrapper, > div',
      ['margin-top', 'margin-bottom'],
      [24, 27]
    )}
    ${generateFluidCSS('pre, figcaption', ['font-size'], [14, 16])}
    pre {
      background-color: ${colors.BUNKER};
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      overflow: auto;
      code {
        display: block;
        padding: 1em;
      }
    }
    code,
    kbd {
      font-family: ${fonts.MONO};
      color: ${colors.LINK_WATER};
    }
    video {
      border: 2px solid ${colors.SAN_JUAN};
    }
    figure {
      margin-left: 0;
      margin-right: 0;
    }
    figcaption {
      margin-left: auto;
      margin-right: auto;
      margin-top: 0.8em;
      width: 90%;
      font-family: ${fonts.LIBRE_BASKERVILLE};
      font-style: italic;
      text-align: center;
    }
    blockquote {
      font-family: ${fonts.LIBRE_BASKERVILLE};
      font-style: italic;
    }
    blockquote,
    .info {
      margin-left: 0;
      margin-right: 0;
      padding-left: 1.2em;
      font-style: italic;
      border-left: 2px solid ${colors.SAN_JUAN};
    }
    blockquote,
    .gatsby-highlight,
    .info {
      ${generateFluidCSS('&:before', ['font-size'], [12, 14])}
      &:before {
        display: block;
        text-transform: uppercase;
        font-family: ${fonts.ROBOTO};
        font-style: normal;
        letter-spacing: 0.14em;
      }
    }
    blockquote {
      &:before {
        content: 'Quote';
        margin-bottom: 0.8em;
        color: ${colors.ZIRCON};
      }
      p {
        &:before {
          content: '“';
        }
        &:after {
          content: '”';
        }
      }
    }
    ${generateFluidCSS(
      '.gatsby-highlight:before',
      ['padding-left', 'padding-right'],
      [12, 16]
    )}
    .gatsby-highlight:before {
      content: attr(data-language);
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      color: ${colors.BLUE_BAYOUX};
      background-color: ${colors.BUNKER_DARKER};
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    .info {
      code {
        font-style: normal;
      }
      &:before {
        content: 'Information';
        margin-bottom: 0.8em;
        color: ${colors.ZIRCON};
      }
    }
  `,
};
