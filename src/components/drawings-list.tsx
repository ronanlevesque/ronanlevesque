import React from 'react';
import cx from 'classnames';

import Image from 'next/image';

type DrawingsListProps = {
  className?: string;
  drawings: Array<string>;
  folder: string;
};

const DrawingsList = ({
  drawings,
  className,
  folder,
  ...other
}: DrawingsListProps) => (
  <ul
    className={cx(
      'm-0 grid grid-cols-2 p-0 ~gap-12/32 ~px-8/12',
      'xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6',
      className
    )}
    {...other}
  >
    {drawings.map((drawing) => (
      <a
        className="block border-2 border-white text-white no-underline"
        href={`/images/drawings/${folder}/${drawing}.jpg`}
        key={drawing}
      >
        <li className="list-none p-0">
          <Image
            src={`/images/drawings/${folder}/small/${drawing}-small.jpg`}
            alt={`Drawing named ${drawing}`}
            className="block h-auto w-100p border-0"
            width={160}
            height={160}
          />
        </li>
      </a>
    ))}
  </ul>
);

export default DrawingsList;
