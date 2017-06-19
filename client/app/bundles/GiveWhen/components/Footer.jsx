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
        <p style={{fontSize: '1.2em', margin: 30}}>created by <a href="/"
          style={{textDecoration: 'none'}}>Give<span style={{fontWeight: 'bold'}}>When</span></a>
        </p>
        <p>
          <a href='/terms' style={{fontSize: '0.9em', textDecoration: 'none'}}>
            Terms of Service
          </a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href='/privacy' style={{fontSize: '0.9em', textDecoration: 'none'}}>
            Privacy Policy
          </a>
        </p>
      </div>
    );
  }

}

