import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'Salesforce', 'Python', 'Unity'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              As a child, I was captivated by video games and their ability to create immersive
              digital worlds. This sparked my passion to create my own games, which drove me into
              the world of coding across different game engines and web development technologies.
              Fast-forward today, I've earned a B.S. degree in{' '}
              <a href="https://admissions.ucsc.edu/programs/computer-science-computer-game-design/">
                Computer Science: Game Design
              </a>{' '}
              from the prestigious{' '}
              <a href="https://www.ucsc.edu/">University of California Santa Cruz</a>.
            </p>

            <p>
              My main focus these days is to continue creating digital experiences through learning
              and utlizing code in various projects. During my free time, I've been developing on a
              wireframe website, <a href="https://github.com/JosueUriarte/R-Wireframe">Creo</a>,
              while also actively seeking job opportunties. Feel free to out to me via{' '}
              <a href="https://www.linkedin.com/in/cloid/">Linkedin</a> or{' '}
              <a href="mailto:officialcloid@gmail.com">Email</a>
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
