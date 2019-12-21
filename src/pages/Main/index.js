import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiPlusCircleOutline } from '@mdi/js';

import Text from '../../elements/Text';
import colors from '../../styles/colors';

import Modal from './components/Modal';
import ScholarshipListItem from './components/ScholarshipListItem';

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
  ContentSection,
  ScholarshipBox,
} from './styles';

export default function Main() {
  const [modal, setModal] = useState(false);
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('@scholarship'));
    setScholarships(list);
  }, []);

  function handleOpenModal() {
    document.body.style.overflow = 'hidden';
    setModal(true);
  }

  function handleCloseModal() {
    document.body.style.overflow = 'scroll';
    setModal(false);
  }

  function handleDeleteScholarship(item) {
    const list = scholarships.filter(
      scholarship => JSON.stringify(scholarship) !== JSON.stringify(item)
    );
    setScholarships(list);
    localStorage.setItem('@scholarship', JSON.stringify(list));
  }

  function handleSaveScholarships(list) {
    const scholarshipsList = JSON.parse(localStorage.getItem('@scholarship'));
    list.forEach(scholarship => {
      const { selected, ...obj } = scholarship;
      if (!scholarshipsList && selected) {
        localStorage.setItem('@scholarship', JSON.stringify([obj]));
      } else if (scholarshipsList && selected) {
        if (
          !scholarshipsList.find(
            item => JSON.stringify(item) === JSON.stringify(obj)
          )
        ) {
          localStorage.setItem(
            '@scholarship',
            JSON.stringify([...scholarships, obj])
          );
        }
      }
    });
  }

  return (
    <Container>
      {modal && (
        <Modal
          closeModal={handleCloseModal}
          handleSaveScholarships={item => handleSaveScholarships(item)}
        />
      )}
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
        <ContentSection>
          <ScholarshipBox onClick={handleOpenModal}>
            <Icon path={mdiPlusCircleOutline} color={colors.primaryBlue} />
            <Text textAlign="center" fontSize={1.25} bold marginBottom={0.625}>
              Adicionar curso
            </Text>
            <Text textAlign="center" fontSize={0.875}>
              Clique para adicionar bolsas de cursos do seu interesse
            </Text>
          </ScholarshipBox>
          {scholarships &&
            scholarships.map(item => (
              <li key={Math.random()}>
                <ScholarshipListItem
                  item={item}
                  modalOpened={modal}
                  handleDeleteScholarship={scholarship =>
                    handleDeleteScholarship(scholarship)
                  }
                />
              </li>
            ))}
        </ContentSection>
      </MainBottom>
    </Container>
  );
}
