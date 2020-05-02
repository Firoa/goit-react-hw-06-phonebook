import AppComponent from '../components/App/App';
import { connect } from 'react-redux';
const mapStateToProps = state => ({
  contacts: state.contacts,
});
export default connect(mapStateToProps, null)(AppComponent);
