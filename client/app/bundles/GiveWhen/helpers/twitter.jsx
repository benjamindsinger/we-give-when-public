import React from 'react';

export default {

  href: function (message) {
    const encodedMessage = encodeURIComponent(message);

    return `https://twitter.com/intent/tweet?text=${encodedMessage}`;
  },

  renderLogo: function () {
    return (
      <img src="/twitter-logo-white.svg"
           style={{
            height: 60,
            width: 60,
            display: 'inline',
            position: 'relative',
            bottom: '15px'
          }}
      />
    );
  }

}
