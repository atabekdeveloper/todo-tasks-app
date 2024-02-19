import { ConfigProvider, Spin, SpinProps } from 'antd';
import React from 'react';

const UiSpin: React.FC<SpinProps> = (_props) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#5B21B6',
      },
    }}
  >
    <Spin {..._props} />
  </ConfigProvider>
);

export { UiSpin };
