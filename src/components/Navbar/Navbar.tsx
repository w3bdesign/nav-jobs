import React from 'react';

import './Navbar.css';

import { ReactComponent as NavbarLogo } from '../../svg/logo.svg';

const Navbar: React.FC = () => (
  <div>
    <nav>
      <div className="system-title">En tjeneste fra</div>
      <div className="logo">
        <NavbarLogo />
      </div>
    </nav>
  </div>
);

export default Navbar;
