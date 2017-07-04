import PropTypes from 'prop-types';
import React from 'react';

export default class LandingPage extends React.Component {

  static propTypes = {
    foeHeader: PropTypes.string.isRequired,
    foeSubhead: PropTypes.string.isRequired,
    foeImgUrl: PropTypes.string,
    foeHex: PropTypes.string,
    friendHeader: PropTypes.string.isRequired,
    friendSubhead: PropTypes.string.isRequired,
    friendImgUrl: PropTypes.string,
    friendHex: PropTypes.string,
    callToActionSentence: PropTypes.string.isRequired,
    theoryOfChangeSentence: PropTypes.string.isRequired,
    disclaimerParagraphs: PropTypes.array.isRequired,
  }

  render () {
    return null;
  }

}

