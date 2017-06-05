import PropTypes from 'prop-types';
import React from 'react';

export default class Header extends React.Component {

  static propTypes = {
    showButton: PropTypes.bool.isRequired,
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
      <div className="logo" style={{ margin: '20px', height: '50px' }}>
        <img src={this.props.logoImgPath}
             style={{ margin: '10px' }}/>
      </div>
    );
  }

  renderActionSentence () {
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
      <div className="sentence">
        <p>
          {this.props.whenPhrase} {this.props.givePhrase}.
        </p>
      </div>
    );
  }

};

Header.propTypes = {
  givePhrase: React.PropTypes.string.isRequired,
  whenPhrase: React.PropTypes.string.isRequired,
  logoImgPath: React.PropTypes.string.isRequired,
  onClickActionButton: React.PropTypes.func.isRequired,
};
