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
    // name: PropTypes.string.isRequired,
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      step: 0,

      // Amount summary
      selectedAmountInCents: 300,
      selectedMonthlyMaximumInCents: 4500,

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

  onChangeStep (step) {
    this.setState({ step: step });
  }

  onTypeFormInput (property, e) {
    let updatedState = Object.assign({}, this.state);

    updatedState[property] = e.target.value;

    this.setState(updatedState);
  }

  onSelectAmount (amountInCents) {
    this.setState({
      selectedAmountInCents: amountInCents
    });
  }

  onSelectMonthlyMaximum (amountInCents) {
    this.setState({
      selectedMonthlyMaximumInCents: amountInCents
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
        {this.renderHeader()}
        {this.renderHeadlineSection()}
        {this.renderGiveWhen()}
        {this.renderStatementOfPurpose()}
        {this.renderBenefitStatement()}
        {this.renderClosingLetter()}
        {this.renderFooter()}
      </div>
    );
  }

  renderPersonalDetailsPage () {
    return (
      <div className="color_scheme__green_blue">
        {this.renderHeader()}

        <PersonalDetailsForm
          /* UI functions */
          onType={this.onTypeFormInput.bind(this)}
          onClickEdit={this.onChangeStep.bind(this, 0)}
          onClickContinue={this.onChangeStep.bind(this, 2)}

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
        {this.renderHeader()}

        <CardDetailsForm
          /* UI functions */
          onType={this.onTypeFormInput.bind(this)}
          onClickEdit={this.onChangeStep.bind(this, 0)}
          /* Data for form */
          funderDetails={this.funderDetails()}
          crowdFundMembershipDetails={this.crowdFundMembershipDetails()}
          coverFees={true}
          stripePublishableKey={this.props.stripePublishableKey}

          /* Selected amounts */
          selectedAmountInCents={this.state.selectedAmountInCents}
          selectedMonthlyMaximumInCents={this.state.selectedMonthlyMaximumInCents}
        />

        {this.renderFooter()}
      </div>
    );
  }

  renderHeader () {
    return (
      <Header givePhrase="fight back"
        whenPhrase="Every time an anti-living-wage corporation writes a campaign check,"
        logoImgPath="/guzzardi-logo-small.jpg"
        onClickActionButton={this.onChangeStep.bind(this, 1)}
      />
    );
  }

  renderHeadlineSection () {
    return (
      <div className="section flex headline__section">
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
          margin: '40px auto',
          position: 'relative',
        }}>
          <h3 style={{color: '#1c407b', lineHeight: '7.5px'}}>
            $53 raised
          </h3>
          <p style={{color: '#1c407b', lineHeight: '7.5px'}}>
            of $100 goal
          </p>
          <div className="progress__bar">
            <div className="progress__bar__inner" /></div>
          <p style={{color: '#1c407b', lineHeight: '7.5px'}}>
            53 backers
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
              {this.renderAmountButton(3500)}
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
              {this.renderMaximumAmountButton(20000)}
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
            <p>Walmart, McDonalds, the Chamber of Commerce, the Restaurant Association, and the Retail Merchants are some of the groups we're up against.</p>
          </div>
        </div>
      </div>
    );
  }

  renderClosingLetter () {
    return (
      <div className="section flex">
        <div className="text narrow big plain">

          <p style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            We Need Our Voices To Be Just As Loud As Theirs
          </p>

          <p>
            Every time an anti-living-wage corporate interest writes a big campaign check, donate to support candidates who Fight for $15.
          </p>

          <p style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            We need to respond immediately, in time for our candidates to campaign this summer for their primaries
          </p>

          <p>
            At the end of each month, depending on the number of checks written by corporate interests and the monthly maximum donation you set for yourself, we'll process your donation and put it to work immediately to campaign for our candidates.
          </p>

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
