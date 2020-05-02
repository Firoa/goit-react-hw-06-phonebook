import React from 'react';
import ContactForm from '../../containers/ContactFormContainer';
import ContactList from '../../containers/ContactListContainer';
import styles from './App.module.css';
import Filter from '../../containers/FilterContainer';
import { CSSTransition } from 'react-transition-group';
import slide from '../ContactList/slide.module.css';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default App;
