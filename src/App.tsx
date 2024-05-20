import Logo from './assets/images/logo.svg';
import LogoLight from './assets/images/logo-light.svg';
import IconHamburger from './assets/images/icon-hamburger.svg';
import IconClose from './assets/images/icon-close.svg';
import IntroIllustration from './assets/images/illustration-intro.svg';
import IconFacebook from './assets/images/icon-facebook.svg';
import IconYoutube from './assets/images/icon-youtube.svg';
import IconTwitter from './assets/images/icon-twitter.svg';
import IconPintrest from './assets/images/icon-pinterest.svg';
import IconInsta from './assets/images/icon-instagram.svg';

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
          <img
            className="mx-auto"
            src={IntroIllustration}
            alt="intro illustration"
          />
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
        <section className="mt-24 -mx-4 bg-red-primary text-center text-white py-20">
          <h2 className="text-4xl font-medium leading-normal w-[70%] mx-auto">
            Simplify how your team works today.
          </h2>
          <a
            className="inline-flex bg-white text-red-primary py-3 px-8 mt-8 rounded-full shadow-md hover:opacity-90"
            href="/"
          >
            Get Started
          </a>
        </section>
        <footer className="bg-blue-dark -mx-4 py-10 px-4">
          <div className="flex">
            <input
              className="grow  inline-flex bg-red-white py-3 px-8 rounded-full hover:opacity-90 mr-2"
              type="text"
              placeholder="Updated on you inbox.."
            />
            <a
              className="inline-flex bg-red-primary text-white py-3 px-8 rounded-full hover:opacity-90"
              href="/"
            >
              Go
            </a>
          </div>
          <div className="px-4 mt-8 flex justify-evenly  mx-auto  text-gray-300">
            <ul className="">
              <li>
                <a className="flex p-2 hover:text-white" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="flex p-2 hover:text-white" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="flex p-2 hover:text-white" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="flex p-2 hover:text-white" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <ul className="">
              <li>
                <a className="flex p-2 hover:text-white" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="flex p-2 hover:text-white" href="#">
                  Community
                </a>
              </li>
              <li>
                <a className="flex p-2 hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <ul className="mt-10 flex justify-between px-10">
            <li>
              <a className="flex w-9 hover:opacity-90" href="#">
                <img
                  className="w-full"
                  src={IconFacebook}
                  alt="Facebook Icon"
                />
              </a>
            </li>
            <li>
              <a className="flex w-9 hover:opacity-90" href="#">
                <img className="w-full" src={IconYoutube} alt="Youtube Icon" />
              </a>
            </li>
            <li>
              <a className="flex w-9 hover:opacity-90" href="#">
                <img className="w-full" src={IconTwitter} alt="Twitter Icon" />
              </a>
            </li>
            <li>
              <a className="flex w-9 hover:opacity-90" href="#">
                <img
                  className="w-full"
                  src={IconPintrest}
                  alt="Pintrest Icon"
                />
              </a>
            </li>
            <li>
              <a className="flex w-9 hover:opacity-90" href="#">
                <img className="w-full" src={IconInsta} alt="Insta Icon" />
              </a>
            </li>
          </ul>
          <div className="mt-20">
            <a href="#" className="flex w-[50%] mx-auto">
              <img className="w-full" src={LogoLight} alt="manager logo" />
            </a>
          </div>
          <p className="mt-20 text-gray-light text-center">
            Copyright {new Date().getFullYear()}, All rights reserved!
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
