import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onChangeFilter, filter }) => (
  <div>
    <form className={styles.filter}>
      <label className={styles.label}>
        <h2 className={styles.title}>Find contacts by name</h2>
        <input
          type="text"
          placeholder="Enter contact"
          value={filter}
          onChange={e => onChangeFilter(e.target.value)}
          name="filter"
          className={styles.FormInput}
        ></input>
      </label>
    </form>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,  
};

export default Filter;
