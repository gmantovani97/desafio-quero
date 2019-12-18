import React from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';

import Text from '../../elements/Text';
import colors from '../../styles/colors';

import {
  Container,
  MainTop,
  Breadcrumbs,
  PageSection,
  Separator,
  MainBottom,
  TitleSection,
  ButtonsSection,
  Button,
} from './styles';

export default function Main() {
  return (
    <Container>
      <MainTop>
        <PageSection>
          <Icon size={1} path={mdiChevronLeft} color={colors.secondaryBlue} />
          <Text color={colors.secondaryBlue} fontSize={1} bold>
            Minha conta
          </Text>
        </PageSection>
        <Breadcrumbs>
          <Text color={colors.secondaryBlue} fontSize={0.75} bold>
            Home
          </Text>
          <Separator>/</Separator>
          <Text color={colors.secondaryBlue} fontSize={0.75} bold>
            Minha conta
          </Text>
          <Separator>/</Separator>
          <Text color={colors.bolder} fontSize={0.75} bold>
            Bolsas favoritas
          </Text>
        </Breadcrumbs>
      </MainTop>
      <MainBottom>
        <TitleSection>
          <Text fontSize={2.25} marginBottom={0.3125} bold>
            Bolsas favoritas
          </Text>
          <Text fontSize={1}>
            Adicione bolsas de cursos e faculdades do seu interesse e receba
            atualizações com as melhores ofertas disponíveis.
          </Text>
        </TitleSection>
        <ButtonsSection>
          <Button selected>Todos os semestres</Button>
          <Button>2° semestre de 2019</Button>
          <Button>1° semestre de 2020</Button>
        </ButtonsSection>
      </MainBottom>
    </Container>
  );
}
