import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import Subline from './Subline';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  background-color: #ffffff;
  padding: 14px 28px;
  border-radius: 4px;
  box-shadow: 0px 9px 30px -21px;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Article = ({ title, date, excerpt, slug, timeToRead, categories }) => (
  <Post>
    <Title>
      <Link to={slug}>{title}</Link>
    </Title>
    <Subline>
      {date} &mdash; {timeToRead} Min Read &mdash; In{' '}
      {categories.map((cat, i) => (
        <React.Fragment key={cat}>
          {!!i && ', '}
          <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
        </React.Fragment>
      ))}
    </Subline>
    <Excerpt>{excerpt}</Excerpt>
  </Post>
);

export default Article;

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired
};
