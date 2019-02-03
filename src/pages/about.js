import React from 'react';
import styled from 'styled-components';
import { Button, Layout, Link, Navigation, Wrapper } from '../components';
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

const About = () => (
  <Layout>
    <Wrapper>
      <Hero>
        <h2>About</h2>
      </Hero>
      <Content>
        <p>
          Four Satellites is part playground, part showcase, part web archive for its founder, Brett
          Haymaker. Hi.
        </p>
        <p>The four satellite services that we offer:</p>
        <div className="row wrap">
          <div className="col col-2">
            <h5 className="center-text">Consulting</h5>
          </div>
          <div className="col col-2">
            <h5 className="center-text">Teaching</h5>
          </div>
          <div className="col col-2">
            <h5 className="center-text">Speaking</h5>
          </div>
          <div className="col col-2">
            <h5 className="center-text">Design</h5>
          </div>
        </div>

        <p>
          The idea of four satellites arose when I found myself taking on contract work in addition
          to my day job as a web developer. That work consisted of freelance, one-off website
          projects, one-time workshops designed to teach newcomers the basics of HTML, CSS and
          JavaScript.
        </p>
        <p>
          These projects began to snowball. One-time workshops turned into running two-day
          workshops. Two-day workshops turned into joining the instructional team at Northwestern
          University's Code Bootcamp. That lead to me taking on the role of Instructor for General
          Assembly's Front End Web Development part-time 10-week course.
        </p>
        <p>
          I was helping to build up and form the local web development community in the Chicago-land
          area. And coming to this field from a non-traditional starting point (M.F.A. in Poetry), I
          feel a sense of duty and purpose to help others also move into this challenging and
          rewarding field.
        </p>
        <p>
          The side-effects of this work were unexpected: I found my voice as an instructor, as a
          teacher, educator, student, craftsmen. I consistently had opportunities to face my fear of
          public speaking - which is still alive and well - and practice strategies to move passed
          that fear.
        </p>
        <blockquote>Now who am I going to be in this new world?</blockquote>
        <p>
          In my other life as a creative writer, I knew who I was, I knew my voice. There was quiet
          confidence to be found living in that strong suit. I knew who I was.
        </p>
        <p>
          But learning to code was to learn an entirely new way of thinking, and thereby of looking
          at - and seeing - the world. In fact, an entirely new world opened up to me with the
          digital literacy I gained from the bootcamp experience. It was akin to learning how to
          read. I couldn't go back, I could no longer see the world the way it was before. Still, as
          exciting and terrifying as this was to me at the time, I was left with this unnerving
          feeling. Now that this new world was navigable for me, who was I going to be in that
          world? What new rules was I not yet aware of? What moorings could I safely tether myself
          to? That was the most important question for me to answer.
        </p>
        <p>Four Satellites is my response to as well as my attempt to answer that question.</p>

        <p>If you are interested in chatting, please reach out to me directly</p>
        <Link to="/contact">
          <Button big>
            <svg
              width="1792"
              height="1792"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
            </svg>
            Contact
          </Button>
        </Link>
      </Content>
      <Navigation />
    </Wrapper>
  </Layout>
);

export default About;
