import PropTypes from 'prop-types';
import React from 'react';

export default class SocialSharingPage extends React.Component {

  render () {
    return (
      <div className="personal__details__form__wrapper color_scheme__white_blue card__details__form below__fixed__navbar"
           style={{padding: 30}}>
        <div className="thank__you">
          <p className="font__medium">
            Thanks for your donation!
          </p>
          <p className="font__medium">
            Now please show your support and build the movement:
          </p>
        </div>
        <div className="social__sharing__button facebook">
          {this.renderFacebookLogo()}
          <span>Share your support</span>
        </div>
        <div className="social__sharing__button twitter">
          {this.renderTwitterLogo()}
          <span>Tweet your support</span>
        </div>
        <div className="social__sharing__button email">
          <span>Email</span>
        </div>
      </div>
    );
  }

  renderTwitterLogo () {
    return (
      <img src="/twitter-logo-white.svg"
           style={{
            height: 60,
            width: 60,
            display: 'block',
            float: 'left',
            position: 'relative',
            bottom: '15px'
          }}
      />
    );
  }

  renderFacebookLogo () {
    return (
      <img src="/facebook-logo-white.svg"
           style={{
            height: 40,
            width: 40,
            display: 'block',
            float: 'left',
            position: 'relative',
            bottom: '5px'
          }}
      />
    );
  }


};
