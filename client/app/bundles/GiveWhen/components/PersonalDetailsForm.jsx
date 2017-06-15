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
          {this.renderName()}
          {this.renderAddress()}
          {this.renderCityStateAndZip()}
          {this.renderPhoneAndEmail()}
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

    return `I'll respond with $${triggerAmount}, up to $${maxAmount} per month.`;
  }

  renderCountdownSummary () {
    return `Fight back: $${Money.renderAmountInCentsAsRoundDollars(this.props.selectedAmountInCents)}/day`;
  }

  renderSummaryContent () {
    const crowdFundType = this.props.crowdFundType;

    if (crowdFundType === 'SLINGSHOT') return this.renderSlingshotSummary();
    if (crowdFundType === 'COUNTDOWN') return this.renderCountdownSummary();
  }

  fieldToLabel (field) {
    const snake = _.snakeCase(field);
    const lower = _.replace(snake, '_', ' ');
    const upper = _.capitalize(lower);

    return upper;
  }

  renderInputFor (field, optionalLabel) {
    return (
      <div>
        <span style={{
          color: 'white',
          textTransform: 'uppercase',
        }}>
          {optionalLabel || this.fieldToLabel(field)}
        </span>
        <input type="text"
               onChange={this.props.onType.bind(this, field)}
               value={this.props[field]} />
      </div>
    );
  }

  renderName () {
    if (!_.includes(this.props.funderRequiredDetails, 'firstName')) return null;

    return (
      <div className="input__row">
        {this.renderInputFor('firstName')}
        {this.renderInputFor('lastName')}
      </div>
    );
  }

  renderAddress () {
    if (!_.includes(this.props.funderRequiredDetails, 'address')) return null;

    return (
      <div className="long__input">
        {this.renderInputFor('address')}
      </div>
    );
  }

  renderCityStateAndZip () {
    if (!_.includes(this.props.funderRequiredDetails, 'city') &&
        !_.includes(this.props.funderRequiredDetails, 'state') &&
        !_.includes(this.props.funderRequiredDetails, 'zip')) return null;

    return (
      <div className="input__row">
        {this.renderInputFor('city')}
        {this.renderInputFor('usState', 'US STATE (I.E., IL)')}
        {this.renderInputFor('zip')}
      </div>
    );
  }

  renderPhoneAndEmail () {
    if (!_.includes(this.props.funderRequiredDetails, 'phone') &&
        !_.includes(this.props.funderRequiredDetails, 'email')) return null;

    return (
      <div className="input__row">
        {this.renderInputFor('email')}
        {this.renderInputFor('phone')}
      </div>
    );
  }

  renderOccupationAndEmployer () {
    if (!_.includes(this.props.funderRequiredDetails, 'occupation')) return null;

    return (
      <div>
        <div style={{textAlign: 'center', margin: '4px 0'}}>
          Campaign finance law requires us to collect your occupation and employer.
        </div>

        <div className="input__row">
          {this.renderInputFor('occupation')}
          {this.renderInputFor('employer')}
        </div>
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
