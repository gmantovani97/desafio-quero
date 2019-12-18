import React from 'react';
import Icon from '@mdi/react';
import {
  mdiInformationOutline,
  mdiAccountCircleOutline,
  mdiWhatsapp,
} from '@mdi/js';

import Text from '../../elements/Text';
import colors from '../../styles/colors';
import Logo from '../../assets/images/querobolsalogo.png';

import {
  Container,
  HeaderTop,
  Box,
  ContactBox,
  ContactBoxText,
  Image,
  Bar,
} from './styles';

export default function Header() {
  return (
    <Container>
      <HeaderTop>
        <Box>
          <Icon
            path={mdiInformationOutline}
            color={colors.secondaryBlue}
            title="Como funciona"
          />
          <Text fontSize={1} bold color={colors.secondaryBlue}>
            Como funciona
          </Text>
        </Box>
        <Bar />
        <ContactBox>
          <Icon path={mdiWhatsapp} color={colors.green} title="Como funciona" />
          <ContactBoxText>
            <Text fontSize={0.875} bold color={colors.secondaryBlue}>
              0800 123 2222
            </Text>
            <Text fontSize={0.75} bold color={colors.secondaryBlue}>
              Envie mensagem ou ligue
            </Text>
          </ContactBoxText>
        </ContactBox>
        <Box flex>
          <Image src={Logo} />
        </Box>
        <Bar mobileOnly />
        <Box>
          <Icon
            path={mdiAccountCircleOutline}
            color={colors.secondaryBlue}
            title="Conta"
          />
          <Text fontSize={1} bold color={colors.secondaryBlue}>
            Giovani Mantovani
          </Text>
        </Box>
      </HeaderTop>
    </Container>
  );
}
