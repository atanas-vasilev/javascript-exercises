const ftoc = function(temp) {
  //[°C] = ([°F] − 32) × 5⁄9
  return Math.round((((Number(temp) - 32)*5)/9)*10)/10;
};

const ctof = function(temp) {
  return Math.round((Number(temp)*1.8+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
