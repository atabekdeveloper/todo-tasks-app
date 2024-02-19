import React from 'react';
import { useTranslation } from 'react-i18next';

import notTask from '../../../assets/images/none.svg';

import './notTask.scss';

const NotTask: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="not-task">
      <img className="none" src={notTask} alt="notTask" />
      <div className="not-task__content">
        <h2>{t('notTask')}</h2>
      </div>
    </div>
  );
};

export { NotTask };
