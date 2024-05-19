import Logo from './assets/images/logo.svg';
import IconHamburger from './assets/images/icon-hamburger.svg';
import IconClose from './assets/images/icon-close.svg';
import IntroIllustration from './assets/images/illustration-intro.svg';

function App() {
  return (
    <div>
      <header>
        <nav className="flex justify-between items-center px-7 py-12">
          <img className="h-[22px]" src={Logo} alt="manage logo" />
          <button>
            <img
              className="w-[30px] pb-1"
              src={IconHamburger}
              alt="hamburger icon"
            />
            <img className="hidden" src={IconClose} alt="close icon" />
          </button>
        </nav>
      </header>
      <main className="px-4">
        <section>
          <img src={IntroIllustration} alt="intro illustration" />
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view!
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
