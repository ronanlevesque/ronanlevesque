'use client';

import cx from 'classnames';
import Link from 'next/link';

import SmallText from '@/components/small-text';
import Svg from '@/components/svg';

import socialSharingData from '@/data/social-sharing.json';

function renderNodes(
  nodes: Array<{
    data: {
      hProperties: {
        id: string;
      };
    };
    value: string;
    children?: [];
  }>
) {
  return (
    <ul className="toc">
      {nodes.map((node) => (
        <li
          className="lg:text-16 lg:text-blueBayoux"
          key={node.data.hProperties.id}
        >
          <a
            className="lg:inline-flex lg:transition lg:hover:text-manatee"
            href={`#${node.data.hProperties.id}`}
          >
            {node.value}
          </a>
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
}

const Sidebar = ({ slug, toc }) => (
  <aside
    className={cx(
      '~mt-36/48 ~px-8/12',
      'lg:w-30p lg:sticky lg:top-40 lg:mt-0 lg:max-h-[calc(100vh-80px)] lg:overflow-auto lg:px-0'
    )}
  >
    <div className={cx('rounded-md bg-bunker ~p-20/24', 'lg:ml-40 lg:mr-8')}>
      <SmallText asChild className={cx('hidden text-linkWater', 'lg:block')}>
        <h3>Table of Contents</h3>
      </SmallText>
      <div className={cx('hidden', 'lg:mb-32 lg:mt-12 lg:block')}>
        {!toc?.length ? (
          <p className="lg:mt-12 lg:font-libre lg:text-16 lg:italic lg:text-blueBayoux">
            There is no table of content available for this entry.
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
              href={`${socialSharingData[icon].url}https://ronanlevesque.com/articles/${slug}`}
              className="inline-flex items-center text-blueBayoux transition hover:text-manatee"
            >
              <Svg
                className="~h-16/18 ~w-16/18"
                name={socialSharingData[icon].name}
              />
              <span className="~ml-6/8 ~text-14/16">{icon}</span>
            </Link>
          </li>
        ))}
      </ul>
      <a
        className="inline-flex text-blueBayoux transition ~text-14/16 ~mt-24/32 hover:text-manatee"
        href="#top"
      >
        ⇑ Scroll back to top
      </a>
    </div>
  </aside>
);

export default Sidebar;
