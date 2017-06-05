import PropTypes from 'prop-types';
import React from 'react';

import PersonalDetailsForm from './PersonalDetailsForm.jsx';

import Footer from './Footer.jsx';
import Header from './Header.jsx';

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
      selectedAmountInCents: null,
      selectedMonthlyMaximumInCents: null,

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

  render () {
    const step = this.state.step;

    switch (step) {
      case 0:
        return this.renderSignUpPage();
      case 1:
        return this.renderPersonalDetailsPage();
      default:
        return this.renderSignUpPage();
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
          onTypeFormInput={this.onTypeFormInput.bind(this)}
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
        />
        {this.renderFooter()}
      </div>
    );
  }

  renderHeader () {
    return (
      <Header givePhrase="Give $1 every time"
        whenPhrase="an anti-living-wage corporation writes a campaign check"
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
          <div style={{
            backgroundColor: '#ccc',
            height: '10px',
            margin: '20px 0'
          }}>
            <div style={{
              backgroundColor: 'rgb(67, 222, 31)',
              height: '10px',
              width: '55%'
            }} />
          </div>
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

          <div style={{clear: 'both'}}>
            <p>
              Chip in to support candidates who Fight for $15:
            </p>
            <div style={{
              margin: '0 auto',
              width: '75%',
            }}>
              {this.renderSelectorButton('50¢', false)}
              {this.renderSelectorButton('$1', true)}
              {this.renderSelectorButton('$3', false)}
              {this.renderSelectorButton('...', false)}
            </div>
          </div>

          <div style={{clear: 'both'}}>
            <p>
              Set a monthly maximum:
            </p>
            <div style={{
              margin: '0 auto',
              width: '75%',
            }}>
              {this.renderSelectorButton('$20', false)}
              {this.renderSelectorButton('$30', true)}
              {this.renderSelectorButton('$40', false)}
              {this.renderSelectorButton('...', false)}
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
            Every time an anti-living-wage writes a campaign check
          </p>
          <span className='action_button_big'
               onClick={this.onChangeStep.bind(this, 1)}>
            continue →
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

  renderSelectorButton (amount, selected) {
    const className = selected ?
                      'amount_selector_button selected' :
                      'amount_selector_button';
    return (
      <div className={className}>
        {amount}
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
        <div className="text">
          <div style={{
            width: '66%',
            margin: '0 auto',
            fontSize: '1.125em',
            color: '#0948bc'
          }}>

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
      </div>
    );
  }

  renderFooter () {
    return (
      <Footer />
    );
  }

}
