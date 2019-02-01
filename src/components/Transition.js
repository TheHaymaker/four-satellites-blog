import PropTypes from 'prop-types';
import React from 'react';
import { Transition as ReactTransition, TransitionGroup } from 'react-transition-group';

const timeout = 500;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0
  },
  entered: {
    transition: `opacity 150ms ease-in-out ${timeout}ms`,
    opacity: 1
  },
  exiting: {
    transition: `opacity 150ms ease-in-out ${timeout}ms`,
    opacity: 0
  }
};

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status]
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

Transition.defaultProps = {
  location: {}
};

Transition.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  location: PropTypes.object
};

export default Transition;
