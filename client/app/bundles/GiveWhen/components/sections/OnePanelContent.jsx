import PropTypes from 'prop-types';
import React from 'react';

export default class OnePanelContent extends React.Component {
  displayName: 'OnePanelContent';

  static propTypes = {
    headline: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
  };

  render () {
    return (
      <div className="section flex">
        <div className="text color__calm narrow big">
          <h1 className="subheadline">
            {this.props.headline}
          </h1>

          <br/>

          <div style={{
            border: '2px solid white'
          }}></div>

          <br/>

          <div style={{fontSize: '1.25em'}}>
            {this.props.paragraphs.map((paragraph) => this.renderParagraph)}
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
