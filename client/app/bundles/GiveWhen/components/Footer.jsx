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
        <p style={{fontSize: '1.2em', margin: 30}}>created by <span style={{fontWeight: 'bold'}}>Give When</span></p>
        <p>
          <a href='/terms' style={{fontSize: '0.9em'}}>
            Terms of Service
          </a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href='/privacy' style={{fontSize: '0.9em'}}>
            Privacy Policy
          </a>
        </p>
      </div>
    );
  }

};

