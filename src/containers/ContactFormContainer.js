import ContactForm from '../components/ContactForm/ContactForm'
import { connect } from 'react-redux';
import * as actions from '../redux/actions';


const mapStateToProps = state => ({   
    contacts: state.contacts,
  });
  
  const mapDispatchToProps = dispatch => ({
    OnAddContact: data => dispatch(actions.addContact(data)),
    writeToLS: data => dispatch(actions.writeToLS(data)),
    readFromLS: data => dispatch(actions.readFromLS(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);