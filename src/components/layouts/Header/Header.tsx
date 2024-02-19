import React from 'react';
import { useTranslation } from 'react-i18next';
import { useResponsive } from 'src/hooks';
import { todayDate } from 'src/utils';

import HeaderAvatar from './HeaderAvatar';
import { HeaderBadge } from './HeaderBadge';
import { HeaderHamburger } from './HeaderHamburger';
import { HeaderLang } from './HeaderLang';
import { HeaderSearch } from './HeaderSearch';

import './header.scss';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const { isMobile } = useResponsive(1200);

  return (
    <header className="header">
      <div className="header__inner">
        {isMobile ? <HeaderHamburger /> : <HeaderSearch />}
        <div className="header__title">
          {isMobile && <h4>{t('title')}</h4>}
          <p>{todayDate}</p>
        </div>
        <div className="header__block">
          <HeaderBadge />
          <HeaderLang />
          {isMobile && <HeaderAvatar />}
        </div>
      </div>
      {isMobile && <HeaderSearch />}
    </header>
  );
};

export { Header };
