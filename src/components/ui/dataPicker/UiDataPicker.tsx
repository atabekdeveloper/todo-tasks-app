import { ConfigProvider, DatePicker, DatePickerProps } from 'antd';
import React from 'react';
import { useSelectors } from 'src/hooks';

import { useDataPickerMode } from './useDataPickerMode';

const UiDataPicker: React.FC<DatePickerProps> = (_props) => {
  const { mode } = useSelectors();
  const theme = useDataPickerMode(mode);
  return (
    <ConfigProvider theme={{ token: theme }}>
      <DatePicker {..._props} style={{ width: '100%' }} />
    </ConfigProvider>
  );
};

export { UiDataPicker };
