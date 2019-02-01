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
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400|600|Major+Mono+Display|Quattrocento+Sans:400,700"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <nav>
          {/* <span
            role="link"
            tabIndex="0"
            onKeyPress={() => {}}
            onClick={e => {
              e.preventDefault();
              console.log('I fire...');
              window.handlePageTransition();
              window.history.pushState({}, '', '/');
              window.history.go(1);
            }}
          > */}
          <div className="logo">
            <canvas id="four-satellites" />
            <canvas id="four-satellites-1" />
            <canvas id="four-satellites-2" />
            <canvas id="four-satellites-3" />
          </div>
          {/* </span> */}
          {/* <span
            role="link"
            tabIndex="0"
            onKeyPress={() => {}}
            onClick={e => {
              e.preventDefault();
              console.log('I fire...');
              window.handlePageTransition();
              window.history.pushState({}, '', '/');
              window.history.go(1);
            }}
          > */}
          <h1 className="logo-title">
            fouR s<span className="title-special">A</span>tellites
          </h1>
          {/* </span> */}
        </nav>
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
        <footer>
          &copy;{' '}
          {(() => {
            const d = new Date();
            return d.getFullYear();
          })()}{' '}
          by <span className="logo-title">fouR sAtellites</span>, LLC. All rights reserved.
        </footer>

        <canvas id="overlayAnimation" />
        <script src="sprite-animation.js" />

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

    window.onpopstate = handlePageTransition;
        `
          }}
        />

        <script src="logo-animation.js" />
        <script src="logo-animation.1.js" />
        <script src="logo-animation.2.js" />
        <script src="logo-animation.3.js" />
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
