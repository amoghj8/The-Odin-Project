const ftoc = function(farenheit) {
  let c = 5/9*(farenheit-32)
  return Number(c.toFixed(1));
}

const ctof = function(celsius) {
  let f = celsius*9/5+32
  return Number(f.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
