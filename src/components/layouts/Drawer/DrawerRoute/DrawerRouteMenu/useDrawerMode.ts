export const useDrawerMode = (mode: 'dark' | 'light') => {
  const dark = {
    colorBgBase: '#141E33',
    colorTextBase: '#8497AC',
    controlItemBgActive: '#1A253A',
    colorPrimary: '#E2E8F0',
  };
  const light = {
    colorBgBase: '#F1F5F9',
    colorTextBase: '#477880',
    controlItemBgActive: '#EDE9FE',
    colorPrimary: '#F43F5E',
  };
  if (mode === 'dark') return dark;
  return light;
};
