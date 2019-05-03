describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature starts at', function() {

    it('20 degrees', function() {
      expect(thermostat.temperature()).toBe(20);
    });

  });

  describe('allows the user to', function() {

    it('increase the temperature', function() {
      thermostat.up();
      expect(thermostat.temperature()).toBe(21);
    });

    it('decrease the temperature', function() {
      thermostat.down();
      expect(thermostat.temperature()).toBe(19);
    });

    it('reset the temperature to 20', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature()).toBe(20);
    });

  });

  describe('temperature cannot drop below', function() {

    it('10 degrees', function() {
      var error = "Temperature cannot drop below 10";
      for(var i = 0; i < 9; i++) {
        thermostat.down();
      };
      expect(function() { thermostat.down() }).not.toThrow(error);
      expect(function() { thermostat.down() }).toThrow(error);
    });

  });

  describe('If power saving mode is ON', function() {

    it('the maximum temperature is 25 degrees', function() {
      var error = "Maximum temperature is 25";
      for(var i = 0; i < 4; i++) {
        thermostat.up();
      };
      expect(function() { thermostat.up() }).not.toThrow(error);
      expect(function() { thermostat.up() }).toThrow(error);
    });

  });

  describe('If power saving mode is OFF', function() {

    it('the maximum temperature is 32 degrees', function() {
      thermostat.changePowerMode();
      var error = "Maximum temperature is 32";
      for(var i = 0; i < 11; i++) {
        thermostat.up();
      };
      expect(function() { thermostat.up() }).not.toThrow(error);
      expect(function() { thermostat.up() }).toThrow(error);
    });

  });

  describe('If the user asks about the thermostats energy usage', function() {

    it('returns "low-usage" if below 18 degrees', function() {
      for(var i = 0; i < 3; i++) {
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it('returns "high-usage" if above 25 degrees', function() {
      thermostat.changePowerMode();
      for(var i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });

    it('returns "medium-usage" if between 18 and 25 degrees inclusive', function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

  });

})
