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

  onChangeStepFromPersonalDetails: function (step) {
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
