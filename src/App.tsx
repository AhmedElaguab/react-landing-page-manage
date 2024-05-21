import LogoLight from './assets/images/logo-light.svg';
import IntroIllustration from './assets/images/illustration-intro.svg';
import IconFacebook from './assets/images/icon-facebook.svg';
import IconYoutube from './assets/images/icon-youtube.svg';
import IconTwitter from './assets/images/icon-twitter.svg';
import IconPintrest from './assets/images/icon-pinterest.svg';
import IconInsta from './assets/images/icon-instagram.svg';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import AvatarAli from './assets/images/avatar-ali.png';
import AvatarAnisha from './assets/images/avatar-anisha.png';
import AvatarRichard from './assets/images/avatar-richard.png';
import AvatarShanai from './assets/images/avatar-shanai.png';

import BgPattern from './assets/images/bg-tablet-pattern.svg';

import Header from './components/Header';

const testimonials: { avatar: string; name: string; text: string }[] = [
  {
    avatar: AvatarAli,
    name: 'Ali Bravo',
    text: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
  },
  {
    avatar: AvatarAnisha,
    name: 'Anisha Li',
    text: 'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
  },
  {
    avatar: AvatarRichard,
    name: 'Richard Watts',
    text: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!',
  },
  {
    avatar: AvatarShanai,
    name: 'Shanai Gough',
    text: 'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
  },
];

function App() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const closeNavbar = () => setShowNavbar(false);
  const openNavbar = () => setShowNavbar(true);
  return (
    <div
      className="relative"
      onKeyUp={e => {
        if (e.code === 'Escape') closeNavbar();
      }}
    >
      <img
        className="absolute -z-10 -top-28 -right-28"
        src={BgPattern}
        alt="background pattern"
      />
      <Header
        showNavbar={showNavbar}
        onOpenNavbar={openNavbar}
        onCloseNavbar={closeNavbar}
      />
      <main className="px-4">
        <div className="max-w-[1264px] mx-auto">
          <section className="text-center lg:text-start lg:flex lg:mt-12">
            <div className="lg:order-2 lg:w-1/2">
              <img
                className="mx-auto lg:flex"
                src={IntroIllustration}
                alt="intro illustration"
              />
            </div>
            <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-baseline">
              <h1 className="text-blue-primary text-5xl lg:text-6xl lg:leading-tight font-bold mt-4">
                Bring everyone together to build better products.
              </h1>
              <p className="text-gray-light text-xl mt-4 lg:w-5/6">
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view!
              </p>
              <a
                className="inline-flex bg-red-primary text-white py-3 px-8 mt-8 rounded-full shadow-md shadow-red-primary hover:opacity-90"
                href="/"
              >
                Get Started
              </a>
            </div>
          </section>
        </div>

        <section className="mt-24 leading-relaxed relative">
          <img
            className="absolute -z-10 -top-80 -right-40 lg:top-0 lg:-left-64 "
            src={BgPattern}
            alt="background pattern"
          />
          <div className="max-w-[1264px] mx-auto lg:flex">
            <div className="text-center lg:text-start lg:w-1/2 pr-10">
              <h2 className=" text-blue-primary text-4xl leading-normal font-bold">
                What's different about Manage?
              </h2>
              <p className="text-gray-light  mt-4">
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
              </p>
            </div>
            <ul className="mt-10 lg:mt-0 lg:w-1/2">
              <li>
                <h3 className="bg-red-light lg:bg-transparent p-2 pl-0 rounded-full text-blue-primary font-bold lg:text-xl">
                  <span className="p-2 px-4 lg:px-6 bg-red-primary text-white rounded-full mr-2">
                    01
                  </span>{' '}
                  Track company-wide progress
                </h3>
                <p className="mt-3 text-gray-light">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </li>
              <li className="mt-8">
                <h3 className="bg-red-light lg:bg-transparent p-2 pl-0 rounded-full text-blue-primary font-bold lg:text-xl">
                  <span className="p-2 px-4 lg:px-6 bg-red-primary text-white rounded-full mr-2">
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
                <h3 className="bg-red-light lg:bg-transparent p-2 pl-0 rounded-full text-blue-primary font-bold lg:text-xl">
                  <span className="p-2 px-4 lg:px-6 bg-red-primary text-white rounded-full mr-2">
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
          </div>
        </section>
        <section className="mt-24 leading-relaxed text-center">
          <h2 className="text-blue-primary text-4xl leading-normal font-bold">
            What they've said
          </h2>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            autoplay
            slidesPerView={1}
            className="mt-10"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1264: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {testimonials.map(person => (
              <SwiperSlide
                key={person.name}
                className="bg-gray-lighter relative mt-[40px] p-4 pb-14"
              >
                <img
                  className="w-[80px] absolute -top-[40px] mx-auto center-avatar"
                  src={person.avatar}
                  alt={person.name}
                />
                <p className="text-xl font-bold text-blue-primary mt-12">
                  {person.name}
                </p>
                <p className="text-lg text-gray-light mt-4">“{person.text}”</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <a
            className="inline-flex bg-red-primary text-white py-3 px-8 mt-8 rounded-full shadow-md shadow-red-primary hover:opacity-90"
            href="/"
          >
            Get Started
          </a>
        </section>

        <section className="mt-24 -mx-4 bg-red-primary text-center text-white py-20">
          <div className="max-w-[1264px] mx-auto lg:flex lg:justify-between lg:items-center ">
            <h2 className="text-4xl font-medium leading-normal w-[70%] lg:w-auto mx-auto lg:mx-0">
              Simplify how your team works today.
            </h2>
            <a
              className="inline-flex bg-white text-red-primary py-3 px-8 mt-8 lg:mt-0 rounded-full shadow-md hover:opacity-90"
              href="/"
            >
              Get Started
            </a>
          </div>
        </section>

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
                    <img
                      className="w-full"
                      src={IconYoutube}
                      alt="Youtube Icon"
                    />
                  </a>
                </li>
                <li>
                  <a className="flex w-9 hover:opacity-90" href="#">
                    <img
                      className="w-full"
                      src={IconTwitter}
                      alt="Twitter Icon"
                    />
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
      </main>
    </div>
  );
}

export default App;
