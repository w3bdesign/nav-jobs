import Image from "next/image"

import style from "./Navbar.module.scss"

const Navbar = () => (
  <div>
    <nav className={style.navigation}>
      <h1 className={style["system-title"]}>NAV jobb utforsker - en tjeneste fra</h1>
      <div className={style.logo}>
        <Image alt="NAV Logo" src="/logo.svg" width={130} height={60} priority />
      </div>
    </nav>
  </div>
)

export default Navbar
