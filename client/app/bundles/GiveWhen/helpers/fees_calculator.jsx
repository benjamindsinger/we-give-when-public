export default {

  fees: function (amount) {
    return Math.floor(((amount * 1.055) + 30)/0.971) - amount;
  }

};
