function Thermostat() {
  this._temperature = 20;
  this._powerSaving = true;
  this._MAX_TEMP = 25;
  this._MIN_TEMP = 10;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function(number) {
  if (this._temperature + number > this._MAX_TEMP) {
    this._temperature = this._MAX_TEMP;
    throw `Maximum temperature is ${this._MAX_TEMP}`;
  } else {
  this._temperature += number;
  }
};

Thermostat.prototype.down = function(number) {
  if (this._temperature - number < this._MIN_TEMP) {
    this._temperature = this._MIN_TEMP;
    throw "Temperature cannot drop below 10";
  } else {
  this._temperature -= number;
  }
};

Thermostat.prototype.powerSaving = function() {
  return this._powerSaving;
};

Thermostat.prototype.changePowerMode = function() {
  this._powerSaving = !this._powerSaving;
  this.setMaxLimit();
};

Thermostat.prototype.setMaxLimit = function() {
  if(this._powerSaving === true) {
    this._MAX_TEMP = 25;
  }
  else if (this._powerSaving === false) {
    this._MAX_TEMP = 32;
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
