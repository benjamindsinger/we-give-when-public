import PropTypes from 'prop-types';
import React from 'react';

export default class LandingPage extends React.Component {

  static propTypes = {
    foeHeader: PropTypes.string.isRequired,
    foeSubhead: PropTypes.string.isRequired,
    foeImgUrl: PropTypes.string.isRequired,
    foeHex: PropTypes.string.isRequired,
    friendHeader: PropTypes.string.isRequired,
    friendSubhead: PropTypes.string.isRequired,
    friendImgUrl: PropTypes.string.isRequired,
    friendHex: PropTypes.string.isRequired,
    callToActionSentence: PropTypes.string.isRequired,
    theoryOfChangeSentence: PropTypes.string.isRequired,
    disclaimerParagraphs: PropTypes.string.isRequired,
  }

  render () {
    return null;
  }

}

