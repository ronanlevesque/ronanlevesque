import { css } from '@emotion/core';
import * as breakpoints from 'constants/breakpoints';
import * as colors from 'constants/colors';
import * as fonts from 'constants/fonts';
import { pxToRem } from 'helpers';

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
    h2 {
      font-size: ${pxToRem(16)};
      @media (min-width: ${breakpoints.MD}) {
        font-size: ${pxToRem(20)};
      }
      @media (min-width: ${breakpoints.LG}) {
        font-size: ${pxToRem(24)};
      }
    }
    h3 {
      font-size: ${pxToRem(14)};
      @media (min-width: ${breakpoints.MD}) {
        font-size: ${pxToRem(16)};
      }
      @media (min-width: ${breakpoints.LG}) {
        font-size: ${pxToRem(18)};
      }
    }
    p,
    li,
    figure {
      font-size: ${pxToRem(14)};
      @media (min-width: ${breakpoints.MD}) {
        font-size: ${pxToRem(16)};
      }
      @media (min-width: ${breakpoints.LG}) {
        font-size: ${pxToRem(18)};
      }
      code,
      kbd {
        padding: 0.1em 0.3em;
        font-size: ${pxToRem(12)};
        background-color: ${colors.BUNKER};
        border-radius: 2px;
        @media (min-width: ${breakpoints.MD}) {
          font-size: ${pxToRem(14)};
        }
        @media (min-width: ${breakpoints.LG}) {
          font-size: ${pxToRem(16)};
        }
      }
    }
    ul,
    ol {
      padding: 0;
      list-style: none;
    }
    ul {
      li {
        padding-left: 1em;
        position: relative;
        &:before {
          content: '•';
          position: absolute;
          left: 0;
          color: ${colors.LINK_WATER};
        }
      }
    }
    ol {
      counter-reset: numbers;
      li {
        padding-left: 1.5em;
        position: relative;
        counter-increment: numbers;
        &:before {
          margin-right: 0.5em;
          content: counter(numbers) '.';
          position: absolute;
          left: 0;
          color: ${colors.LINK_WATER};
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
    pre {
      padding: 1em;
      font-size: ${pxToRem(12)};
      background-color: ${colors.BUNKER};
      border-radius: 2px;
      overflow: auto;
      @media (min-width: ${breakpoints.MD}) {
        font-size: ${pxToRem(14)};
      }
      @media (min-width: ${breakpoints.LG}) {
        font-size: ${pxToRem(16)};
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
      margin-top: 1em;
      width: 90%;
      font-family: ${fonts.LIBRE_BASKERVILLE};
      font-size: 0.9em;
      font-style: italic;
      text-align: center;
    }
    blockquote {
      font-family: ${fonts.LIBRE_BASKERVILLE};
      font-style: italic;
    }
    .info,
    blockquote {
      margin-left: 0;
      margin-right: 0;
      padding-left: 1.5em;
      font-style: italic;
      border-left: 2px solid ${colors.SAN_JUAN};
      p {
        &:before {
          content: '“';
        }
        &:after {
          content: '”';
        }
      }
      &:before {
        margin-bottom: 0.8em;
        display: block;
        text-transform: uppercase;
        font-family: ${fonts.ROBOTO};
        font-size: ${pxToRem(10)};
        font-style: normal;
        letter-spacing: 0.14em;
        color: ${colors.LINK_WATER};
        @media (min-width: ${breakpoints.MD}) {
          font-size: ${pxToRem(12)};
        }
        @media (min-width: ${breakpoints.LG}) {
          font-size: ${pxToRem(14)};
        }
      }
    }
    blockquote:before {
      content: 'Quote';
    }
    .info {
      code {
        font-style: normal;
      }
      &:before {
        content: 'Information';
      }
    }
  `,
};
