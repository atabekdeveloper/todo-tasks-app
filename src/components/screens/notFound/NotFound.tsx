import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { UiButton } from 'src/components/ui';

import notFound from '../../../assets/images/404.svg';

import './notFound.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="not-found">
      <img className="none" src={notFound} alt="404" />
      <div className="not-found__content">
        <h2>404</h2>
        <p>{t('notFound')}</p>
        <UiButton onClick={() => navigate('/')}>{t('back')}</UiButton>
      </div>
    </div>
  );
};

export { NotFound };
