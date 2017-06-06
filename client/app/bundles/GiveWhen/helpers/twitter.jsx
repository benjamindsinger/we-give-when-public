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
            height: 50,
            width: 50,
            display: 'inline-block',
            float: 'left',
            position: 'relative',
            bottom: 10,
            right: 10
          }}
      />
    );
  }

}
