import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import Text from '../../../../elements/Text';
import colors from '../../../../styles/colors';

import {
  ScholarshipBox,
  LogoSection,
  InfoBox,
  TextRow,
  TextColumn,
  ButtonBox,
  DeleteButton,
  CheckOfferButton,
} from './styles';

export default function ScholarshipListItem({
  item,
  modalOpened,
  handleDeleteScholarship,
}) {
  return (
    <ScholarshipBox>
      <LogoSection src={item.university.logo_url} />
      <InfoBox>
        <Text fontSize={0.875} bold color={colors.black} marginBottom={0.3125}>
          {item.university.name.toUpperCase()}
        </Text>
        <Text
          fontSize={0.875}
          bold
          color={colors.secondaryBlue}
          marginBottom={0.625}
        >
          {item.course.name}
        </Text>
        <TextRow>
          <Text fontSize={0.875} bold marginRight={0.3125}>
            {item.university.score}
          </Text>
          {!modalOpened && (
            <StarRatings
              rating={item.university.score}
              starRatedColor={colors.primaryYellow}
              starEmptyColor={colors.regular}
              numberOfStars={5}
              starDimension="1em"
              starSpacing="0"
            />
          )}
        </TextRow>
      </InfoBox>
      <InfoBox>
        <TextRow>
          <Text
            fontSize={0.875}
            bold
            color={colors.black}
            marginBottom={0.3125}
            marginRight={0.3125}
          >
            {item.course.kind.toUpperCase()} .
          </Text>
          <Text
            fontSize={0.875}
            bold
            color={colors.black}
            marginBottom={0.3125}
          >
            {item.course.shift.toUpperCase()}
          </Text>
        </TextRow>
        <Text fontSize={0.75}>Início das aulas em: {item.start_date}</Text>
      </InfoBox>
      <InfoBox>
        <Text fontSize={0.75} bold marginBottom={0.625}>
          Mensalidade com o Quero Bolsa:
        </Text>
        <TextColumn>
          <s>R$ {item.full_price.toFixed(2)}</s>
          <TextRow>
            <Text
              bold
              color={colors.green}
              fontSize={1.25}
              marginRight={0.3125}
            >
              R$ {item.price_with_discount.toFixed(2)}
            </Text>
            <Text fontSize={0.75}>/mês</Text>
          </TextRow>
        </TextColumn>
      </InfoBox>
      <ButtonBox>
        <DeleteButton onClick={() => handleDeleteScholarship(item)}>
          Excluir
        </DeleteButton>
        <CheckOfferButton enabled={item.enabled}>Ver oferta</CheckOfferButton>
      </ButtonBox>
    </ScholarshipBox>
  );
}

ScholarshipListItem.propTypes = {
  item: PropTypes.shape({
    university: PropTypes.shape({
      logo_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    }).isRequired,
    course: PropTypes.shape({
      name: PropTypes.string.isRequired,
      kind: PropTypes.string.isRequired,
      shift: PropTypes.string.isRequired,
    }).isRequired,
    start_date: PropTypes.string.isRequired,
    full_price: PropTypes.number.isRequired,
    price_with_discount: PropTypes.number.isRequired,
    enabled: PropTypes.bool.isRequired,
  }).isRequired,
  modalOpened: PropTypes.bool.isRequired,
  handleDeleteScholarship: PropTypes.func.isRequired,
};
