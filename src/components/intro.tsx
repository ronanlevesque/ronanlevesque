import Image from 'next/image';
import Link from 'next/link';

import cx from 'classnames';

const Intro = () => (
  <header
    className={cx(
      'relative flex grow ~py-60/120 before:~bottom-32/64',
      'md:before-left-0 md:before:absolute md:before:z-20 md:before:block md:before:h-50p md:before:w-100p md:before:bg-gradient-to-b md:before:from-transparent md:before:to-blackPearl'
    )}
  >
    <div
      className={cx(
        'relative z-20 px-8 text-left font-libre font-normal leading-bigger text-manatee ~text-20/28',
        'xs:m-auto xs:w-90p xs:px-0 md:m-0 md:w-60p md:~pl-8/32'
      )}
    >
      <p className="m-0 inline">Hello!</p> I’m{' '}
      <h1 className="m-0 inline">Ronan Levesque</h1>
      <p className="m-0 inline">
        , an Engineering Manager and former Senior Software Engineer. I love
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
        ➡️ I’m currently looking for new work opportunities, don’t hesitate to{' '}
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
    <div
      className={cx(
        'hidden ~py-32/64',
        'md:absolute md:right-0 md:top-0 md:block md:h-100p md:min-w-40p'
      )}
    >
      <Image
        src="/images/ronan-levesque.png"
        alt="A picture of me, being casual"
        className="md:m-auto md:h-100p md:w-auto md:opacity-45"
        blurDataURL="/images/ronan-levesque.png"
        placeholder="blur"
        width={1567}
        height={1902}
      />
    </div>
  </header>
);

export default Intro;
