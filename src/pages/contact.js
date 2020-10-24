/* eslint jsx-a11y/label-has-for:0 */
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import config from '../../config';
import { Button, Layout, Navigation, Wrapper } from '../components';
import '../style.css';

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

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  padding: 2rem 4rem;
  background-color: #f3f3f3;
  border-radius: 3px;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
        margin-top: 0.5rem;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
        margin-top: 0.5rem;
      }
    }
  }
`;

const Contact = () => (
  <Layout>
    <Wrapper>
      <Navigation />
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Hero>
        <h2
          style={{
            fontFamily: "'Major Mono Display', monospace",
            color: '#f5f5f5'
          }}
        >
          Contact
        </h2>
      </Hero>
      <Content>
        <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
          <p>
            <label htmlFor="contact-name">
              Name
              <input name="name" id="contact-name" type="text" required />
            </label>
          </p>
          <p>
            <label htmlFor="contact-email">
              E-Mail <input name="email" id="contact-email" type="email" required />
            </label>
          </p>
          <p>
            <label htmlFor="contact-message">
              Your Message <textarea name="message" id="contact-message" required />
            </label>
          </p>
          <p>
            <Button tabIndex={0}>Send</Button>
          </p>
          <input type="hidden" name="form-name" value="contact-form" />
        </form>
      </Content>
    </Wrapper>
  </Layout>
);

export default Contact;
