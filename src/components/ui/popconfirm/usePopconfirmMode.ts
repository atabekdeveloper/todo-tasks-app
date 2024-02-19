export const usePopconfirmMode = (mode: 'dark' | 'light') => {
  const dark = {
    colorText: '#94A3B8',
    colorPrimary: '#5B21B6',
    colorBgElevated: '#141E33',
  };
  const light = {
    colorText: '#6D5580',
    colorPrimary: '#5B21B6',
    colorBgElevated: '#F1F5F9',
  };
  if (mode === 'dark') return dark;
  return light;
};
