function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function(number) {
  this._temperature += number;
};

Thermostat.prototype.down = function(number) {
  if (this._temperature - number < 10) {
    throw "Temperature cannot drop below 10";
  } else {
  this._temperature -= number;
}
};
