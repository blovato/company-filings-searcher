import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { updateTicker } from '../../actions';
import Search from './Search';


const mapStateToProps = ({ ticker }) => ({
  ticker,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  updateTicker,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
