import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Filter from '../components/Filter/Filter';

const mapStateToProps = state => ({
  filter: state.filter,
});
const mapDispatchToProps = dispatch => ({
  onChangeFilter: data => dispatch(actions.onChangeFilter(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
