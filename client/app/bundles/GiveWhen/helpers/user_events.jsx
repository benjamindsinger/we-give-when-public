import Errors from './errors.jsx';

export default {

  onTypeFormInput: function (property, e) {
    let updatedState = Object.assign({}, this.state);

    updatedState[property] = e.target.value;

    this.setState(updatedState);
  },

  onChangeStep: function (step) {
    this.setState({ step: step });
  },

  onChangeStepFromPersonalDetails: function (step, funderRequiredDetails) {
    const errors = funderRequiredDetails.filter((field) => {
      return !(this.state[field]);
    }, this);

    if (funderRequiredDetails.indexOf('address') > -1 && 5 > this.state.address.length) {
      errors.push('address_length');
    }

    if (funderRequiredDetails.indexOf('phone') > -1 && 10 > this.state.phone.length) {
      errors.push('phone_length');
    }

    if (funderRequiredDetails.indexOf('zip') > -1 && isNaN(parseFloat(this.state.zip)) || !isFinite(this.state.zip)) {
      errors.push('zip_numeric');
    }

    if (funderRequiredDetails.indexOf('zip') > -1 && this.state.zip.length !== 5) {
      errors.push('zip_five');
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(this.state.email)) {
      errors.push('email_valid');
    }

    if (errors.length > 0) return this.setState({
      errorMessages: Errors.toErrorMessages(errors)
    });

    this.setState({ step: step });
  },

  onSelectAmount: function (amountInCents) {
    this.setState({
      selectedAmountInCents: amountInCents,
      customAmountEntered: false,
    });
  },

  onSelectMonthlyMaximum: function (amountInCents) {
    this.setState({
      selectedMonthlyMaximumInCents: amountInCents,
      customMaximumEntered: false,
    });
  },

  onTypeCustomDollarAmount: function (e) {
    this.setState({
      selectedAmountInCents: (e.target.value * 100),
      customAmountEntered: true,
    });
  },

  onTypeCustomDollarMaximum: function (e) {
    this.setState({
      selectedMonthlyMaximumInCents: (e.target.value * 100),
      customMaximumEntered: true,
    });
  },

}
