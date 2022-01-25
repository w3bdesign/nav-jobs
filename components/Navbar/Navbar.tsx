import React from 'react';

import style from './Navbar.module.scss';

import { ReactComponent as NavbarLogo } from '../../assets/svg/logo.svg';

const Navbar: React.FC = () => (
  <div>
    <nav>
      <div className={style.systemtitle}>En tjeneste fra</div>
      <div className={style.logo}>
        <NavbarLogo />
      </div>
    </nav>
  </div>
);

export default Navbar;
