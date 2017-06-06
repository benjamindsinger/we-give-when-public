export default {

  funderDetails: function (state, props) {
    const funderProperties = [
      'firstName', 'lastName', 'occupation', 'employer', 'email', 'phone',
      'address', 'city', 'usState', 'zip',
    ];

    return _.pick(state, funderProperties);
  },

  crowdFundMembershipDetails: function (state, props) {
    const crowdFundMembershipProperties = [
      'amountPerTimeInCents', 'monthlyMaximumInCents', 'coverFees',
    ];

    const properties = _.pick(state, crowdFundMembershipProperties);

    return _.merge(properties, { crowdFundId: props.crowdFundId });
  },

}
