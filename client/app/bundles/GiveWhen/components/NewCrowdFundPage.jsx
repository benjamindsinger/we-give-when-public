import PropTypes from 'prop-types';
import React from 'react';
import airbrakeJs from 'airbrake-js';

import PersonalDetailsForm from './PersonalDetailsForm.jsx';
import CardDetailsForm from './CardDetailsForm.jsx';
import LandingPage from './LandingPage.jsx';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Disclaimer from './sections/Disclaimer.jsx';

import UserEvents from '../helpers/user_events.jsx';
import DataCuts from '../helpers/data_cuts.jsx';

export default class NewCrowdFundPage extends React.Component {

  static propTypes = {
    crowdFundId: PropTypes.number.isRequired,
    crowdFundType: PropTypes.string.isRequired,
    funderRequiredDetails: PropTypes.array.isRequired,
    stripePublishableKey: PropTypes.string.isRequired,
    airbrakeProjectId: PropTypes.string.isRequired,
    airbrakeProjectKey: PropTypes.string.isRequired,

    // Social
    twitterMessage: PropTypes.string,
    hideFacebook: PropTypes.bool,
    suggestedEmailSubject: PropTypes.string,
    suggestedEmailBody: PropTypes.string,

    // Defaults
    defaultSelectedAmountInCents: PropTypes.number.isRequired,
    monthlyMultiplier: PropTypes.number,
    optionsInCents: PropTypes.array,
    monthlyMaxOptionsInCents: PropTypes.array,

    // Content
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
    smallLogoImgPath: PropTypes.string.isRequired,
    signUpButtonColor: PropTypes.string,

    // Header
    headerGivePhrase: PropTypes.string.isRequired,
    headerWhenPhrase: PropTypes.string.isRequired,
    headerLogoImgPath: PropTypes.string.isRequired,
    headerLogoImgSize: PropTypes.number.isRequired,
  };

  constructor(props, _railsContext) {
    super(props);

    this.onClickGive = UserEvents.onChangeStep.bind(this, 1);

    this.airbrake = new airbrakeJs({
      projectId: this.props.airbrakeProjectId,
      projectKey: this.props.airbrakeProjectKey
    });

    this.state = {
      step: 0,
      errorMessages: [],

      // Amount summary
      selectedAmountInCents: this.props.defaultSelectedAmountInCents,
      monthlyMultiplier: this.props.monthlyMultiplier,
      coverFees: true,

      // Form details
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      usState: '',
      zip: '',
      phone: '',
      occupation: '',
      employer: '',
    };
  }

  selectedMonthlyMaximumInCents () {
    return (this.state.selectedAmountInCents * this.props.monthlyMultiplier);
  }

  checkRequiredField (field) {
    return (this.state[field]);
  }

  notifyAirbrake (err) {
    this.airbrake.notify(err);
  }

  onAdjustAmountUp () {
    const defaultSelectedAmount = this.props.defaultSelectedAmountInCents;
    const selectedAmountInCents = this.state.selectedAmountInCents;

    this.setState({
      selectedAmountInCents: selectedAmountInCents + defaultSelectedAmount
    });
  }

  onAdjustAmountDown () {
    const defaultSelectedAmount = this.props.defaultSelectedAmountInCents;
    const selectedAmountInCents = this.state.selectedAmountInCents;

    if (defaultSelectedAmount > selectedAmountInCents - defaultSelectedAmount) return;

    this.setState({
      selectedAmountInCents: selectedAmountInCents - defaultSelectedAmount
    });
  }

  render () {
    try {
      const step = this.state.step;

      switch (step) {
      case 0:  return this.renderLandingPage();
      case 1:  return this.renderPersonalDetailsPage();
      case 2:  return this.renderCardDetailsPage();
      default: return this.renderLandingPage();
      }
    } catch (err) {
      this.notifyAirbrake(err);
      throw err;
    }
  }

  renderLandingPage () {
    return (
      <LandingPage
        foeHeader={this.props.foeHeader}
        foeSubhead={this.props.foeSubhead}
        foeImgUrl={this.props.foeImgUrl}
        foeHex={this.props.foeHex}
        friendHeader={this.props.friendHeader}
        friendSubhead={this.props.friendSubhead}
        friendImgUrl={this.props.friendImgUrl}
        friendHex={this.props.friendHex}
        callToActionSentence={this.props.callToActionSentence}
        theoryOfChangeSentence={this.props.theoryOfChangeSentence}
        onClickGive={this.onClickGive}
        disclaimerParagraphs={this.props.disclaimerParagraphs}
        smallLogoImgPath={this.props.smallLogoImgPath}
        signUpButtonColor={this.props.signUpButtonColor}

        selectedAmountInCents={this.state.selectedAmountInCents}
        monthlyMultiplier={this.props.monthlyMultiplier}
        onAdjustAmountUp={this.onAdjustAmountUp.bind(this)}
        onAdjustAmountDown={this.onAdjustAmountDown.bind(this)}
      />
    );
  }

  renderPersonalDetailsPage () {
    return (
      <div>
        {this.renderHeaderWithoutActionButton()}

        <PersonalDetailsForm
          /* UI functions */
          onType={UserEvents.onTypeFormInput.bind(this)}
          onClickEdit={UserEvents.onChangeStep.bind(this, 0)}
          onClickContinue={UserEvents.onChangeStepFromPersonalDetails.bind(this, 2, this.props.funderRequiredDetails)}
          errorMessages={this.state.errorMessages}

          /* Personal details */
          funderRequiredDetails={this.props.funderRequiredDetails}
          funderDetails={DataCuts.funderDetails(this.state, this.props)}
          email={this.state.email}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          address={this.state.address}
          city={this.state.city}
          usState={this.state.usState}
          zip={this.state.zip}
          phone={this.state.phone}
          occupation={this.state.occupation}
          employer={this.state.employer}

          /* Selected amounts */
          crowdFundType={this.props.crowdFundType}
          selectedAmountInCents={this.state.selectedAmountInCents}
          selectedMonthlyMaximumInCents={this.selectedMonthlyMaximumInCents()}
        />

        {this.renderDisclaimer()}
        <Footer />
      </div>
    );
  }

  renderCardDetailsPage () {
    return (
      <div>
        {this.renderHeaderWithoutActionButton()}

        <CardDetailsForm
          /* UI functions */
          onType={UserEvents.onTypeFormInput.bind(this)}
          onClickEdit={UserEvents.onChangeStep.bind(this, 0)}
          notifyAirbrake={this.notifyAirbrake.bind(this)}

          /* Data for form */
          funderDetails={DataCuts.funderDetails(this.state, this.props)}
          crowdFundMembershipDetails={DataCuts.crowdFundMembershipDetails(this.state, this.props)}
          coverFees={this.state.coverFees}
          stripePublishableKey={this.props.stripePublishableKey}

          /* Selected amounts */
          selectedAmountInCents={this.state.selectedAmountInCents}
          selectedMonthlyMaximumInCents={this.selectedMonthlyMaximumInCents()}

          /* Social sharing */
          twitterMessage={this.props.twitterMessage}
          hideFacebook={this.props.hideFacebook}
          suggestedEmailSubject={this.props.suggestedEmailSubject}
          suggestedEmailBody={this.props.suggestedEmailBody}

          /* Campaign type */
          crowdFundType={this.props.crowdFundType}
        />

        {this.renderDisclaimer()}
        <Footer />
      </div>
    );
  }

  renderDisclaimer () {
    return (
      <div className="disclaimer__section">
        <div id="img__wrapper">
          <img src={this.props.smallLogoImgPath} />
        </div>
        <Disclaimer paragraphs={this.props.disclaimerParagraphs} />
      </div>
    );
  }

  renderHeaderWithoutActionButton () {
    return (
      <Header
        logoImgPath={this.props.headerLogoImgPath}
        hideSentence={true}
      />
    );
  }

}
