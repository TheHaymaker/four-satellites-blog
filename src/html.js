import PropTypes from 'prop-types';
import React from 'react';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
        <link rel="stylesheet" href="style.css" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <nav>
          <div className="logo">
            <canvas id="four-satellites" />
            <canvas id="four-satellites-4" />
            <canvas id="four-satellites-1" />
            <canvas id="four-satellites-2" />
            <canvas id="four-satellites-3" />
          </div>
          <button className="trigger-overlay">Transition the page</button>
        </nav>
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}

        <canvas id="overlayAnimation" />
        <script src="sprite-animation.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
    let transitionBtn = document.querySelector('.trigger-overlay');

    transitionBtn.addEventListener('click', e => {
      e.target.style.pointerEvents = 'none';
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
      await overlayTakeOver();

      setTimeout(() => {
        e.target.style.pointerEvents = 'all';
      }, 1500);
    });
        `
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
    window.handlePageTransition = e => {
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
    }
        `
          }}
        />

        <script src="logo-animation.js" />
        <script src="logo-animation.1.js" />
        <script src="logo-animation.2.js" />
        <script src="logo-animation.3.js" />
        <script src="logo-animation.4.js" />
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
