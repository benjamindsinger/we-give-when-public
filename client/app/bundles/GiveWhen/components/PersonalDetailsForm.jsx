import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

import Money from '../helpers/money.jsx';

export default class PersonalDetailsForm extends React.Component {

  static propTypes = {
    // Form functions
    onType: PropTypes.func.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickContinue: PropTypes.func.isRequired,
    errorMessages: PropTypes.array.isRequired,

    // Form details
    funderRequiredDetails: PropTypes.array.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    usState: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,

    // Amounts
    selectedAmountInCents: PropTypes.number.isRequired,
    selectedMonthlyMaximumInCents: PropTypes.number,
    crowdFundType: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div className="personal__details__form__wrapper color_scheme__white_blue below__fixed__navbar">
        <div className="personal__details__form">
          {this.renderSummary()}
          {this.renderEmail()}
          {this.renderName()}
          {this.renderAddress()}
          {this.renderCityAndZip()}
          {this.renderPhone()}
          {this.renderOccupationAndEmployer()}
          {this.renderErrors()}
          <div style={{textAlign: 'center'}}>
            <div className="action_button_big"
                 style={{margin: '40px auto'}}
                 onClick={this.props.onClickContinue}>
              continue →
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSummary () {
    return (
      <div className="summary">
        <p>
          {this.renderSummaryContent()}
          <a className="edit" onClick={this.props.onClickEdit}>
            [edit]
          </a>
        </p>
      </div>
    );
  }

  renderSlingshotSummary () {
    const triggerAmount = Money.renderAmountInCentsAsRoundDollars(this.props.selectedAmountInCents);
    const maxAmount = Money.renderAmountInCentsAsRoundDollars(this.props.selectedMonthlyMaximumInCents);

    return `Fight back trigger amount: $${triggerAmount}, Monthly maximum amount: $${maxAmount}.`;
  }

  renderCountdownSummary () {
    return `Fight back: $${Money.renderAmountInCentsAsRoundDollars(this.props.selectedAmountInCents)}/day`;
  }

  renderSummaryContent () {
    const crowdFundType = this.props.crowdFundType;

    if (crowdFundType === 'SLINGSHOT') return this.renderSlingshotSummary();
    if (crowdFundType === 'COUNTDOWN') return this.renderCountdownSummary();
  }

  renderEmail () {
    if (!_.includes(this.props.funderRequiredDetails, 'email')) return null;

    return (
      <div className="long__input">
        <input type="text"
               onChange={this.props.onType.bind(this, 'email')}
               value={this.props.email}
               placeholder="Email address" />
      </div>
    );
  }

  renderName () {
    if (!_.includes(this.props.funderRequiredDetails, 'firstName')) return null;

    return (
      <div className="input__row">

        <input type="text"
               onChange={this.props.onType.bind(this, 'firstName')}
               value={this.props.firstName}
               placeholder="First Name" />

        <input type="text"
               onChange={this.props.onType.bind(this, 'lastName')}
               value={this.props.lastName}
               placeholder="Last Name" />
      </div>
    );
  }

  renderAddress () {
    if (!_.includes(this.props.funderRequiredDetails, 'address')) return null;

    return (
      <div className="long__input">
        <input type="text"
               onChange={this.props.onType.bind(this, 'address')}
               value={this.props.address}
               placeholder="Address" />
      </div>
    );
  }

  renderCityAndZip () {
    if (!_.includes(this.props.funderRequiredDetails, 'zip')) return null;

    return (
      <div className="input__row">

        <input type="text"
               onChange={this.props.onType.bind(this, 'city')}
               value={this.props.city}
               style={{flex: 2}}
               placeholder="City" />

        <input type="text"
               style={{flex: 1}}
               onChange={this.props.onType.bind(this, 'zip')}
               value={this.props.zip}
               placeholder="ZIP" />
      </div>
    );
  }

  renderPhone () {
    if (!_.includes(this.props.funderRequiredDetails, 'phone')) return null;

    return (
      <div className="long__input">
        <input type="text"
               onChange={this.props.onType.bind(this, 'phone')}
               value={this.props.phone}
               placeholder="Phone" />
      </div>
    );
  }

  renderOccupationAndEmployer () {
    if (!_.includes(this.props.funderRequiredDetails, 'occupation')) return null;

    return (
      <div className="input__row">

        <input type="text"
               onChange={this.props.onType.bind(this, 'occupation')}
               value={this.props.occupation}
               placeholder="Occupation" />

        <input type="text"
               onChange={this.props.onType.bind(this, 'employer')}
               value={this.props.employer}
               placeholder="Employer" />
      </div>
    );
  }

  renderErrorMessage (message) {
    return (
      <p>{message}</p>
    );
  }

  renderErrors () {
    const errorMessages = this.props.errorMessages;

    if (errorMessages.length === 0) return null;

    return (
      <div style={{
        padding: 20,
        margin: 20,
        backgroundColor: 'white',
        color: 'red',
      }}>
        {errorMessages.map(this.renderErrorMessage)}
      </div>
    );
  }

};
