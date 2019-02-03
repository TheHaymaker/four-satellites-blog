import React from 'react';
import styled from 'styled-components';
import { Layout, Navigation, Wrapper } from '../components';
import '../style.css';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Hero = styled.div`
  grid-column: 2;
  padding: 2rem 2rem 2rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
  }
`;

const Work = () => (
  <Layout>
    <Wrapper>
      <Hero>
        <h2>Work</h2>
        <p>Coming soon.</p>
      </Hero>
      {/* <Content /> */}
      <Navigation />
    </Wrapper>
  </Layout>
);

export default Work;
