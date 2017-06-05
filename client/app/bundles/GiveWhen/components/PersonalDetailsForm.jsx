import PropTypes from 'prop-types';
import React from 'react';

import Money from '../helpers/money.jsx';

export default class PersonalDetailsForm extends React.Component {

  static propTypes = {
    // Form functions
    onType: PropTypes.func.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickContinue: PropTypes.func.isRequired,
    errorMessages: PropTypes.array.isRequired,

    // Form details
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
    selectedMonthlyMaximumInCents: PropTypes.number.isRequired,
  };

  render () {
    return (
      <div className="personal__details__form__wrapper color_scheme__white_blue">
        <div className="personal__details__form">

          <div className="summary">
            <p>Fight back amount: ${Money.renderAmountInCentsAsDollars(this.props.selectedAmountInCents)}
              <a className="edit" onClick={this.props.onClickEdit}>
                [edit]
              </a>
            </p>

            <p>Monthly maximum amount: ${Money.renderAmountInCentsAsDollars(this.props.selectedMonthlyMaximumInCents)}
              <a className="edit" onClick={this.props.onClickEdit}>
                [edit]
              </a>
            </p>
          </div>

          <div className="long__input">
            <input type="text"
                   onChange={this.props.onType.bind(this, 'email')}
                   value={this.props.email}
                   placeholder="Email address" />
          </div>

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

          <div className="long__input">
            <input type="text"
                   onChange={this.props.onType.bind(this, 'address')}
                   value={this.props.address}
                   placeholder="Address" />
          </div>

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

          <div className="long__input">
            <input type="text"
                   onChange={this.props.onType.bind(this, 'phone')}
                   value={this.props.phone}
                   placeholder="Phone" />

          </div>

          {this.renderErrors()}

          <div className="action_button_big"
               style={{margin: '60px auto 40px auto'}}
               onClick={this.props.onClickContinue}>
            continue →
          </div>

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
