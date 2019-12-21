import styled, { css } from 'styled-components';

import colors from '../../../../styles/colors';
import media from '../../../../styles/media';

export const ScholarshipBox = styled.div`
  flex-direction: column;
  flex: 1;
  justify-content: center;
  background: ${colors.grey};
  min-width: 15em;
  height: 25em;
  margin: 0 2.5em 0 0;
  ${media.mobile`
    margin: 0 0 2.5em 0;
    padding: 1.125em;
    min-width: auto;
    max-width: none;
    height: auto;
  `}
  padding: 1.125em;
  box-shadow: 0 0.125em 1em ${colors.regular};
`;

export const LogoSection = styled.img`
  max-height: 2.5em;
  width: auto;
  margin-bottom: 0.625em;
  align-self: center;
`;

export const InfoBox = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 0.625em 0;
  &:nth-of-type(2) {
    border-top: 0.0625em solid ${colors.regular};
    border-bottom: 0.0625em solid ${colors.regular};
  }
  ${media.mobile`
    padding: 1.25em 0;
  `}
`;

export const TextRow = styled.div`
  flex-direction: row;
  align-items: center;
`;

export const TextColumn = styled.div`
  flex-direction: column;

  s {
    font-size: 0.75em;
    text-align: center;
  }
`;

export const ButtonBox = styled.div`
  margin: 0.625em 0;
`;

export const DeleteButton = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 0.0625em solid ${colors.secondaryBlue};
  font-size: 1em;
  font-weight: bold;
  padding: 0.3125em 0.625em;
  ${media.mobile`
    padding: 0.625em;
  `}
  margin: 0 0.25em 0 0;
  border-radius: 0.25em;
  background: ${colors.grey};
  color: ${colors.secondaryBlue};
  cursor: pointer;

  &:hover {
    background: ${colors.regular};
  }
`;

export const CheckOfferButton = styled.div`
  flex: 2;
  justify-content: center;
  align-items: center;
  border: 0.0625em solid ${colors.secondaryYellow};
  padding: 0.3125em 0.625em;
  ${media.mobile`
    padding: 0.625em;
  `}
  margin: 0 0 0 0.252em;
  border-radius: 0.25em;
  background: ${colors.primaryYellow};
  cursor: pointer;

  ${props =>
    !props.enabled
      ? css`
          background: ${colors.regular};
          border: 0.0625em solid ${colors.bolder};
          p {
            display: none;
          }

          &::after {
            color: ${colors.black};
            font-size: 1em;
            font-weight: bold;
            content: 'Indisponível';
          }

          &:hover {
            cursor: not-allowed;
          }
        `
      : css`
          &:hover {
            background: ${colors.secondaryYellow};
          }
        `}
`;
