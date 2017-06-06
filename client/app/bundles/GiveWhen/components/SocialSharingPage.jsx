import PropTypes from 'prop-types';
import React from 'react';
import Twitter from '../helpers/twitter.jsx';

export default class SocialSharingPage extends React.Component {

  static propTypes = {
    twitterMessage: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  mailTo () {
    const subject = 'Fight for $15';
    const body = 'Hey: I just joined the campaign and I hope you will too. Let\'s fight back every time an anti-living wage corporation like McDonalds writes a campaign check: https://wegivewhen.com/campaigns/fight-for-15';

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    return `mailto:?subject=${encodedSubject}&body=${encodedBody}`;
  }

  render () {
    return (
      <div className="personal__details__form__wrapper color_scheme__white_blue card__details__form below__fixed__navbar"
           style={{padding: 30}}>
        <div id="fb-root"></div>
        <div className="thank__you">
          <p className="font__medium">
            Thanks for your donation!
          </p>
          <p className="font__medium">
            Now please show your support and build the movement:
          </p>
        </div>

        <div className="social__sharing__button facebook">
          <iframe style={{border: 'none', overflow: 'hidden'}}
                  src="https://www.facebook.com/plugins/share_button.php?href=https://wegivewhen.com/campaigns/fight-for-15&layout=button_count&size=large&mobile_iframe=true&width=106&height=28&appId">
          </iframe>
        </div>

        <a className="social__sharing__button twitter"
             href={Twitter.href(this.props.twitterMessage)}>
          {Twitter.renderLogo()}
          <span style={{
            position: 'relative',
            bottom: '36px'
          }}>
            Tweet your support
          </span>
        </a>

        <a className="social__sharing__button email"
           href={this.mailTo()}>
          <span>Email</span>
        </a>
      </div>
    );
  }

};
