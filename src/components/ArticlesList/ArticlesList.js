import React from 'react';
import PropTypes from 'prop-types';

import Link from 'components/Link';
import ListItem from 'components/ListItem';

const ArticlesList = ({ posts }) => (
  <ul className="m-0 p-0 lis-none">
    {posts.map(({ node: post }) => (
      <ListItem key={post.id}>
        <Link
          className="d-block xs:d-flex jc-between ai-center pv-12 td-none md:pv-14 lg:pv-16"
          to={post.frontmatter.path}
        >
          <span className="d-block fx-8 pr-8 color-zircon fsz-14 sm:ai-center lg:fsz-16">
            {post.frontmatter.title}
          </span>
          <time className="d-block fx-4 fxs-0 xs:ta-right ff-mono color-manatee ws-nowrap fsz-12 lg:fsz-14">
            {post.frontmatter.date}
          </time>
        </Link>
      </ListItem>
    ))}
  </ul>
);

ArticlesList.propTypes = {
  props: PropTypes.object.isRequired,
};

export default ArticlesList;
