import { Avatar } from 'antd';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useActions } from 'src/hooks';

const HeaderAvatar: React.FC = () => {
  const { toggleDrawerInfo } = useActions();
  return (
    <Avatar
      size={35}
      icon={<FaUserAlt />}
      style={{ cursor: 'pointer' }}
      onClick={() => toggleDrawerInfo()}
    />
  );
};

export default HeaderAvatar;
