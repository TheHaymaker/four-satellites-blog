import React from 'react';
import styled from 'styled-components';
import { Button, Layout, Link, Navigation, Wrapper } from '../components';
import '../style.css';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 3rem 6rem;
  background-color: #f3f3f3;
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

const About = () => (
  <Layout>
    <Wrapper>
      <Navigation />
      <Hero>
        <h2
          style={{
            fontFamily: "'Major Mono Display', monospace",
            color: '#f5f5f5'
          }}
        >
          About
        </h2>
      </Hero>
      <Content>
        <h2>Hi. 😍</h2>
        <p>Welcome to Four Satellites.</p>
        <p>This is the personal blog of Brett Haymaker, a UI Engineer in Chicago.</p>
        <p>Brett started programming in 2015.</p>
        <p>
          Currently, Brett is a UI Engineer at Merill Lynch. He also{' '}
          <a
            tabIndex={0}
            href="https://generalassemb.ly/instructors/brett-haymaker/8017"
            target="_blank"
            rel="noopener noreferrer"
          >
            teaches part-time
          </a>{' '}
          at General Assembly.
        </p>
        <p>
          There are four main tenets -- or <em>satellites</em> -- that I specialize in. Programming. Design.
          Teaching/Speaking. Mentorship.
        </p>

        <hr />
        <h5>The Purpose</h5>
        <p>This blog is intended to do two things:</p>
        <ol>
          <li>
            Capture stuff he is currently learning or working on and having it saved in a place that is easily
            accessible for future reference (but is out there so it might help others, too)
          </li>
          <li>Provide foundational posts about coding to help newcomers level-up (e.g. my 'Learn To Code' series.)</li>
        </ol>

        <hr />
        <p>If you are interested in chatting, please reach out to me directly</p>
        <Link to="/contact">
          <Button tabIndex={0} big>
            <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
            </svg>
            Contact
          </Button>
        </Link>
      </Content>
    </Wrapper>
  </Layout>
);

export default About;
