import { css } from '@emotion/core';

import * as breakpoints from 'constants/breakpoints';

export default {
  root: css`
    grid-gap: 1.5em;
    @media (min-width: ${breakpoints.XL}) {
      margin-left: -201px !important;
    }
  `,
};
