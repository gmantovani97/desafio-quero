import styled, { css } from 'styled-components';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

import colors from '../../../../styles/colors';
import media from '../../../../styles/media';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${colors.darkTransparent};
  justify-content: center;
  align-items: center;
  /* overflow-y: auto; */
`;

export const Content = styled.div`
  background: ${colors.grey};
  padding: 1.25em;
  ${media.mobile`
    min-width: 100vw;
  `}
  max-width: 50em;
  max-height: 80vh;
  flex-direction: column;
  flex: 1;

  li {
    overflow-y: auto;
    list-style: none;
    padding: 1.25em 0;
  }
`;

export const TitleBox = styled.div`
  flex-direction: column;
  align-items: flex-start;
`;

export const FilterBox = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

export const SelectBox = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0.6125em 0;
  &:first-of-type {
    margin: 0 0.6125em 0 0;
    ${media.mobile`
    margin: 0;
  `}
  }
  &:last-of-type {
    margin: 0 0 0 0.6125em;
    ${media.mobile`
    margin: 0;
  `}
  }
`;

export const SelectSection = styled.div`
  flex: 1;
  ${media.mobile`
    flex-direction: column;
  `}
  align-items: flex-start;
  width: 100%;
  padding: 0.6125em 0;
`;

export const FilterSection = styled.div`
  flex: 1;
  ${media.mobile`
    flex-direction: column;
    padding: 0;
  `}
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0.6125em 0;
`;

export const Select = styled.select`
  height: 3.75em;
  width: 100%;

  font-size: 0.875em;
  border: 0.0625em solid ${colors.bold};
`;

export const Option = styled.option`
  font-family: Montserrat;
`;

export const MultipleSelectionBox = styled.div`
  flex-direction: column;
  flex: 1;
  ${media.mobile`
    flex: initial;
  `}
`;

export const InputSection = styled.div`
  flex-direction: row;
`;

export const MultipleSelectionSection = styled.div`
  align-items: center;
  margin-right: 1.25em;
  cursor: pointer;
`;

export const CheckBox = styled.div`
  ${props =>
    props.selected
      ? css`
          background: ${colors.primaryBlue};
        `
      : css`
          border: 0.0625em solid ${colors.bold};
        `};
  width: 0.875em;
  height: 0.875em;
  border-radius: 0.125em;
  margin-right: 0.3125em;
  justify-content: center;
  align-items: center;

  svg {
    width: 0.75em;
  }
`;

export const SliderBox = styled.div`
  flex-direction: column;
  flex: 1;
  ${media.mobile`
    flex: initial;
    padding: 0.6125em 0;
  `}
  width: 100%;
`;

export const Slider = styled.input.attrs({
  type: 'range',
})`
  -webkit-appearance: none;
  appearance: none;
  height: 0.3125em;
  background: ${colors.primaryBlue};
  -webkit-transition: 0.2s;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: ${colors.grey};
    height: 2.5em;
    width: 2.5em;
    border-radius: 1.75em;
    border: 0.1875em solid ${colors.primaryBlue};
  }
`;

export const ResultTitleBox = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.6125em 0;
`;

export const ResultTitleSection = styled.div`
  flex-direction: row;
  ${media.mobile`
    flex-direction: column;
  `}
  align-items: flex-end;

  p:first-of-type {
    margin-right: 0.3125em;
    ${media.mobile`
    margin-right: 0;
  `}
  }
`;

export const ResultFilterBox = styled.div`
  svg {
    width: 1em;
  }
`;

export const ButtonsSection = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.6125em;
`;

export const CancelButton = styled.button`
  flex: 1;
  border: 0.0625em solid ${colors.secondaryBlue};
  font-size: 1em;
  font-weight: bold;
  padding: 1em 1.25em;
  margin: 0 0.5em 0 0;
  border-radius: 0.25em;
  background: ${colors.grey};
  color: ${colors.secondaryBlue};

  &:hover {
    background: ${colors.regular};
  }
`;

export const AddButton = styled.button`
  flex: 2;
  border: 0.0625em solid
    ${props => (props.selected ? colors.secondaryYellow : colors.bold)};
  font-size: 1em;
  font-weight: bold;
  padding: 1em 1.25em;
  margin: 0 0 0 0.5em;
  border-radius: 0.25em;
  background: ${props =>
    props.selected ? colors.primaryYellow : colors.regular};
  color: ${props => (props.selected ? colors.black : colors.bold)};

  &:hover {
    background: ${props =>
      props.selected ? colors.secondaryYellow : colors.bold};
  }
`;
