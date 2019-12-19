import React from 'react';
import Icon from '@mdi/react';
import {
  mdiWhatsapp,
  mdiChatOutline,
  mdiEmailOutline,
  mdiInformationOutline,
} from '@mdi/js';

import Text from '../../elements/Text';
import colors from '../../styles/colors';

import {
  Container,
  FooterTop,
  BoxInfo,
  BoxInfoSection,
  FooterBottom,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <FooterTop>
        <BoxInfo>
          <Icon path={mdiWhatsapp} color={colors.white} />
          <BoxInfoSection mobile>
            <Text fontSize={1} bold color={colors.white}>
              0800 123 2222
            </Text>
            <Text fontSize={0.875} color={colors.white}>
              Segunda a sexta de 8h às 22h
            </Text>
          </BoxInfoSection>
        </BoxInfo>
        <BoxInfo>
          <Icon path={mdiChatOutline} color={colors.white} />
          <BoxInfoSection>
            <Text fontSize={1} bold color={colors.white}>
              Chat ao vivo
            </Text>
            <Text fontSize={0.875} color={colors.white}>
              Seg - Sex 8h-22h
            </Text>
          </BoxInfoSection>
        </BoxInfo>
        <BoxInfo>
          <Icon path={mdiEmailOutline} color={colors.white} />
          <BoxInfoSection>
            <Text fontSize={1} bold color={colors.white}>
              Mande um e-mail
            </Text>
            <Text fontSize={0.875} color={colors.white}>
              Respondemos rapidinho
            </Text>
          </BoxInfoSection>
        </BoxInfo>
        <BoxInfo>
          <Icon path={mdiInformationOutline} color={colors.white} />
          <BoxInfoSection>
            <Text fontSize={1} bold color={colors.white}>
              Central de ajuda
            </Text>
            <Text fontSize={0.875} color={colors.white}>
              Encontre todas as respostas
            </Text>
          </BoxInfoSection>
        </BoxInfo>
      </FooterTop>
      <FooterBottom>
        <Text fontSize={1} color={colors.white} bold>
          Feito com ♥︎ pela Quero Educação
        </Text>
      </FooterBottom>
    </Container>
  );
}
