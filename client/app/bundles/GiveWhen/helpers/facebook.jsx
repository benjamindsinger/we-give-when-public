import React from 'react';

export default class FacebookButton extends React.Component {

  facebookHref () {
    return `https://www.facebook.com/sharer/sharer.php?u=${this.currentUrl()}&src=sdkpreparse`;
  }

  currentUrl () {
    const url = window.location.href;

    return encodeURIComponent(url);
  }

  render () {
    return (
      <div>
        {this.renderLogo()}
        {this.renderButton()}
      </div>
    );
  }

  renderButton () {
    return (
      <div className="fb-share-button"
           data-href={this.currentUrl()}
           data-layout="button_count"
           data-size="large" data-mobile-iframe="true">
        <a target="_blank"
           style={{textDecoration: 'none', color: 'white'}}
           href={this.facebookHref()}>
          Share your support
        </a>
      </div>
    );
  }

  renderLogo () {
    return (
      <img src="/facebook-logo-white.svg"
           style={{
             height: 30,
             width: 30,
             display: 'inline-block',
             float: 'left'
           }}
      />
    );
  }

}
