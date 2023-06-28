"use client"
//css
import './Header.css'
//components
import ImageProfile from '../imageProfile/ImageProfile';
import SwitchOnOff from '../switch/SwitchOnOff';

const Header = () => {
  
    return(
        <header className="main-header-container">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Lautaro</span>
              <SwitchOnOff/>
            </a>
          </div>
          <div className="flex lg:hidden">
            <ImageProfile size={"small"}/>
          </div>
        </nav>
      </header>
    )
}

export default Header;