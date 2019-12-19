import React from 'react';
import Icon from '@mdi/react';
import { mdiCheckBold } from '@mdi/js';

import Text from '../../../../../../elements/Text';
import colors from '../../../../../../styles/colors';

import {
  Container,
  LogoSection,
  CheckBox,
  Logo,
  CourseSection,
  PriceSection,
  LogoBox,
  InfosSection,
} from './styles';

export default function CourseListItem({ item }) {
  return (
    <Container>
      <LogoSection>
        <CheckBox>
          <Icon path={mdiCheckBold} color={colors.grey} />
        </CheckBox>
        <LogoBox>
          <Logo src={item.university.logo_url} />
        </LogoBox>
      </LogoSection>
      <InfosSection>
        <CourseSection>
          <Text fontSize={0.875} bold color={colors.secondaryBlue}>
            {item.course.name}
          </Text>
          <Text fontSize={0.725} marginBottom={1.25}>
            {item.course.level}
          </Text>
        </CourseSection>
        <PriceSection>
          <div>
            <Text fontSize={0.875}>Bolsa de </Text>
            <Text fontSize={0.875} bold color={colors.green} padding={0.3125}>
              {item.discount_percentage}
            </Text>
            <Text fontSize={0.875} bold color={colors.green}>
              %
            </Text>
          </div>
          <Text fontSize={0.875} color={colors.green} bold>
            R$ {item.price_with_discount}/mês
          </Text>
        </PriceSection>
      </InfosSection>
    </Container>
  );
}
