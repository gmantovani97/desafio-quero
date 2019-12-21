import React from 'react';
import Icon from '@mdi/react';
import {
  mdiInformationOutline,
  mdiAccountCircleOutline,
  mdiWhatsapp,
  mdiChevronDown,
} from '@mdi/js';

import colors from '@/styles/colors';
import Logo from '@/assets/images/querobolsalogo.png';

import './styles.scss';

export default function Header() {
  return (
    <div className="container">
      <div className="header header--position--top">
        <div className="box box--order--first">
          <Icon
            path={mdiInformationOutline}
            color={colors.secondaryBlue}
            title="Como funciona"
          />
          <p className="description">Como funciona</p>
        </div>
        <div className="separator" />
        <div className="box box--item--desktop">
          <Icon path={mdiWhatsapp} color={colors.green} title="Como funciona" />
          <div className="textbox">
            <p className="description description--item--smaller">
              0800 123 2222
            </p>
            <p className="description description--item--smallest">
              Envie mensagem ou ligue
            </p>
          </div>
        </div>
        <div className="box box--display--flex">
          <img alt="Quero bolsa" className="logo" src={Logo} />
        </div>
        <div className="separator separator--item--mobile" />
        <div className="box box--order--last">
          <Icon
            path={mdiAccountCircleOutline}
            color={colors.secondaryBlue}
            title="Conta"
          />
          <p className="description">Giovani Mantovani</p>
        </div>
      </div>
      <div className="header header--position--bottom">
        <div className="button">
          <p>Minha conta</p>
        </div>
        <div className="button">
          <p>Pré-matriculas</p>
        </div>
        <div className="button button--status--selected">
          <p>Bolsas favoritas</p>
        </div>
        <div className="menu">
          <p>Menu</p>
          <Icon path={mdiChevronDown} color={colors.grey} title="Conta" />
        </div>
      </div>
    </div>
  );
}
