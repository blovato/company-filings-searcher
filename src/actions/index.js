import { UPDATE_TICKER } from './constants'

export const updateTicker = ticker => ({ type: UPDATE_TICKER, payload: ticker });
