import PropTypes from 'prop-types';
import React from 'react';

export default class Disclaimer extends React.Component {

  static propTypes = {
    paragraphs: PropTypes.array.isRequired,
  };

  render () {
    if (this.props.paragraphs.length === 0) return null;

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
      <p key={paragraph.substring(0,9)}>
        {paragraph}
      </p>
    );
  }

}
