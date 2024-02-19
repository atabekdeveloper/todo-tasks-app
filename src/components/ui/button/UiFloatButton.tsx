import { ConfigProvider, FloatButton, FloatButtonProps } from 'antd';
import React from 'react';

const UiFloatButton: React.FC<FloatButtonProps> = (_props) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#5B21B6',
      },
    }}
  >
    <FloatButton {..._props} type="primary" shape="circle" style={{ zIndex: 200 }} />
  </ConfigProvider>
);

export { UiFloatButton };
