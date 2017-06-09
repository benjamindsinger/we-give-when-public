import PropTypes from 'prop-types';
import React from 'react';

export default class OnePanelContent extends React.Component {
  displayName: 'OnePanelContent';

  static propTypes = {
    headline: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
    colorType: PropTypes.string
  };

  divClassName () {
    return `text ${this.colorClassName()} narrow big`;
  }

  colorClassName () {
    if (this.props.colorType === 'color__bright') return 'color__bright';

    return 'color__calm';
  }

  render () {
    return (
      <div className="section flex">
        <div className={this.divClassName()}>
          <h1 className="subheadline">
            {this.props.headline}
          </h1>

          <br/>

          <div style={{
            border: '2px solid white'
          }}></div>

          <br/>

          <div style={{fontSize: '1.25em'}}>
            {this.props.paragraphs.map(this.renderParagraph)}
          </div>
        </div>
      </div>
    );
  }

  renderParagraph (paragraph) {
    return (
      <p key={paragraph.substring(0,20)}>
        {paragraph}
      </p>
    );
  }

};
