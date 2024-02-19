import { Slant as Hamburger } from 'hamburger-react';
import React from 'react';
import { useActions, useSelectors } from 'src/hooks';

const HeaderHamburger: React.FC = () => {
  const { drawerShowRoute, mode } = useSelectors();
  const { toggleDrawerRoute } = useActions();

  return (
    <Hamburger
      toggled={!drawerShowRoute}
      duration={0.3}
      color={mode === 'dark' ? '#e2e8f0' : '#0f172a'}
      onToggle={() => toggleDrawerRoute()}
    />
  );
};

export { HeaderHamburger };
