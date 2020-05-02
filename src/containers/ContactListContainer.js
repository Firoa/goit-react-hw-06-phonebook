import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import ContactList from '../components/ContactList/ContactList'

const mapStateToProps = state => ({
    // send a props to component
    contacts: state.contacts,
    filterKey: state.filter,
  });
  
  const mapDispatchToProps = dispatch => ({
    OnDeleteContact: data => dispatch(actions.deleteContact(data)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactList);