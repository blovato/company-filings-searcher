import React from 'react';
import './company.css';

export default ({ match }) => (
  <div>
    COMPANY PAGE: {match.params.ticker}
  </div>
);
