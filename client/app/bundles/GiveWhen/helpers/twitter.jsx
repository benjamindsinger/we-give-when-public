import React from 'react';

export default {

  renderButton: function (message) {
    const encodedMessage = encodeURIComponent(message);

    const href = `https://twitter.com/intent/tweet?text=${encodedMessage}`;

    return (
      <a className="social__sharing__button twitter"
           href={href}
           target="_blank">
           <img src="/twitter-logo-white.svg"
              style={{
                height: 50,
                width: 50,
                display: 'inline-block',
                float: 'left',
                position: 'relative',
                bottom: 10,
                right: 10
              }}
          />
          <div>Tweet your support</div>
      </a>
    );
  }

};
