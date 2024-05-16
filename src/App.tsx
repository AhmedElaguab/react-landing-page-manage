import Logo from './assets/images/logo.svg';
import IconHamburger from './assets/images/icon-hamburger.svg';
import IconClose from './assets/images/icon-close.svg';

function App() {
  return (
    <div>
      <header>
        <nav className="flex justify-between items-center px-6 py-12">
          <img className="h-5" src={Logo} alt="manage logo" />
          <button>
            <img src={IconHamburger} alt="hamburger icon" />
            <img className="hidden" src={IconClose} alt="close icon" />
          </button>
        </nav>
      </header>
    </div>
  );
}

export default App;
