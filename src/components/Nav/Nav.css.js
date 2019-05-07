import { css } from '@emotion/core';
import * as breakpoints from 'constants/breakpoints';
import * as colors from 'constants/colors';

export default {
  iconLink: css`
    outline: none;
    &:hover:before,
    &:focus:before {
      opacity: 1;
      transform: translateX(0) translateY(-50%);
    }
    &:before {
      display: none;
      content: attr(data-before);
      @media (min-width: ${breakpoints.MD}) {
        color: ${colors.BLUE_BAYOUX};
        display: block;
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateX(0.3em) translateY(-50%);
        font-style: italic;
        font-size: 14px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease-out, transform 0.2s ease-out;
      }
      @media (min-width: ${breakpoints.LG}) {
        font-size: 16px;
      }
    }
  `,
};
