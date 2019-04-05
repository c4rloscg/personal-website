import * as React from 'react';

import { FooterContainer } from './FooterContainer';
import HeaderContainer from './HeaderContainer';
import "../design/index.scss";

type MainProps = {
   children: any
}
export const MainContainer: React.SFC<MainProps> = ({children}) => {
   return (
      <div id="main-wrapper" className="main-wrapper">
         <HeaderContainer />
         { children }
         <FooterContainer />
      </div>
   );
}

