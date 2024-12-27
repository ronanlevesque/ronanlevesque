import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';

import ListItem from '@/components/list-item';

import { formatDate } from '@/helpers';

const ArticlesList = ({ articles, ...other }) => (
  <ul className="m-0 list-none p-0" {...other}>
    {articles.map(({ date, slug, title }) => (
      <ListItem key={title}>
        <Link
          className={cx(
            'block no-underline transition ~p-8/12 hover:bg-midnight',
            'xs:flex xs:items-center xs:justify-between'
          )}
          href={`articles/${slug}`}
        >
          <p
            className={cx(
              'm-0 pr-8 font-libre text-zircon ~text-16/18',
              'xs:grow-1 xs:shrink-0 xs:basis-2/3'
            )}
          >
            {title}
          </p>
          <time
            className={cx(
              'block whitespace-nowrap font-roboto-mono text-manatee ~text-14/16',
              'xs:grow-1 xs:shrink-0 xs:basis-1/3 xs:text-right'
            )}
          >
            {formatDate(date)}
          </time>
        </Link>
      </ListItem>
    ))}
  </ul>
);

ArticlesList.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired
).isRequired;

export default ArticlesList;
