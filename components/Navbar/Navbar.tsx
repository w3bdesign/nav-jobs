import Image from "next/image";

import style from "./Navbar.module.scss";

//import { ReactComponent as NavbarLogo } from '../../assets/svg/logo.svg';

const Navbar: React.FC = () => (
  <div>
    <nav className={style.navigation}>
      <div className={style.systemtitle}>En tjeneste fra</div>
      <div className={style.logo}>
        <Image
          alt="NAV Logo"
          src="/logo.svg"
          width={130}
          height={60}
          priority
        />
      </div>
    </nav>
  </div>
);

export default Navbar;
