import _ from 'lodash';

export default {

  funderDetails: function (state, props) {
    const requiredDetails = props.funderRequiredDetails;

    return _.pick(state, requiredDetails);
  },

  crowdFundMembershipDetails: function (state, props) {
    const multiplier = state.monthlyMultiplier;

    if (multiplier) return {
      coverFees: true,
      crowdFundId: props.crowdFundId,
      amountPerTimeInCents: state.selectedAmountInCents,
      monthlyMaximumInCents: state.selectedAmountInCents * multiplier,
    };

    return {
      coverFees: true,
      crowdFundId: props.crowdFundId,
      amountPerTimeInCents: state.selectedAmountInCents,
      monthlyMaximumInCents: state.selectedMonthlyMaximumInCents,
    };
  },

};
