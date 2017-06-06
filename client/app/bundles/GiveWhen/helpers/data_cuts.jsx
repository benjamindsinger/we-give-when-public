export default {

  funderDetails: function (state, props) {
    const requiredDetails = props.funderRequiredDetails;

    return _.pick(state, requiredDetails);
  },

  crowdFundMembershipDetails: function (state, props) {
    const crowdFundMembershipProperties = [
      'amountPerTimeInCents', 'monthlyMaximumInCents', 'coverFees',
    ];

    const properties = _.pick(state, crowdFundMembershipProperties);

    return _.merge(properties, { crowdFundId: props.crowdFundId });
  },

}
