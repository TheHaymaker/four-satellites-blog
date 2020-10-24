import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <nav>
          <div className="logo">
            <canvas id="four-satellites" />
            <canvas id="four-satellites-1" />
            <canvas id="four-satellites-2" />
            <canvas id="four-satellites-3" />
          </div>
          <h1 className="logo-title">
            fouR s<span className="title-special">A</span>tellites
          </h1>
        </nav>
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
        <footer>
          <p>
            &copy;{' '}
            {(() => {
              const d = new Date();
              return d.getFullYear();
            })()}{' '}
            by{' '}
            <span className="logo-title">
              fouR s<span className="title-special">A</span>tellites
            </span>
            , LLC. <span>All rights reserved.</span>
          </p>
        </footer>

        <canvas id="overlayAnimation" />
        <script src="https://cdn.jsdelivr.net/gh/thehaymaker/four-satellites-blog/static/sprite-animation.js" />

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

        <script src="https://cdn.jsdelivr.net/gh/thehaymaker/four-satellites-blog/static/logo-animation.js" />
        <script src="https://cdn.jsdelivr.net/gh/thehaymaker/four-satellites-blog/static/logo-animation.1.js" />
        <script src="https://cdn.jsdelivr.net/gh/thehaymaker/four-satellites-blog/static/logo-animation.2.js" />
        <script src="https://cdn.jsdelivr.net/gh/thehaymaker/four-satellites-blog/static/logo-animation.3.js" />
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
