import { css } from '@emotion/core';
import * as breakpoints from 'constants/breakpoints';

export default {
  job: css`
    @media (min-width: ${breakpoints.SM}) {
      width: 190px;
    }
    @media (min-width: ${breakpoints.MD}) {
      width: 220px;
    }
    @media (min-width: ${breakpoints.LG}) {
      width: 250px;
    }
  `,
};
