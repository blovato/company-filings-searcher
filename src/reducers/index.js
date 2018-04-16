import { UPDATE_TICKER } from '../actions/constants';

const initialState = {
  ticker: '',
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TICKER:
      return { ...state, ticker: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
