import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiCheckBold, mdiChevronDown } from '@mdi/js';

import Text from '../../../../elements/Text';
import colors from '../../../../styles/colors';
import { testApi } from '../../../../services/testApi';

import CourseListItem from './components/CourseListItem';
import {
  Container,
  Content,
  TitleBox,
  FilterBox,
  SelectSection,
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
  ButtonsSection,
  CancelButton,
  FilterSection,
  AddButton,
} from './styles';

export default function Modal() {
  const [list, setList] = useState([]);
  const [cities, setCities] = useState([]);
  const [courses, setCourses] = useState([]);
  const [kind, setKind] = useState(['Presencial', 'EaD']);
  const [price, setPrice] = useState(['0']);
  const [filters, setFilters] = useState({
    city: '',
    course: '',
    kind: {
      presential: true,
      distance: true,
    },
    price: '0',
  });

  useEffect(() => {
    testApi.get('redealumni/scholarships').then(async ({ data }) => {
      setList(data);
      const citiesList = [];
      data.map(item => {
        if (citiesList.indexOf(item.campus.city) === -1) {
          citiesList.push(item.campus.city);
        }
      });
      setCities(citiesList);
      const coursesList = [];
      data.map(item => {
        if (coursesList.indexOf(item.course.name) === -1) {
          coursesList.push(item.course.name);
        }
      });
      setCourses(coursesList);
      console.log(data);
      setPrice([...data.map(item => item.price_with_discount)]);
    });
  }, []);

  useEffect(() => {
    setFilters({
      ...filters,
      price: Math.max(...price),
    });
  }, [price]);

  useEffect(() => {
    setFilters({
      ...filters,
      price: Math.max(...price),
    });
  }, [price]);

  function handleChangeFilter(value, filter, isKind) {
    if (!isKind) {
      setFilters({
        ...filters,
        [filter]: value,
      });
    } else {
      setFilters({
        ...filters,
        kind: {
          ...filters.kind,
          [filter]: !filters.kind[filter],
        },
      });
    }
  }

  console.log(price);

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
          <SelectSection>
            <SelectBox>
              <Text fontSize={0.8125} bold marginBottom={0.3125}>
                SELECIONE SUA CIDADE
              </Text>
              <Select
                defaultValue={cities[0]}
                onChange={e => handleChangeFilter(e.target.value, 'city')}
              >
                <Option />
                {cities.map(city => (
                  <Option>{city}</Option>
                ))}
              </Select>
            </SelectBox>
            <SelectBox>
              <Text fontSize={0.8125} bold marginBottom={0.3125}>
                SELECIONE O CURSO DE SUA PREFERÊNCIA
              </Text>
              <Select
                defaultValue={courses[0]}
                onChange={e => handleChangeFilter(e.target.value, 'course')}
              >
                <Option />
                {courses.map(course => (
                  <Option>{course}</Option>
                ))}
              </Select>
            </SelectBox>
          </SelectSection>
          <FilterSection>
            <MultipleSelectionBox>
              <Text fontSize={0.8125} bold marginBottom={0.625}>
                COMO VOCÊ QUER ESTUDAR?
              </Text>
              <InputSection>
                <MultipleSelectionSection defaultValue="Presencial">
                  <CheckBox
                    selected={filters.kind.presential}
                    onClick={() => handleChangeFilter(null, 'presential', true)}
                  >
                    <Icon path={mdiCheckBold} color={colors.grey} />
                  </CheckBox>
                  <Text fontSize={0.875}>Presencial</Text>
                </MultipleSelectionSection>
                <MultipleSelectionSection defaultValue="EaD">
                  <CheckBox
                    selected={filters.kind.distance}
                    onClick={() => handleChangeFilter(null, 'distance', true)}
                  >
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
                R$ {filters.price}
              </Text>
              <Slider
                min={Math.min(...price)}
                max={Math.max(...price)}
                value={filters.price}
                onChange={e => handleChangeFilter(e.target.value, 'price')}
              />
            </SliderBox>
          </FilterSection>
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
        <li>
          {list.map(item => {
            return <CourseListItem item={item} filters={filters} />;
          })}
        </li>
        <ButtonsSection>
          <CancelButton>Cancelar</CancelButton>
          <AddButton>Adicionar bolsa(s)</AddButton>
        </ButtonsSection>
      </Content>
    </Container>
  );
}
