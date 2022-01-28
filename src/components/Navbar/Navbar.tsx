import Image from 'next/image'

import style from './Navbar.module.scss'

const Navbar = (): JSX.Element => (
  <div>
    <nav className={style.navigation}>
      <h2 className={style.systemtitle}>En tjeneste fra</h2>
      <div className={style.logo}>
        <Image alt="NAV Logo" src="/logo.svg" width={130} height={60} priority />
      </div>
    </nav>
  </div>
)

export default Navbar
