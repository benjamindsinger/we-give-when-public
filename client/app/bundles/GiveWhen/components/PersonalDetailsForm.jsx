import PropTypes from 'prop-types';
import React from 'react';

export default class PersonalDetailsForm extends React.Component {

  static propTypes = {
    // Form functions
    onTypeFormInput: PropTypes.func.isRequired,

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
  };

  render () {
    return (
      <div className="personal__details__form__wrapper color_scheme__white_blue">
        <div className="personal__details__form">

          <div className="long__input">
            <input type="text"
                   /*
                   onChange={this.props.onTypeFormInput.bind(this, 'email')}
                   value={this.props.email}
                    */
                   placeholder="Email address" />
          </div>

          <div className="input__row">

            <input type="text"
                   /*
                   onChange={this.props.onType.bind(this, 'firstName')}
                   value={this.props.firstName}
                    */
                   placeholder="First Name" />

            <input type="text"
                   /*
                   onChange={this.props.onType.bind(this, 'lastName')}
                   value={this.props.lastName}
                    */
                   placeholder="Last Name" />
          </div>

          <div className="long__input">
            <input type="text"
                   /*
                   onChange={this.props.onType.bind(this, 'address')}
                   value={this.props.address}
                    */
                   placeholder="Address" />
          </div>

          <div className="input__row">

            <input type="text"
                   /*
                   onChange={this.props.onType.bind(this, 'city')}
                   value={this.props.city}
                    */
                   style={{flex: 2}}
                   placeholder="City" />

            <input type="text"
                   style={{flex: 1}}
                   /*
                   onChange={this.props.onType.bind(this, 'zip')}
                   value={this.props.zip}
                    */
                   placeholder="ZIP" />
          </div>

          <div className="long__input">
            <input type="text"
                   /*
                   onChange={this.props.onType.bind(this, 'phone')}
                   value={this.props.phone}
                    */
                   placeholder="Phone" />

          </div>

          <div className="action_button_big"
               style={{margin: '60px auto 40px auto'}}>
            continue →
          </div>

        </div>
      </div>
    );
  }

};