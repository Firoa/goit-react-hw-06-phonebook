import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css';
import Filter from '../Filter/Filter';
import { CSSTransition } from 'react-transition-group';
import slide from '../ContactList/slide.module.css';

const App = ({ contacts }) => (
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

const mapStateToProps = state => ({
  contacts: state.contacts,
});
export default connect(mapStateToProps, null)(App);
