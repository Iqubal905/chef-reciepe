import React from 'react';
import Navigationbar from '../pages/shared/Navigationbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
          <Navigationbar></Navigationbar>
          <Outlet></Outlet>
        </div>
    );
};

export default Main;