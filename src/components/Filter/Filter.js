import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import styles from './Filter.module.css';

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

const mapStateToProps = state => ({
  filter: state.filter,
});
const mapDispatchToProps = dispatch => ({
  onChangeFilter: data => dispatch(actions.onChangeFilter(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
