import { css } from '@emotion/core';
import * as breakpoints from 'constants/breakpoints';
import { pxToRem } from 'helpers';

export default {
  job: css`
    @media (min-width: ${breakpoints.SM}) {
      width: ${pxToRem(190)};
    }
    @media (min-width: ${breakpoints.MD}) {
      width: ${pxToRem(220)};
    }
    @media (min-width: ${breakpoints.LG}) {
      width: ${pxToRem(250)};
    }
  `,
};
