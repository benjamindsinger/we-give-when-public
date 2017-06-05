export default {
  renderAmountInCentsAsDollars: function (amountInCents) {
    if (100 > amountInCents) {
      return (amountInCents / 100).toFixed(2)
    } else {
      return (amountInCents / 100)
    }
  }
}
