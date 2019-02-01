import React from 'react';
import { Link } from './index';

const Navigation = () => (
  <div className="fixed-nav">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li>
        <Link to="/">Misc</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
