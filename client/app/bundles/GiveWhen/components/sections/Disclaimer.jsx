import PropTypes from 'prop-types';
import React from 'react';

export default class Disclaimer extends React.Component {
  displayName: 'Disclaimer';

  static propTypes = {
    paragraphs: PropTypes.array.isRequired,
  };

  render () {
    return (
      <div className="section">
        <div className="text narrow big plain">
          <div style={{
            border: '1px solid #0948bc',
            padding: 20,
          }}>
          {this.props.paragraphs.map(this.renderParagraph)}
          </div>
        </div>
      </div>
    );
  }

  renderParagraph (paragraph) {
    return (
      <p>{paragraph}</p>
    );
  }

};
