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
        <section className="text-center">
          <img src={IntroIllustration} alt="intro illustration" />
          <h1 className="text-blue-primary text-5xl leading-tight font-bold mt-4">
            Bring everyone together to build better products.
          </h1>
          <p className="text-gray-light text-xl mt-4">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view!
          </p>
          <a
            className="inline-flex bg-red-primary text-white py-3 px-8 mt-8 rounded-full shadow-md shadow-red-primary hover:opacity-90"
            href="/"
          >
            Get Started
          </a>
        </section>
        <section className="mt-24 leading-relaxed">
          <h2 className="text-center text-blue-primary text-4xl leading-normal font-bold">
            What's different
            <br />
            about Manage?
          </h2>
          <p className="text-gray-light text-center mt-4">
            Manage provides all the functionality your <br /> team needs,
            without the complexity. Our <br /> software is tailor-made for
            modern digital <br /> product teams.
          </p>
          <ul className="mt-10">
            <li>
              <h3 className="bg-red-light p-2 pl-0 rounded-full text-blue-primary font-bold text-lg">
                <span className="p-2 px-6 bg-red-primary text-white rounded-full mr-2">
                  01
                </span>{' '}
                Track company-wide progress
              </h3>
              <p className="mt-3 text-gray-light">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </li>
            <li className="mt-8">
              <h3 className="bg-red-light p-2 pl-0 rounded-full text-blue-primary font-bold text-lg">
                <span className="p-2 px-6 bg-red-primary text-white rounded-full mr-2">
                  02
                </span>{' '}
                Advanced built-in reports
              </h3>
              <p className="mt-3 text-gray-light">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </li>

            <li className="mt-8">
              <h3 className="bg-red-light p-2 pl-0 rounded-full text-blue-primary font-bold text-lg">
                <span className="p-2 px-6 bg-red-primary text-white rounded-full mr-2">
                  03
                </span>{' '}
                Everything you need in one place
              </h3>
              <p className="mt-3 text-gray-light">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </li>
          </ul>
        </section>
        <section className="mt-24 leading-relaxed text-center">
          <h2 className="text-blue-primary text-4xl leading-normal font-bold">
            What they've said
          </h2>
          {/* TODO: ADD TESTIMONIALS */}
          <a
            className="inline-flex bg-red-primary text-white py-3 px-8 mt-8 rounded-full shadow-md shadow-red-primary hover:opacity-90"
            href="/"
          >
            Get Started
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
