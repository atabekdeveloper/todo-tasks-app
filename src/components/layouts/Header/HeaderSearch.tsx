import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImSearch } from 'react-icons/im';
import { UiInput } from 'src/components/ui';
import { useActions, useDebounce, useResponsive } from 'src/hooks';

const HeaderSearch: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');

  const { t } = useTranslation();
  const { setSearchValue } = useActions();
  const debounceValue = useDebounce(inputValue, 200);

  const { isMobile } = useResponsive(1200);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  React.useEffect(() => {
    setSearchValue(debounceValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);
  return (
    <UiInput
      value={inputValue}
      onChange={handleChangeInput}
      placeholder={`${t('placeholderSearch')}`}
      style={{ width: isMobile ? '100%' : '300px' }}
      suffix={<ImSearch color="#94A3B8" size={18} />}
      size="large"
    />
  );
};

export { HeaderSearch };
