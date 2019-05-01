function Thermostat() {
  this._temperature = 20;
  this._powerSaving = true;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function(number) {
  if ((this._powerSaving === true) && (this._temperature + number > 25)) {
    throw "Maximum temperature in power saving mode is 25";
  }
  else if ((this._powerSaving === false) && (this._temperature + number > 32)) {
    throw "Maximum temperature when not in power saving mode is 32";
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

Thermostat.prototype.changePowerMode = function() {
  if (this._powerSaving === true) {
    this._powerSaving = false;
  }
  else if (this._powerSaving === false) {
    this._powerSaving = true;
  }
};

Thermostat.prototype.reset = function() {
  this._temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
    return "low-usage";
  }
  else if (this._temperature > 25) {
    return "high-usage";
  } else {
    return "medium-usage";
  }
};
