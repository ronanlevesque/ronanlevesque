import { css } from '@emotion/core';
import * as breakpoints from 'constants/breakpoints';
import { pxToRem } from 'helpers';

export default {
  job: css`
    @media (min-width: ${breakpoints.SM}) {
      width: ${pxToRem(200)};
    }
    @media (min-width: ${breakpoints.MD}) {
      width: ${pxToRem(230)};
    }
    @media (min-width: ${breakpoints.LG}) {
      width: ${pxToRem(260)};
    }
  `,
};
