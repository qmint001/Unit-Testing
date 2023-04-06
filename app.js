function sum(a, b) {
  return a + b;
}

function fromEuroToDollar(valueInEuro) {
  return valueInEuro * 1.2;
}

function fromDollarToYen(dollars) {
  return (dollars / 1.2) * 127.9;
}

function fromYenToPounds(yens) {
  return (yens / 127.9) * 0.8;
}

module.exports = {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPounds,
};
