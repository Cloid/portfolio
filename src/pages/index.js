import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => {
  const handleMouseMove = ev => {
    const { clientX, clientY } = ev;

    // Get the scroll positions
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the accurate cursor position
    const adjustedX = clientX + scrollX;
    const adjustedY = clientY + scrollY;

    // Update the CSS variables
    document.documentElement.style.setProperty('--x', `${adjustedX}px`);
    document.documentElement.style.setProperty('--y', `${adjustedY}px`);
  };
  useEffect(() => {
    const body = document.body;
    body.addEventListener('mousemove', handleMouseMove);
    return () => {
      body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Jobs />
        <Featured />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
