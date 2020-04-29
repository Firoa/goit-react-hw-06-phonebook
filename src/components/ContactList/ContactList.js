import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ContactList.module.css';
import slide from './slide.module.css';

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

const mapStateToProps = state => ({
  // send a props to component
  contacts: state.contacts,
  filterKey: state.filter,
});

const mapDispatchToProps = dispatch => ({
  OnDeleteContact: data => dispatch(actions.deleteContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
