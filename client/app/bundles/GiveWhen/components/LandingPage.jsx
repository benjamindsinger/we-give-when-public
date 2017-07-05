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
    const foeHex = this.props.foeHex;

    return { backgroundColor: foeHex };
  }

  friendSectionStyle () {
    const friendHex = this.props.friendHex;

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
      <div className="foe__section" style={this.foeSectionStyle()}>
        <div className="text__part">
          <div className="section__headline">
            {this.props.foeHeader}
          </div>
          <div className="section__subheadline">
            {this.props.foeSubhead}
          </div>
        </div>
        <div className="img__part">
          <div className="img__wrapper">
            <img src={this.props.foeImgUrl}
                 style={{height: 300, borderRadius: 600}} />
          </div>
        </div>
      </div>
    );
  }

  renderFriendSection () {
    return (
      <div className="friend__section" style={this.friendSectionStyle()}>
        <div className="img__part">
        </div>
        <div className="text__part">
          <div className="section__headline">
            {this.props.friendHeader}
          </div>
          <div className="section__subheadline">
            {this.props.friendSubhead}
          </div>
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

