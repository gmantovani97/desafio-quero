import styled from 'styled-components';

import colors from '../../../../styles/colors';
import media from '../../../../styles/media';

export const ScholarshipBox = styled.div`
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grey};
  min-width: 15em;
  height: 25em;
  margin: 0 2.5em 0 0;
  ${media.mobile`
    margin: 0 0 2.5em 0;
    padding: 5em;
    min-width: auto;
    max-width: none;
    height: auto;
  `}
  padding: 1.125em;
  box-shadow: 0 0.125em 1em ${colors.regular};
`;

export const LogoSection = styled.img`
  max-height: 2.5em;
  margin-bottom: 0.625em;
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
  font-size: 1em;
  font-weight: bold;
  padding: 0.3125em 0.625em;
  margin: 0 0 0 0.252em;
  border-radius: 0.25em;
  background: ${colors.primaryYellow};
  color: ${colors.black};
  cursor: pointer;

  &:hover {
    background: ${colors.secondaryYellow};
  }
`;
