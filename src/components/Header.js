import { darken, lighten } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import OverlayTransition from './OverlayTransition';

const Wrapper = styled.header`
  background: linear-gradient(
    45deg,
    ${props => darken(0.1, props.theme.colors.primary)},
    ${props => lighten(0.1, props.theme.colors.primary)}
  );
  grid-column: 1 / -1;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 2rem 2rem 5rem 2rem;
  box-shadow: inset 0px -10px 30px 0px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  a {
    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;
    &:hover {
      opacity: 0.85;
      color: ${props => props.theme.colors.white};
    }
  }
`;

const handlePageTransition = async e => {
  (function() {
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
    // MIT license

    let lastTime = 0;
    const vendors = ['ms', 'moz', 'webkit', 'o'];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = `${window[`${vendors[x]}RequentAnimationFrame`]}`;

      window.cancelAnimationFrame =
        `${window[`${vendors[x]}CancelAnimationFrame`]}` ||
        `${window[`${vendors[x]}CancelRequestAnimationFrame`]}`;
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback) {
        const currTime = new Date().getTime();
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        const id = window.setTimeout(() => {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  })();
  let overlay;
  let frames = 0;
  let frameIndex = 0;
  let tickCount = 0;

  function overlayTakeOver(event) {
    if (frames < 21) {
      window.requestAnimationFrame(overlayTakeOver);

      overlay.update(event);
      overlay.render(event);
    } else {
      overlay.render(event);
    }
  }
  function sprite(options) {
    let that = {};
    const ticksPerFrame = options.ticksPerFrame || 0;
    const numberOfFrames = options.numberOfFrames || 0;

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.length = options.length;

    that.update = function() {
      tickCount += 1;

      if (tickCount > ticksPerFrame) {
        tickCount = 0;

        // If the current frame index is in range
        if (frameIndex < numberOfFrames - 1) {
          // Go to the next frame
          frameIndex += 1;
          frames += 1;
        } else {
          tickCount = 0;
          frameIndex = 0;
          that.context.clearRect(0, 0, that.width, that.height);
        }
      }
    };

    that.render = function() {
      // Clear the canvas
      that.context.clearRect(0, 0, that.width, that.height);

      // Draw the animation
      that.context.drawImage(
        that.image,
        (frameIndex * that.width) / numberOfFrames,
        0,
        that.width / numberOfFrames,
        that.height,
        0,
        0,
        that.width / numberOfFrames,
        that.height
      );
    };

    return that;
  }

  // Get canvas
  const canvas = document.getElementById('overlayAnimation');
  canvas.width = 600;
  canvas.height = 600;

  // Create sprite sheet
  const overlayImage = new Image();
  // Create sprite
  overlayImage.src = './screen-transition-noise-2.png';

  overlayImage.onload = () => {
    frames = 0;
    frameIndex = 0;
    tickCount = 0;
    overlay = sprite({
      context: canvas.getContext('2d'),
      width: 13200,
      height: 600,
      image: overlayImage,
      numberOfFrames: 22,
      ticksPerFrame: 3,
      length: 0
    });
    overlayTakeOver();
  };
};

const Header = ({ children }) => (
  <Wrapper>
    <button type="submit" onClick={handlePageTransition}>
      Transition the Page
    </button>
    <OverlayTransition />
    <nav>This is the nav area</nav>
    <Content>{children}</Content>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
};
