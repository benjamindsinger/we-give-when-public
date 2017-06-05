export default {

  renderAmountInCentsAsRoundDollars: function (amountInCents) {
    // Show exact amounts less than a dollar
    if (100 > amountInCents) return (amountInCents / 100).toFixed(2);

    // Show round dollar amounts (i.e. "$1" not "$1.00")
    return (amountInCents / 100);
  },

  renderAmountInCentsAsExactChange: function (amountInCents) {
    return (amountInCents / 100).toFixed(2);
  }

}
