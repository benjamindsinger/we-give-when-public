import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

import PersonalDetailsForm from './PersonalDetailsForm.jsx';
import CardDetailsForm from './CardDetailsForm.jsx';
import GiveWhenBlocks from './GiveWhenBlocks.jsx';

import Footer from './Footer.jsx';
import Header from './Header.jsx';

import Money from '../helpers/money.jsx';
import Buttons from '../helpers/buttons.jsx';
import UserEvents from '../helpers/user_events.jsx';
import DataCuts from '../helpers/data_cuts.jsx';

export default class CrowdFundPage extends React.Component {
  displayName: 'CrowdFundPage';

  static propTypes = {
    crowdFundId: PropTypes.number.isRequired,
    crowdFundType: PropTypes.string.isRequired,
    stripePublishableKey: PropTypes.string.isRequired,
    funderRequiredDetails: PropTypes.array.isRequired,

    // Social
    twitterMessage: PropTypes.string,
    suggestedEmailSubject: PropTypes.string,
    suggestedEmailBody: PropTypes.string,

    // Initial
    initialAmountInCents: PropTypes.number,
    initialMonthlyMaximumInCents: PropTypes.number,

    // Colors
    colorScheme: PropTypes.string.isRequired,

    // Content

    // -- Content, header
    headerGivePhrase: PropTypes.string.isRequired,
    headerWhenPhrase: PropTypes.string.isRequired,
    headerLogoImgPath: PropTypes.string.isRequired,

    // -- Content, headline
    headline: PropTypes.string.isRequired,
    subheadline: PropTypes.string.isRequired,
    headlineImgPath: PropTypes.string.isRequired,

    // -- Content, give when blocks
    giveStatement: PropTypes.string.isRequired,
    whenStatement: PropTypes.string.isRequired,
    progressStatusPhrase: PropTypes.string.isRequired,
    progressGoalPhrase: PropTypes.string.isRequired,
    progressLeftPhrase: PropTypes.string.isRequired,
    progressTimePhrase: PropTypes.string.isRequired,
  };

  constructor(props, _railsContext) {
    super(props);

    this.renderAmountButton = Buttons.renderAmountButton.bind(this);
    this.renderMaximumAmountButton = Buttons.renderMaximumAmountButton.bind(this);
    this.renderCustomAmountButton = Buttons.renderCustomAmountButton.bind(this);
    this.renderCustomMaximumAmountButton = Buttons.renderCustomMaximumAmountButton.bind(this);

    this.state = {
      step: 0,
      errorMessages: [],

      // Amount summary
      selectedAmountInCents: this.props.initialAmountInCents,
      selectedMonthlyMaximumInCents: this.props.initialMonthlyMaximumInCents,
      customAmountEntered: false,
      customMaximumEntered: false,
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

  checkRequiredField (field) {
    return (this.state[field]);
  }

  colorSchemeClassName () {
    return `color_scheme__${this.props.colorScheme}`;
  }

  render () {
    const step = this.state.step;

    switch (step) {
      case 0:  return this.renderSignUpPage();
      case 1:  return this.renderPersonalDetailsPage();
      case 2:  return this.renderCardDetailsPage();
      default: return this.renderSignUpPage();
    }
  }

  renderSignUpPage () {
    return (
      <div className={this.colorSchemeClassName()}>
        {this.renderHeaderWithActionButton()}
        {this.renderHeadlineSection()}
        {this.renderGiveWhenBlocks()}
        {this.renderStatementOfPurpose()}
        {this.renderBenefitStatement()}
        {this.renderClosingLetter()}
        {this.renderExtraSentenceForMobile()}
        {this.renderFooter()}
      </div>
    );
  }

  renderHeaderWithActionButton () {
    return (
      <Header givePhrase={this.props.headerGivePhrase}
        whenPhrase={this.props.headerWhenPhrase}
        logoImgPath={this.props.headerLogoImgPath}
        onClickActionButton={UserEvents.onChangeStep.bind(this, 1)}
        showButton={true}
      />
    );
  }

  renderHeadlineSection () {
    return (
      <div className="section flex headline__section below__fixed__navbar">
        <div className="text color__bright">
          <h1>
            {this.props.headline}
          </h1>
          <div className="divider__line"></div>
          <p>
            {this.props.subheadline}
          </p>
        </div>

        <img src={this.props.headlineImgPath} />
      </div>
    );
  }

  renderGiveWhenBlocks () {
    return (
      <GiveWhenBlocks crowdFundType={this.props.crowdFundType}
                      giveStatement={this.props.giveStatement}
                      whenStatement={this.props.whenStatement}
                      givePhrase={this.props.givePhrase}
                      progressStatusPhrase={this.props.progressStatusPhrase}
                      progressGoalPhrase={this.props.progressGoalPhrase}
                      progressLeftPhrase={this.props.progressLeftPhrase}
                      progressTimePhrase={this.props.progressTimePhrase}
      />
    );
  }

  renderPersonalDetailsPage () {
    return (
      <div className="color_scheme__green_blue">
        {this.renderHeader(false)}

        <PersonalDetailsForm
          /* UI functions */
          onType={UserEvents.onTypeFormInput.bind(this)}
          onClickEdit={UserEvents.onChangeStep.bind(this, 0)}
          onClickContinue={UserEvents.onChangeStepFromPersonalDetails.bind(this, 2, this.props.funderRequiredDetails)}
          errorMessages={this.state.errorMessages}

          /* Personal details */
          funderRequiredDetails={this.props.funderRequiredDetails}
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
          selectedMonthlyMaximumInCents={this.state.selectedMonthlyMaximumInCents}
        />

        {this.renderDisclaimer()}
        {this.renderFooter()}
      </div>
    );
  }

  renderCardDetailsPage () {
    return (
      <div className="color_scheme__green_blue">
        {this.renderHeader(false)}

        <CardDetailsForm
          /* UI functions */
          onType={UserEvents.onTypeFormInput.bind(this)}
          onClickEdit={UserEvents.onChangeStep.bind(this, 0)}

          /* Data for form */
          funderDetails={DataCuts.funderDetails(this.state, this.props)}
          crowdFundMembershipDetails={DataCuts.crowdFundMembershipDetails(this.state, this.props)}
          coverFees={this.state.coverFees}
          stripePublishableKey={this.props.stripePublishableKey}

          /* Selected amounts */
          selectedAmountInCents={this.state.selectedAmountInCents}
          selectedMonthlyMaximumInCents={this.state.selectedMonthlyMaximumInCents}

          /* Social sharing */
          twitterMessage={this.props.twitterMessage}
          suggestedEmailSubject={this.props.suggestedEmailSubject}
          suggestedEmailBody={this.props.suggestedEmailBody}

          /* Campaign type */
          crowdFundType={this.props.crowdFundType}
        />

        {this.renderDisclaimer()}
        {this.renderFooter()}
      </div>
    );
  }

  renderBenefitStatement () {
    return (
      <div style={{
        width: '100%',
        backgroundColor: '#0948bc',
        color: 'white'
      }}>
        <div style={{
          width: '70%',
          margin: '0 auto',
          padding: '60px 0',
          textAlign: 'center',
          fontSize: '1.25em'
        }}>
          <p style={{fontWeight: 'bold', display: 'inline', height: '100px'}}>
            <span className="action_button">Sign up</span> as an automatic responder and get monthly updates from one of the organizers we hire. ​
          </p>
        </div>
      </div>
    );
  }

  renderStatementOfPurpose () {
    return (
      <div className="section flex">
        <div className="text color__calm narrow big">
          <h1 className="subheadline">
            As long as big business pulls the strings in Springfield, we'll never raise the minimum wage
          </h1>

          <br/>

          <div style={{
            border: '2px solid white'
          }}></div>

          <br/>

          <div style={{fontSize: '1.25em'}}>
            <p>
              Walmart, McDonalds, the Chamber of Commerce, the Restaurant Association, and the Retail Merchants are 5 groups we’re up against.
            </p>
            <p>
              Every time they write a check of $100 or more, we need 100 people to automatically chip in to fight back.
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderClosingLetter () {
    return (
      <div>
        <div className="section">
          <div className="text narrow big plain">

            <p style={{ fontWeight: 'bold' }}>
              We need to respond immediately so our candidates can campaign this summer in the primaries.
            </p>

            <p>
              At the end of each month, depending on the number of checks written by corporate interests and the monthly maximum donation you set for yourself, we'll process your donation and put it to work immediately to campaign for our candidates.
            </p>

            <p>At the end of each month, based on the number of checks written by corporate interests and your monthly maximum donation, we’ll process your donation and put it to work immediately to campaign for our candidates.</p>

          </div>

        </div>
        {this.renderDisclaimer()}
      </div>
    );
  }

  renderDisclaimer () {
    return (
      <div className="section">
        <div className="text narrow big plain">
          <div style={{
            border: '1px solid #0948bc',
            padding: 20,
          }}>
            <p>Funds go to the Committee to Elect Will Guzzardi, which supports the Fight for $15 and donates to candidates who also support the Fight for $15.</p>

            <p>Anti-living-wage corporate donations are tracked via Illinois Sunshine database, an open portal that tracks campaign finance.</p>

            <p>Paid for by the Committee to Elect Will Guzzardi. A copy of our report filed with the State Board of Elections is (or will be) available on the Board's official website (www.elections.il.gov) or for purchase from the State Board of Elections, Springfield, Illinois.</p>
          </div>
        </div>
      </div>
    );
  }

  renderExtraSentenceForMobile () {
    const whenPhrase = "Every time an anti-living-wage corporation writes a campaign check,";
    const givePhrase = "fight back";

    return (
      <div className="section mobile__only sentence reverse__colors"
           style={{
            margin: 0,
            padding: 30
           }}>
        <div className="text">
          <div className="sentence" style={{textAlign: 'center'}}>
            <p>
              {whenPhrase} <span className="action_button"
                                            style={{padding: 10, marginRight: 2}}
                    onClick={UserEvents.onChangeStep.bind(this, 1)}>
                {givePhrase} →
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderFooter () {
    return (
      <Footer />
    );
  }

}
