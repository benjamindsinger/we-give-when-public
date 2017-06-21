import PropTypes from 'prop-types';
import React from 'react';

export default class TwoPanelContent extends React.Component {
  displayName: 'TwoPanelContent';

  static propTypes = {
    headline: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
    imgUrl: PropTypes.string.isRequired,
  };

  render () {
    return (
      <div className="section flex">
        <div className="text color__bright">
          <h3 className="content_headline">
            {this.props.headline}
          </h3>

          <div style={{
            border: '2px solid white',
            width: '100%',
            margin: '10px 0'
          }} />

          {this.props.paragraphs.map(this.renderParagraph)}
        </div>

        <div className="text" style={{
          background: `url("${this.props.imgUrl}")`,
          backgroundSize: 'cover',
          minHeight: 400
        }}></div>
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
