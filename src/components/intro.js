import Link from 'next/link';

import cx from 'classnames';

const Intro = () => (
  <header className="flex grow ~py-80/160">
    <div
      className={cx(
        'm-auto my-0 px-8 text-left font-libre font-normal leading-bigger text-manatee ~text-20/32',
        'xs:w-90p xs:px-0'
      )}
    >
      <p className="m-0 inline">Hello!</p> I’m{' '}
      <h1 className="m-0 inline">Ronan Levesque</h1>
      <p className="m-0 inline">
        , an Engineering Manager and former Senior Software Engineer. I ❤️
        pushing pixels around and playing with{' '}
        <Link
          className={cx(
            'text-zircon no-underline transition',
            'hover:text-white'
          )}
          href="https://reactjs.org/"
        >
          React
        </Link>{' '}
        to build fast and powerful web apps.
      </p>
      <p className="text-manatee ~mt-20/32">
        I’m currently looking for new work opportunities, don’t hesitate to{' '}
        <Link
          className={cx(
            'text-zircon no-underline transition',
            'hover:text-white'
          )}
          href="https://www.linkedin.com/in/ronanlevesque"
        >
          contact me
        </Link>
        !
      </p>
    </div>
  </header>
);

export default Intro;
