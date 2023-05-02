import React from 'react';
import Navigationbar from '../pages/shared/Navigationbar';
import { Outlet } from 'react-router-dom/dist';

const Loginlayout = () => {
    return (
        <div>
           <Navigationbar></Navigationbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Loginlayout;