function Thermostat() {
  this._temperature = 20;
  this._powerSaving = true;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function(number) {
  if ((this._powerSaving = true) && (this._temperature + number > 25)) {
    throw "Maximum temperature in power saving mode is 25";
  } else {
  this._temperature += number;
  }
};

Thermostat.prototype.down = function(number) {
  if (this._temperature - number < 10) {
    throw "Temperature cannot drop below 10";
  } else {
  this._temperature -= number;
  }
};

Thermostat.prototype.powerSaving = function() {
  return this._powerSaving;
};
