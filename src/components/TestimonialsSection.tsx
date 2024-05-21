import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import AvatarAli from './../assets/images/avatar-ali.png';
import AvatarAnisha from './../assets/images/avatar-anisha.png';
import AvatarRichard from './../assets/images/avatar-richard.png';
import AvatarShanai from './../assets/images/avatar-shanai.png';

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

export default function () {
  return (
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
  );
}
