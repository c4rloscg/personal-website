import React from 'react';

import { FooterContainer } from './FooterContainer';
import HeaderContainer from './HeaderContainer';

type MainProps = {
    children: any;
};
export const MainContainer: React.FC<MainProps> = ({ children }) => {
    return (
        <div id="main-wrapper" className="main-wrapper" style={{ height: '100vh', display: 'grid' }}>
            <HeaderContainer />
            {children}
            <FooterContainer />
        </div>
    );
};
