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
    html {
      font-size: 16px;
      -webkit-text-size-adjust: 100%;
    }
    body {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }
    ::selection {
      background-color: white;
      color: ${colors.MIDNIGHT};
    }
  `,
};
