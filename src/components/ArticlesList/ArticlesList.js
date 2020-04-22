import React from 'react';
import PropTypes from 'prop-types';

import Link from 'components/Link';
import ListItem from 'components/ListItem';

const ArticlesList = ({ posts }) => (
  <ul className="m-0 p-0 lis-none">
    {posts.map(({ node: post }) => (
      <ListItem key={post.id}>
        <Link
          className="d-block pv-12 ph-8 td-none hover:bgc-midnight xs:d-flex xs:jc-between xs:ai-center md:pv-14 md:ph-10 lg:pv-16 lg:ph-12"
          to={post.frontmatter.path}
        >
          <span className="d-block fx-8 pr-8 color-zircon fsz-14 md:fsz-16 lg:fsz-18">
            {post.frontmatter.title}
          </span>
          <time className="mt-4 d-block fx-4 fxs-0 ff-mono color-manatee ws-nowrap fsz-12 xs:ta-right xs:mt-0 md:fsz-14 lg:fsz-16">
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
