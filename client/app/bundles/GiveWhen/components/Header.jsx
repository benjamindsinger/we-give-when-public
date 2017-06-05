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

        <div className="sentence">
          <p>
            {this.props.whenPhrase} <span className="action_button"
                                          style={{padding: 10, marginRight: 2}}
                  onClick={this.props.onClickActionButton}>
              {this.props.givePhrase} →
            </span>
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
  onClickActionButton: React.PropTypes.func.isRequired,
};
