import Cookies from 'js-cookie';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UiSelect } from 'src/components/ui';

const HeaderLang: React.FC = () => {
  const { i18n } = useTranslation();

  const lang = Cookies.get('lang');

  const handleChangeLang = (value: string) => {
    i18n.changeLanguage(value);
    Cookies.set('lang', value);
  };
  return (
    <UiSelect
      defaultValue={lang || 'RU'}
      onChange={handleChangeLang}
      options={[
        { value: 'RU', label: 'RU' },
        { value: 'EN', label: 'EN' },
        { value: 'QQ', label: 'QQ' },
      ]}
    />
  );
};

export { HeaderLang };
