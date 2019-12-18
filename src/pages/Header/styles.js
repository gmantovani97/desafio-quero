import styled, { css } from 'styled-components';

import colors from '../../styles/colors';
import media from '../../styles/media';

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 0.3125em 5em;
  ${media.mobile`
    padding: 0.3125em 0.625em;
  `}
`;

export const HeaderTop = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const Box = styled.div`
  flex: ${props => props.flex && 1};
  justify-content: center;
  align-items: center;
  border-color: ${colors.regular};
  svg {
    width: 1.625em;
    margin: 0.3125em;
    ${media.mobile`
      width: 2.5em;
      margin: 0;
    `}
  }
  ${media.mobile`
    flex-direction: column;
    &:first-child {
      border-right-width: 0.1875em;
      p {
        display: none;
      }
      &::after {
        font-weight: bold;
        color: ${colors.secondaryBlue};
        content: "Ajuda";
      }
    }
    &:last-child {
      padding: 0.6250em;
      p {
        display: none;
      }
      &::after {
        font-weight: bold;
        color: ${colors.secondaryBlue};
        content: "Conta";
      }
    }
  `}
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${media.mobile`
    display: none;
  `}
  svg {
    width: 1.625em;
    margin: 0.3125em;
  }
`;

export const ContactBoxText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  ${media.mobile`
    height: 6.25em;
  `}
  height: 4.375em;
`;

export const Bar = styled.div`
  background: ${colors.regular};
  width: 0.1875em;
  margin: 0.625em 1.25em;
  ${media.mobile`
    margin: 1.25em;
  `}
  ${props =>
    props.mobileOnly &&
    css`
      display: none;
      ${media.mobile`
      display: flex;
    `}
    `};
`;
