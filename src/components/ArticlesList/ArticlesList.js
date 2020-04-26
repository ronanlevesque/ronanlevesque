import React from 'react';
import PropTypes from 'prop-types';

import Link from 'components/Link';
import ListItem from 'components/ListItem';

const ArticlesList = ({ posts }) => (
  <ul className="m-0 p-0 lis-none">
    {posts.map(({ node: post }) => (
      <ListItem key={post.id}>
        <Link
          className="d-block td-none hover:bgc-midnight fluid:pl-8-12 fluid:pr-8-12 fluid:pt-12-16 fluid:pb-12-16 xs:d-flex xs:jc-between xs:ai-center"
          to={post.frontmatter.path}
        >
          <p className="m-0 d-block fx-8 pr-8 color-zircon fluid:fsz-14-18">
            {post.frontmatter.title}
          </p>
          <time className="mt-4 d-block fx-4 fxs-0 ff-mono color-manatee ws-nowrap fluid:fsz-12-16 xs:ta-right xs:mt-0">
            {post.frontmatter.date}
          </time>
        </Link>
      </ListItem>
    ))}
  </ul>
);

ArticlesList.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired
).isRequired;

export default ArticlesList;
