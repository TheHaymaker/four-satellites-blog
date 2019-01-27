import React from 'react';
import styled from 'styled-components';

const OverlayCanvas = styled.canvas`
  position: absolute;
  pointer-events: none;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const OverlayTransition = () => <OverlayCanvas id="overlayAnimation" width={600} height={600} />;

export default OverlayTransition;
