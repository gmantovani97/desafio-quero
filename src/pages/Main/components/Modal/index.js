import React from 'react';
import Icon from '@mdi/react';
import { mdiCheckBold, mdiChevronDown } from '@mdi/js';

import Text from '../../../../elements/Text';
import colors from '../../../../styles/colors';

import {
  Container,
  Content,
  TitleBox,
  FilterBox,
  SelectBox,
  Select,
  Option,
  MultipleSelectionBox,
  InputSection,
  MultipleSelectionSection,
  CheckBox,
  SliderBox,
  Slider,
  ResultTitleBox,
  ResultTitleSection,
  ResultFilterBox,
} from './styles';

export default function Modal() {
  return (
    <Container>
      <Content>
        <TitleBox>
          <Text bold>Adicionar bolsa</Text>
          <Text fontSize={0.875}>
            Filtre e adicione as bolsas de seu interesse.
          </Text>
        </TitleBox>
        <FilterBox>
          <SelectBox>
            <Text fontSize={0.8125} bold>
              SELECIONE SUA CIDADE
            </Text>
            <Select>
              <Option />
              <Option>São José dos Campos</Option>
            </Select>
          </SelectBox>
          <SelectBox>
            <Text fontSize={0.8125} bold>
              SELECIONE O CURSO DE SUA PREFERÊNCIA
            </Text>
            <Select>
              <Option />
              <Option>Engenharia da computação</Option>
            </Select>
          </SelectBox>
          <MultipleSelectionBox>
            <Text fontSize={0.8125} bold marginBottom={0.625}>
              COMO VOCÊ QUER ESTUDAR?
            </Text>
            <InputSection>
              <MultipleSelectionSection>
                <CheckBox selected>
                  <Icon path={mdiCheckBold} color={colors.grey} />
                </CheckBox>
                <Text fontSize={0.875}>Presencial</Text>
              </MultipleSelectionSection>
              <MultipleSelectionSection>
                <CheckBox>
                  <Icon path={mdiCheckBold} color={colors.grey} />
                </CheckBox>
                <Text fontSize={0.875}>A distância</Text>
              </MultipleSelectionSection>
            </InputSection>
          </MultipleSelectionBox>
          <SliderBox>
            <Text fontSize={0.8125} bold>
              ATÉ QUANTO PODE PAGAR?
            </Text>
            <Text fontSize={0.875} marginBottom={1.25}>
              R$10.000
            </Text>
            <Slider />
          </SliderBox>
        </FilterBox>
        <ResultTitleBox>
          <Text fontSize={0.875} bold>
            Resultado:
          </Text>
          <ResultTitleSection>
            <Text fontSize={0.875} bold>
              Ordenar por
            </Text>
            <ResultFilterBox>
              <Text fontSize={0.875} color={colors.secondaryBlue} bold>
                Nome da faculdade
              </Text>
              <Icon path={mdiChevronDown} color={colors.secondaryBlue} />
            </ResultFilterBox>
          </ResultTitleSection>
        </ResultTitleBox>
      </Content>
    </Container>
  );
}
