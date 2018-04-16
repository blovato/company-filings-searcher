import React from 'react';
import PropTypes from 'prop-types';
import './search.css';

const Search = ({ ticker, updateTicker }) => {
  return (
    <div>
      <input value={ticker} onChange={(e) => updateTicker(e.target.value)} />
    </div>
  );
};

Search.propTypes = {
  ticker: PropTypes.string,
  updateTicker: PropTypes.func,
};

export default Search;
