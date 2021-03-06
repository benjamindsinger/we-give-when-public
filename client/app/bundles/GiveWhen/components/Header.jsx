import PropTypes from 'prop-types';
import React from 'react';

export default class Header extends React.Component {

  static propTypes = {
    logoImgPath: PropTypes.string.isRequired,
    logoHeight: PropTypes.number.isRequired,

    // Header button can be active, just plain text, or no sentence
    showButton: PropTypes.bool,
    whenPhrase: PropTypes.string,
    givePhrase: PropTypes.string,
    hideSentence: PropTypes.bool,
    onClickActionButton: PropTypes.func,
  };

  render () {
    return (
      <div className="header">
        {this.renderLogo()}
        {this.renderActionSentence()}
      </div>
    );
  }

  renderLogo () {
    return (
      <div className="logo">
        <img src={this.props.logoImgPath}
             style={{height: this.props.logoHeight}}/>
      </div>
    );
  }

  renderActionSentence () {
    if (this.props.hideSentence) return null;

    return (this.props.showButton) ? this.renderSentenceWithButton()
                                   : this.renderPlainSentence();
  }

  renderSentenceWithButton () {
    return (
      <div className="sentence">
        <p>
          {this.props.whenPhrase} <span className="action_button"
                                        style={{padding: 10, marginRight: 2}}
                onClick={this.props.onClickActionButton}>
            {this.props.givePhrase} →
          </span>
        </p>
      </div>
    );
  }

  renderPlainSentence () {
    return (
      <div className="sentence plain">
        <p>
          {this.props.whenPhrase} {this.props.givePhrase}.
        </p>
      </div>
    );
  }

}
