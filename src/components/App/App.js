import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css';
import Filter from '../Filter/Filter';
import { CSSTransition } from 'react-transition-group';
import slide from '../ContactList/slide.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.formId = uuidv4();
  }

  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');
    if (!!persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts } = this.props;
    console.log(contacts)
    return (
      <div className={styles.app}>
        <ContactForm />
        <CSSTransition
          in={!!(contacts.length > 1)}
          timeout={250}
          classNames={slide}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
       {contacts.length > 0 && <ContactList />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts, 
});
export default connect(mapStateToProps)(App);
