import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../components/Navber';

const Root = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default Root;