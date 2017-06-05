import PropTypes from 'prop-types';
import React from 'react';

export default class Header extends React.Component {

  render () {
    return (
      <div className="header">

        <div className="logo" style={{ margin: '20px', height: '50px' }}>
          <img src={this.props.logoImgPath}
               style={{ margin: '10px' }}/>
        </div>

        <div id="sentence">
          <p>
            <span className="action_button">{this.props.givePhrase}</span> {this.props.whenPhrase}.
          </p>
        </div>

      </div>
    );
  }

};

Header.propTypes = {
  givePhrase: React.PropTypes.string.isRequired,
  whenPhrase: React.PropTypes.string.isRequired,
  logoImgPath: React.PropTypes.string.isRequired,
};
