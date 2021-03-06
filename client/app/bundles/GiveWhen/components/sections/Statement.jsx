import PropTypes from 'prop-types';
import React from 'react';

export default class Statement extends React.Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
  };

  render () {
    return (
      <div className="statement color__dark" style={{
        width: '100%',
      }}>
        <div style={{
          width: '70%',
          margin: '0 auto',
          padding: '60px 0',
          textAlign: 'center',
          fontSize: '1.25em'
        }}>
          <p style={{fontWeight: 'bold', display: 'inline', height: '100px'}}>
            {this.props.content}
          </p>
        </div>
      </div>
    );
  }

}
