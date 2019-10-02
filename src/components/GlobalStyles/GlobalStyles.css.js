import { css } from '@emotion/core';
import * as breakpoints from 'constants/breakpoints';
import * as colors from 'constants/colors';
import * as fonts from 'constants/fonts';
import { pxToRem } from 'helpers';

export default {
  root: css`
    * {
      box-sizing: border-box;
    }
    body {
      background-color: #fff;
      color: ${colors.SAN_JUAN};
      font-family: ${fonts.LIBRE_BASKERVILLE};
      margin: 0;
      padding-left: ${pxToRem(12)};
      padding-right: ${pxToRem(12)};
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      @media (min-width: ${breakpoints.MD}) {
        padding-left: ${pxToRem(16)};
        padding-right: ${pxToRem(16)};
      }
      @media (min-width: ${breakpoints.LG}) {
        padding-left: ${pxToRem(20)};
        padding-right: ${pxToRem(20)};
      }
    }
    body[data-theme='dark'] {
      background-color: ${colors.MIDNIGHT};
      color: ${colors.LINK_WATER};
    }
    ::selection {
      background-color: ${colors.SAN_JUAN};
      color: white;
    }
    body[data-theme='dark'] *::selection {
      background-color: white;
      color: ${colors.MIDNIGHT};
    }
  `,
};
