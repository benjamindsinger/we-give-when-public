import PropTypes from 'prop-types';
import React from 'react';

import Disclaimer from './sections/Disclaimer.jsx';
import Footer from './Footer.jsx';

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

  foeSectionStyle () {
    const foeImgUrl = this.props.foeImgUrl;
    const foeHex = this.props.foeHex;

    if (foeImgUrl) return { backgroundImage: `url(${foeImgUrl})` };

    return { backgroundColor: foeHex };
  }

  friendSectionStyle () {
    const friendImgUrl = this.props.friendImgUrl;
    const friendHex = this.props.friendHex;

    if (friendImgUrl) return { backgroundImage: `url(${friendImgUrl})` };

    return { backgroundColor: friendHex };
  }

  render () {
    return (
      <div className="new__crowd__fund__page">
        {this.renderFoeSection()}
        {this.renderFriendSection()}
        {this.renderMechanicsSection()}
        {this.renderDisclaimerSection()}
        <Footer />
      </div>
    );
  }

  renderFoeSection () {
    return (
      <div style={this.foeSectionStyle()}>
        <div className="section__headline">
          {this.props.foeHeader}
        </div>
        <div className="section__subheadline">
          {this.props.foeSubhead}
        </div>
      </div>
    );
  }

  renderFriendSection () {
    return (
      <div style={this.friendSectionStyle()}>
        <div className="section__headline">
          {this.props.friendHeader}
        </div>
        <div className="section__subheadline">
          {this.props.friendSubhead}
        </div>
      </div>
    );
  }

  renderMechanicsSection () {
    return (
      <div>
        <div className="call__to__action">
          {this.props.callToActionSentence}
        </div>
        <div className="amount__selection">
          I'll automatically respond with: $2.
        </div>
        <div className="theory__of__change__sentence">
          {this.props.theoryOfChangeSentence}
        </div>
      </div>
    );
  }

  renderDisclaimerSection () {
    return (<Disclaimer paragraphs={this.props.disclaimerParagraphs} />);
  }

}

