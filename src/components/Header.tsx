import Logo from './../assets/images/logo.svg';
import IconHamburger from './../assets/images/icon-hamburger.svg';
import IconClose from './../assets/images/icon-close.svg';

export default function Header({
  showNavbar,
  onOpenNavbar,
  onCloseNavbar,
}: {
  showNavbar: boolean;
  onOpenNavbar: () => void;
  onCloseNavbar: () => void;
}) {
  const toggleNavbar = () => (showNavbar ? onCloseNavbar() : onOpenNavbar());
  return (
    <header>
      <div className="max-w-[1264px] mx-auto">
        <nav className="flex justify-between items-center px-7 py-12">
          <img className="h-[22px] lg:h-[27px]" src={Logo} alt="manage logo" />
          <button
            className="w-[30px] h-[30px] pb-1 flex justify-end items-center z-50 lg:hidden"
            onClick={toggleNavbar}
          >
            {!showNavbar ? (
              <img src={IconHamburger} alt="hamburger icon" />
            ) : (
              <img src={IconClose} alt="close icon" />
            )}
          </button>
          <span
            className={`fixed top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-black opacity-30 ${
              !showNavbar && 'hidden'
            } lg:hidden`}
            onClick={onCloseNavbar}
          ></span>
          <ul
            onClick={onCloseNavbar}
            className={`fixed bg-white top-24 left-6 right-6 shadow-lg rounded-lg py-8 ${
              !showNavbar && 'hidden'
            } lg:static lg:bg-transparent lg:shadow-none lg:flex lg:py-0`}
          >
            <li>
              <a
                className="flex justify-center p-4 text-xl font-medium text-blue-primary hover:text-red-primary lg:text-base"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="flex justify-center p-4 text-xl font-medium text-blue-primary hover:text-red-primary lg:text-base"
                href="#"
              >
                Product
              </a>
            </li>
            <li>
              <a
                className="flex justify-center p-4 text-xl font-medium text-blue-primary hover:text-red-primary lg:text-base"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="flex justify-center p-4 text-xl font-medium text-blue-primary hover:text-red-primary lg:text-base"
                href="#"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="flex justify-center p-4 text-xl font-medium text-blue-primary hover:text-red-primary lg:text-base"
                href="#"
              >
                Community
              </a>
            </li>
          </ul>
          <a
            className="hidden lg:flex bg-red-primary text-white py-3 px-8 rounded-full shadow-md shadow-red-primary hover:opacity-90"
            href="/"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
