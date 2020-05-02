import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ContactList.module.css';
import slide from './slide.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ filterKey, OnDeleteContact, contacts }) => {
  let renderList = [...contacts];
  if (filterKey !== '') {
    renderList = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterKey.toLowerCase()),
    );
  }
  return (
    <div className={styles.contact_field}>
      <TransitionGroup component="ul" className={styles.contact_list}>
        {renderList.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            classNames={slide}
            timeout={250}
            unmountOnExit
          >
            <li key={id} className={styles.contactListItem}>
              <p className={styles.ItemInfo}>{name}</p>
              <p className={styles.ItemInfo}>{number}</p>
              <button
                className={styles.button}
                onClick={() => OnDeleteContact(id)}
                type="button"
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

ContactList.propTypes = {
  filterKey: PropTypes.string.isRequired,
  OnDeleteContact: PropTypes.func,  
  contacts: PropTypes.array
};

export default ContactList;
