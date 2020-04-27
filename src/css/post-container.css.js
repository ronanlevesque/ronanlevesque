import { css } from '@emotion/core';
import * as colors from 'constants/colors';
import * as fonts from 'constants/fonts';
import { fluidCSS } from 'helpers';

const generateFluidCSS = (selector, properties, minValue, maxValue) =>
  fluidCSS('', selector, properties, minValue, maxValue, 500, 1200);

export default {
  root: css`
    * {
      margin-top: 0;
      margin-bottom: 0;
    }
    > * + * {
      margin-top: 1em;
    }
    *:last-child {
      margin-bottom: 0;
    }
    h2,
    h3 {
      margin-top: 2em;
      font-family: ${fonts.LIBRE_BASKERVILLE};
      font-weight: normal;
      color: ${colors.ZIRCON};
    }
    ${generateFluidCSS('h2', ['font-size'], 16, 24)}
    ${generateFluidCSS(
      'h3, p, li, figure',
      ['font-size'],
      14,
      18
    )}
    p,
    li,
    figure {
      ${generateFluidCSS('code, kbd', ['font-size'], 12, 16)}
      code,
      kbd {
        padding: 0.1em 0.3em;
        background-color: ${colors.BUNKER};
        border-radius: 2px;
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
    pre,
    figure,
    blockquote,
    .info,
    p .gatsby-resp-image-wrapper {
      margin-top: 1.5em;
      margin-bottom: 1.5em;
    }
    ${generateFluidCSS('pre, figcaption', ['font-size'], 12, 16)}
    pre {
      background-color: ${colors.BUNKER};
      border-radius: 4px;
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
      padding-left: 1.5em;
      font-style: italic;
      border-left: 2px solid ${colors.SAN_JUAN};
    }
    pre,
    blockquote,
    .info {
      ${generateFluidCSS('&:before', ['font-size'], 10, 14)}
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
    ${generateFluidCSS('pre:before', ['padding-left', 'padding-right'], 12, 16)}
    pre:before {
      content: attr(class);
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
