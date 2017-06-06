import PropTypes from 'prop-types';
import React from 'react';
import Twitter from '../helpers/twitter.jsx';
import Facebook from '../helpers/facebook.jsx';

export default class SocialSharingPage extends React.Component {

  static propTypes = {
    twitterMessage: PropTypes.string,
    suggestedEmailSubject: PropTypes.string,
    suggestedEmailBody: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  mailTo () {
    const subject = encodeURIComponent(this.props.suggestedEmailSubject);
    const body = encodeURIComponent(this.props.suggestedEmailBody);

    return `mailto:?subject=${subject}&body=${body}`;
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
                  src={Facebook.iframeSrc()}>
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
