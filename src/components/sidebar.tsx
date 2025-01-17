'use client';

import cx from 'classnames';
import Link from 'next/link';

import SmallText from '@/components/small-text';
import Svg from '@/components/svg';
import TocLink from '@/components/toc-link';

import * as meta from '@/constants/meta';
import * as routes from '@/constants/routes';

import socialSharingData from '@/data/social-sharing.json';

const renderNodes = (
  nodes: Array<{
    data: {
      hProperties: {
        id: string;
      };
    };
    value: string;
    children?: [];
  }>
) => (
  <ul className="toc">
    {nodes.map((node) => (
      <li
        className="lg:text-16 lg:text-blueBayoux"
        key={node.data.hProperties.id}
      >
        <TocLink node={node} />
        {node.children?.length > 0 && renderNodes(node.children)}
      </li>
    ))}
  </ul>
);

const Sidebar = ({ slug, toc }) => (
  <aside
    className={cx(
      '~mt-36/48 ~px-8/12',
      'lg:sticky lg:top-40 lg:mr-12 lg:mt-0 lg:max-h-[calc(100vh-80px)] lg:w-[calc(30%-12px)] lg:overflow-auto lg:px-0'
    )}
  >
    <div className={cx('rounded-md bg-bunker ~p-20/24', 'lg:ml-40')}>
      <SmallText asChild className={cx('hidden text-linkWater', 'lg:block')}>
        <h3>Table of Contents</h3>
      </SmallText>
      <div className={cx('hidden', 'lg:mb-32 lg:mt-12 lg:block')}>
        {!toc?.length ? (
          <p className="lg:mt-12 lg:font-libre lg:text-16 lg:italic lg:text-blueBayoux">
            There is no table of contents available for this entry.
          </p>
        ) : (
          renderNodes(toc)
        )}
      </div>
      <SmallText asChild className="text-linkWater">
        <h3>Share this link:</h3>
      </SmallText>
      <ul className={cx('~mt-10/12', 'xs:flex xs:items-center lg:block')}>
        {Object.keys(socialSharingData).map((icon: string, index: number) => (
          <li
            className={cx(
              index > 0 && '~mt-6/8 xs:mt-0 xs:~ml-16/20 lg:ml-0 lg:mt-8'
            )}
            key={index}
          >
            <Link
              href={`${socialSharingData[icon].url}${meta.URL}${routes.ARTICLES}${slug}`}
              className="inline-flex items-center text-blueBayoux transition hover:text-manatee"
            >
              <Svg
                className="~h-16/18 ~w-16/18"
                name={socialSharingData[icon].name}
              />
              <span className="~text-14/16 ~ml-6/8">{icon}</span>
            </Link>
          </li>
        ))}
      </ul>
      <a
        className="inline-flex text-blueBayoux transition ~text-14/16 ~mt-24/32 hover:text-manatee"
        href="#top"
      >
        <span>⇑</span>
        <span className="~ml-6/8">Scroll back to top</span>
      </a>
    </div>
  </aside>
);

export default Sidebar;
