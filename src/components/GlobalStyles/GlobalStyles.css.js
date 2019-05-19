import { css } from '@emotion/core';
import * as breakpoints from 'constants/breakpoints';
import * as colors from 'constants/colors';
import * as fonts from 'constants/fonts';

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
      padding-left: 12px;
      padding-right: 12px;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      @media (min-width: ${breakpoints.MD}) {
        padding-left: 16px;
        padding-right: 16px;
      }
      @media (min-width: ${breakpoints.LG}) {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    #gatsby-noscript {
      display: none;
    }
  `,
};
