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
    onClickGive: PropTypes.func.isRequired,
    disclaimerParagraphs: PropTypes.array.isRequired,
    smallLogoImgPath: PropTypes.string.isRequired,

    selectedAmountInCents: PropTypes.number.isRequired,
    onAdjustAmountDown: PropTypes.func.isRequired,
    onAdjustAmountDown: PropTypes.func.isRequired,
  };

  constructor(props, _railsContext) {
    super(props);
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
        {this.renderTheoryOfChangeSection()}
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
                 style={{boxShadow: '0 3px 6px #a9a9a9, 0 3px 6px #a9a9a9'}} />
          </div>
        </div>
      </div>
    );
  }

  renderFriendSection () {
    return (
      <div className="friend__section" style={this.friendSectionStyle()}>
        <div className="img__part">
          <div className="img__wrapper">
            <img src={this.props.friendImgUrl}
                 style={{boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23'}} />
          </div>
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
      <div className="mechanics__section" style={{padding: '0 !important'}}>
        <div className="call__to__action">
          {this.props.callToActionSentence}
        </div>
        <div className="amount__selection">
          <div>
            <span>I'll automatically respond with:</span>
            <span className="dollar__amount__indicator"> ${this.props.selectedAmountInCents / 100}</span>
            <span onClick={this.props.onAdjustAmountUp.bind(this)}
              style={{
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: '10px solid white',
                position: 'relative',
                bottom: '30px',
                left: '10px'
            }}></span>
            <span onClick={this.props.onAdjustAmountDown.bind(this)}
              style={{
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid white',
                position: 'relative',
                top: '30px',
                right: '10px'
            }}></span>
          </div>
          <br/>
          <div>Monthly cap: ${this.props.selectedAmountInCents / 100 * 17}</div>
        </div>
      </div>
    );
  }

  renderTheoryOfChangeSection () {
    return (
      <div className="next__step__button__section">
        <div className="theory__of__change__sentence">
          {this.props.theoryOfChangeSentence}
        </div>
        <a onClick={this.props.onClickGive} className="next__step__button">
          Donate Automatically >
        </a>
        <br/>
        <p className="very__secure__wrapper">

          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 71 100"
               style={{
                height: 25,
                width: 25,
                position: 'relative',
              }}>
            <path fill="white" d="M65.5,45V30c0-16.542-13.458-30-30-30s-30,13.458-30,30v15H0v55h71V45H65.5z M13.5,30c0-12.131,9.869-22,22-22
              s22,9.869,22,22v15h-44V30z">
            </path>
          </svg>
          <span style={{
            position: 'relative',
            bottom: 2,
            left: 5
          }}>
            Secured with SSL encryption by Give<span style={{fontWeight: 'bold'}}>When</span>
          </span>
        </p>
      </div>
    );
  }

  renderDisclaimerSection () {
    return (
      <div>
        <div style={{textAlign: 'center', marginTop: 50}}>
          <img src={this.props.smallLogoImgPath} />
        </div>
        <Disclaimer paragraphs={this.props.disclaimerParagraphs} />
      </div>
    );
  }

}

