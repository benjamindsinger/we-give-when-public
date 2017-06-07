import PropTypes from 'prop-types';
import React from 'react';

export default class Letter extends React.Component {
  displayName: 'Letter';

  static propTypes = {
    headline: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
  };

  render () {
    return (
      <div className="section">
        <div className="text narrow big plain">
          <p style={{ fontWeight: 'bold' }}>
            {this.props.headline}
          </p>
          {this.renderParagraphs()}
        </div>
      </div>
    );
  }

  renderParagraphs () {
    return this.props.paragraphs.map((paragraph) => this.renderParagraph);
  }

};
