import React from 'react';
import Navigationbar from '../pages/shared/Navigationbar';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';

const Main = () => {
    return (
        <div>
          <Navigationbar></Navigationbar>
          <Header></Header>
          <Outlet></Outlet>
        </div>
    );
};

export default Main;