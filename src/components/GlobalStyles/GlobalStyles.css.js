import { css } from '@emotion/core';
import * as colors from 'constants/colors';

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
