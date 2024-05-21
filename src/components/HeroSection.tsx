import IntroIllustration from './../assets/images/illustration-intro.svg';

export default function HeroSection() {
  return (
    <section>
      <div className="text-center lg:text-start lg:flex lg:mt-12 max-w-[1264px] mx-auto">
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
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view!
          </p>
          <a
            className="inline-flex bg-red-primary text-white py-3 px-8 mt-8 rounded-full shadow-md shadow-red-primary hover:opacity-90"
            href="/"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
