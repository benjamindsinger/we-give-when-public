import PropTypes from 'prop-types';
import React from 'react';

export default class Footer extends React.Component {

  render () {
    return (
      <div style={{
        padding: 20,
        textAlign: 'center',
        backgroundColor: '#f1f6f9',
        color: '#686d6e'
      }}>
        <p>created by <span style={{fontWeight: 'bold'}}>Give When</span></p>
      </div>
    );
  }

};

