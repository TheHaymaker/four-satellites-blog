import { graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import config from '../../config';
import { Layout, Link, Navigation, SectionTitle, Wrapper } from '../components';
import '../style.css';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 2rem 4rem;
  background-color: #f3f3f3;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

const Category = ({
  data: {
    allMdx: { group }
  }
}) => (
  <Layout>
    <Wrapper>
      <Navigation />
      <Helmet title={`Categories | ${config.siteTitle}`} />
      <Content>
        <SectionTitle>Categories</SectionTitle>
        {group.map(category => (
          <Title key={category.fieldValue}>
            <Link to={`/categories/${kebabCase(category.fieldValue)}`}>{category.fieldValue}</Link>{' '}
            {category.totalCount}
          </Title>
        ))}
      </Content>
    </Wrapper>
  </Layout>
);

export default Category;

Category.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.array.isRequired
    })
  }).isRequired
};

export const postQuery = graphql`
  query CategoriesPage {
    allMdx {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`;
