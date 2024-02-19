export const useDataPickerMode = (mode: 'dark' | 'light') => {
  const dark = {
    colorPrimaryBg: '#171221',
    colorPrimaryBgHover: '#1f1433',
    colorPrimaryBorder: '#291845',
    colorPrimaryBorderHover: '#341a5d',
    colorPrimaryHover: '#6d3db1',
    colorPrimary: '#501f9e',
    colorPrimaryActive: '#421c7d',
    colorPrimaryTextHover: '#6d3db1',
    colorPrimaryText: '#501f9e',
    colorPrimaryTextActive: '#421c7d',
  };
  const light = {
    colorPrimaryBg: '#eee6f5',
    colorPrimaryBgHover: '#d4bee8',
    colorPrimaryBorder: '#b591db',
    colorPrimaryHover: '#7742c2',
    colorPrimary: '#5b21b6',
    colorPrimaryActive: '#3e138f',
    colorPrimaryTextHover: '#7742c2',
    colorPrimaryText: '#5b21b6',
    colorPrimaryTextActive: '#3e138f',
  };
  if (mode === 'dark') return dark;
  return light;
};
