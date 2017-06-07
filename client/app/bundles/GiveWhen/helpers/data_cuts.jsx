export default {

  funderDetails: function (state, props) {
    const requiredDetails = props.funderRequiredDetails;

    return _.pick(state, requiredDetails);
  },

  crowdFundMembershipDetails: function (state, props) {
    return {
      coverFees: true,
      crowdFundId: props.crowdFundId,
      amountPerTimeInCents: state.selectedAmountInCents,
      monthlyMaximumInCents: state.selectedMonthlyMaximumInCents,
    };
  },

}
