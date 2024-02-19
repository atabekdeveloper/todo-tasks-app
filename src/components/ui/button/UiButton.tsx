import { Button, ButtonProps, ConfigProvider } from 'antd';
import React from 'react';

const UiButton: React.FC<ButtonProps> = (_props) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#5B21B6',
      },
    }}
  >
    <Button {..._props} type="primary" />
  </ConfigProvider>
);

export { UiButton };
