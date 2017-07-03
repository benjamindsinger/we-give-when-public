import PropTypes from 'prop-types';
import React from 'react';

export default class Letter extends React.Component {

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
          {this.props.paragraphs.map(this.renderParagraph)}
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
