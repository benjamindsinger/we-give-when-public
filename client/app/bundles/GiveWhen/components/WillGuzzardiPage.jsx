import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

import PersonalDetailsForm from './PersonalDetailsForm.jsx';
import CardDetailsForm from './CardDetailsForm.jsx';

import Footer from './Footer.jsx';
import Header from './Header.jsx';

import Money from '../helpers/money.jsx';

export default class WillGuzzardiPage extends React.Component {
  displayName: 'WillGuzzardiPage';

  static propTypes = {
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      step: 0,

      // Amount summary
      selectedAmountInCents: 300,
      selectedMonthlyMaximumInCents: 4500,
      customAmountEntered: false,
      customMaximumEntered: false,
      coverFees: true,


      // Form details
      errorMessages: [],
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

  errorsToErrorMessages (errors) {
    const errorsToNames = {
      'email': 'email',
      'firstName': 'first name',
      'lastName': 'last name',
      'address': 'address',
      'city': 'city',
      'zip': 'ZIP code',
      'phone': 'phone number',
      'occupation': 'occupation',
      'employer': 'employer'
    };

    return errors.map((error) => {
      return  `Please enter your ${errorsToNames[error]}.`;
    });
  }

  onChangeStep (step) {
    this.setState({ step: step });
  }

  checkRequiredField (field) {
    return (this.state[field]);
  }

  onChangeStepFromPersonalDetails (step) {
    const required = [
      'email',
      'firstName',
      'lastName',
      'address',
      'city',
      'zip',
      'phone',
      'occupation',
      'employer',
    ];

    const errors = required.filter((field) => {
      return !(this.state[field]);
    }, this);


    if (errors.length > 0) return this.setState({
      errorMessages: this.errorsToErrorMessages(errors)
    });

    this.setState({ step: step });
  }

  onTypeFormInput (property, e) {
    let updatedState = Object.assign({}, this.state);

    updatedState[property] = e.target.value;

    this.setState(updatedState);
  }

  onSelectAmount (amountInCents) {
    this.setState({
      selectedAmountInCents: amountInCents,
      customAmountEntered: false,
    });
  }

  onSelectMonthlyMaximum (amountInCents) {
    this.setState({
      selectedMonthlyMaximumInCents: amountInCents,
      customMaximumEntered: false,
    });
  }

  onTypeCustomAmount (e) {
    this.setState({
      selectedAmountInCents: e.target.value,
      customAmountEntered: true,
    });
  }

  onTypeCustomMaximum (e) {
    this.setState({
      selectedMonthlyMaximumInCents: e.target.value,
      customMaximumEntered: true,
    });
  }

  funderDetails () {
    const funderProperties = [
      'firstName', 'lastName', 'occupation', 'employer', 'email', 'phone',
      'address', 'city', 'usState', 'zip',
    ];

    return _.pick(this.state, funderProperties);
  }

  crowdFundMembershipDetails () {
    const crowdFundMembershipProperties = [
      'amountPerTimeInCents', 'monthlyMaximumInCents', 'coverFees',
    ];

    const properties = _.pick(this.state, crowdFundMembershipProperties);

    return _.merge(properties, { crowdFundId: this.props.crowdFundId });
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
      <div className="color_scheme__green_blue">
        {this.renderHeader(true)}
        {this.renderHeadlineSection()}
        {this.renderGiveWhen()}
        {this.renderStatementOfPurpose()}
        {this.renderBenefitStatement()}
        {this.renderClosingLetter()}
        {this.renderExtraSentenceForMobile()}
        {this.renderFooter()}
      </div>
    );
  }

  renderPersonalDetailsPage () {
    return (
      <div className="color_scheme__green_blue">
        {this.renderHeader(false)}

        <PersonalDetailsForm
          /* UI functions */
          onType={this.onTypeFormInput.bind(this)}
          onClickEdit={this.onChangeStep.bind(this, 0)}
          onClickContinue={this.onChangeStepFromPersonalDetails.bind(this, 2)}
          errorMessages={this.state.errorMessages}

          /* Personal details */
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
          selectedAmountInCents={this.state.selectedAmountInCents}
          selectedMonthlyMaximumInCents={this.state.selectedMonthlyMaximumInCents}
        />

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
          onType={this.onTypeFormInput.bind(this)}
          onClickEdit={this.onChangeStep.bind(this, 0)}
          /* Data for form */
          funderDetails={this.funderDetails()}
          crowdFundMembershipDetails={this.crowdFundMembershipDetails()}
          coverFees={this.state.coverFees}
          stripePublishableKey={this.props.stripePublishableKey}

          /* Selected amounts */
          selectedAmountInCents={this.state.selectedAmountInCents}
          selectedMonthlyMaximumInCents={this.state.selectedMonthlyMaximumInCents}
        />

        {this.renderFooter()}
      </div>
    );
  }

  renderHeader (showButton) {
    return (
      <Header givePhrase="fight back"
        whenPhrase="Every time an anti-living-wage corporation writes a campaign check,"
        logoImgPath="/guzzardi-logo-small.jpg"
        onClickActionButton={this.onChangeStep.bind(this, 1)}
        showButton={showButton}
      />
    );
  }

  renderHeadlineSection () {
    return (
      <div className="section flex headline__section below__fixed__navbar">
        <div className="text color__bright">
          <h1>
            Elect Candidates Who Fight For $15
          </h1>
          <div className="divider__line"></div>
          <p>
            Big business is pulling the strings. Let’s fight back to support the people’s candidates.
          </p>
        </div>

        <img src="/fightfor15photo.jpg" />
      </div>
    );
  }

  renderProgressBar () {
    return (
      <div className="give_when__subsection" id="progress-bar">
        <div style={{
          width: '80%',
          margin: '30px auto',
          position: 'relative',
        }}>
          <h3 style={{color: '#1c407b', lineHeight: '7.5px'}}>
            53 backers
          </h3>
          <p style={{color: '#1c407b', lineHeight: '7.5px'}}>
            of 100 backer goal
          </p>
          <div className="progress__bar">
          <div className="progress__bar__inner" /></div>
          <p style={{color: 'red', lineHeight: '7.5px'}}>
            47 backers needed
          </p>
          <p style={{color: 'red', lineHeight: '7.5px'}}>
            17 days left
          </p>
        </div>
      </div>
    );
  }

  renderGiveWhen () {
    return (
      <div className="section flex give_when__section">
        {this.renderGive()}
        {this.renderArrowShape()}
        {this.renderWhen()}
        {this.renderDividerLine()}
        {this.renderProgressBar()}
      </div>
    );
  }

  renderGive () {
    return (
      <div className="give_when__subsection" id="give">
          <h3>Give</h3>

          <div style={{clear: 'both', marginTop: 15}}>
            <p>
              Chip in to support candidates who Fight for $15:
            </p>
            <div className="selector__button__row">
              {this.renderAmountButton(100)}
              {this.renderAmountButton(300)}
              {this.renderAmountButton(1500)}
              {this.renderCustomAmountButton()}
            </div>
          </div>

          <div style={{clear: 'both', marginTop: 60, marginBottom: 40}}>
            <p>
              Monthly maximum:
            </p>
            <div className="selector__button__row">
              {this.renderMaximumAmountButton(1500)}
              {this.renderMaximumAmountButton(4500)}
              {this.renderMaximumAmountButton(15000)}
              {this.renderCustomMaximumAmountButton()}
            </div>
          </div>
      </div>
    );
  }

  renderArrowShape () {
    return (
      <div className="arrow_box" style={{flex: 0}}>
      </div>
    );
  }

  renderWhen () {
    return (
      <div className="give_when__subsection" id="when">
        <div>
          <h3>When</h3>
          <p>
            Every time an anti-living-wage writes a campaign check to an Illinois politician
          </p>
          <span className='action_button_big'
               onClick={this.onChangeStep.bind(this, 1)}>
            fight back →
          </span>
        </div>
      </div>
    );
  }

  renderDividerLine () {
    return (
      <div id="divider-line"
        style={{
        minHeight: 100,
        margin: '15px 0',
        width: 2,
        backgroundColor: '#1c407b',
        display: 'inline',
        float: 'right',
        flex: 0.005
      }}>
      </div>
    );
  }

  renderAmountButton (amount) {
    const selected = (amount === this.state.selectedAmountInCents);

    const className = selected ?
                      'amount_selector_button selected' :
                      'amount_selector_button';
    return (
      <div className={className}
           onClick={this.onSelectAmount.bind(this, amount)}>
        ${Money.renderAmountInCentsAsDollars(amount)}
      </div>
    );
  }

  renderMaximumAmountButton (amount) {
    const selected = (amount === this.state.selectedMonthlyMaximumInCents);

    const className = selected ?
                      'amount_selector_button selected' :
                      'amount_selector_button';
    return (
      <div className={className}
           onClick={this.onSelectMonthlyMaximum.bind(this, amount)}>
        ${Money.renderAmountInCentsAsDollars(amount)}
      </div>
    );
  }

  renderCustomAmountButton () {
    const selected = this.state.customAmountEntered ? 'selected' : '';
    const inputClass = `custom__selector ${selected}`;
    const divClass = `amount_selector_button custom__selector ${selected}`;

    return (
      <div className={divClass}>
        <span className='dollar'>$</span>
        <input type='text'
               onChange={this.onTypeCustomAmount.bind(this)}
               className={inputClass}
               placeholder='___' />
      </div>
    );
  }

  renderCustomMaximumAmountButton () {
    const selected = this.state.customMaximumEntered ? 'selected' : '';
    const inputClass = `custom__selector ${selected}`;
    const divClass = `amount_selector_button custom__selector ${selected}`;

    return (
      <div className={divClass}>
        <span className='dollar'>$</span>
        <input type='text'
               onChange={this.onTypeCustomMaximum.bind(this)}
               className={inputClass}
               placeholder='___' />
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
            <span className="action_button">Sign up</span> as an automatic responder and you'll get monthly updates from one of the organizers we hire to help force the Democrats to break with Big Money.
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
      <div className="section flex">
        <div className="text narrow big plain">

          <p style={{ fontWeight: 'bold' }}>
            We need to respond immediately so our candidates can campaign this summer in the primaries.
          </p>

          <p>
            At the end of each month, depending on the number of checks written by corporate interests and the monthly maximum donation you set for yourself, we'll process your donation and put it to work immediately to campaign for our candidates.
          </p>

          <p>At the end of each month, based on the number of checks written by corporate interests and your monthly maximum donation, we’ll process your donation and put it to work immediately to campaign for our candidates.</p>

          <div style={{
            border: '1px solid #0948bc',
            padding: 20,
            margin: '60px 0 40px 0'
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
                    onClick={this.onChangeStep.bind(this, 1)}>
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
