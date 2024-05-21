import LogoLight from './../assets/images/logo-light.svg';
import IconFacebook from './../assets/images/icon-facebook.svg';
import IconYoutube from './../assets/images/icon-youtube.svg';
import IconTwitter from './../assets/images/icon-twitter.svg';
import IconPintrest from './../assets/images/icon-pinterest.svg';
import IconInsta from './../assets/images/icon-instagram.svg';

export default function () {
  return (
    <footer className="bg-blue-dark -mx-4 py-10 px-4">
      <div className="max-w-[1264px] mx-auto lg:flex">
        <div className="flex lg:order-3 lg:items-baseline">
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
        <div className="px-4 mt-8 flex justify-evenly mx-auto text-gray-300 lg:order-2 lg:mt-0 lg:mx-0 lg:grow">
          <ul className="">
            <li>
              <a
                className="flex p-2 text-white hover:text-red-primary"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="flex p-2 text-white hover:text-red-primary"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="flex p-2 text-white hover:text-red-primary"
                href="#"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="flex p-2 text-white hover:text-red-primary"
                href="#"
              >
                About Us
              </a>
            </li>
          </ul>
          <ul className="">
            <li>
              <a
                className="flex p-2 text-white hover:text-red-primary"
                href="#"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="flex p-2 text-white hover:text-red-primary"
                href="#"
              >
                Community
              </a>
            </li>
            <li>
              <a
                className="flex p-2 text-white hover:text-red-primary"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:order-1 lg:flex lg:flex-col lg:justify-between lg:items-baseline">
          <ul className="mt-10 flex justify-between px-10 lg:order-2 lg:px-0 lg:w-full lg:mt-0">
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
          <div className="mt-20 lg:order-1 lg:mt-0">
            <a href="#" className="flex w-[50%] mx-auto lg:w-full">
              <img className="w-full" src={LogoLight} alt="manager logo" />
            </a>
          </div>
          <p className="mt-20 text-gray-light text-center lg:order-3 lg:mt-0">
            Copyright {new Date().getFullYear()}, All rights reserved!
          </p>
        </div>
      </div>
    </footer>
  );
}
