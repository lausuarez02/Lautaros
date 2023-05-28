//css
import './Header.css'
//components
import ImageProfile from '../imageProfile/ImageProfile';

const Header = () => {
    return(
        <header className="bg-white main-header-container">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Lautaro</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <ImageProfile size={"small"}/>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
    )
}

export default Header;