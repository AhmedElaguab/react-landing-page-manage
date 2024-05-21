import BgPattern from './../assets/images/bg-tablet-pattern.svg';

export default function FeaturesSection() {
  return (
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
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
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
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
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
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
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
  );
}
