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
      thermostat.up(2);
      expect(thermostat.temperature()).toBe(22);
    });

    it('decrease the temperature', function() {
      thermostat.down(2);
      expect(thermostat.temperature()).toBe(18);
    });

    it('reset the temperature to 20', function() {
      thermostat.up(4);
      thermostat.reset();
      expect(thermostat.temperature()).toBe(20);
    });

  });

  describe('temperature cannot drop below', function() {

    it('10 degrees', function() {
      expect(function() {
        thermostat.down(11);}).toThrow("Temperature cannot drop below 10");
    });

  });

  describe('If power saving mode is ON', function() {

    it('the maximum temperature is 25 degrees', function() {
      expect(function() {
        thermostat.up(6);}).toThrow("Maximum temperature is 25");
    });

  });

  describe('If power saving mode is OFF', function() {

    it('the maximum temperature is 32 degrees', function() {
      thermostat.changePowerMode();
      expect(function() {
        thermostat.up(13);}).toThrow("Maximum temperature is 32");
    });

  });

  describe('If the user asks about the thermostats energy usage', function() {

    it('returns "low-usage" if below 18 degrees', function() {
      thermostat.down(3);
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it('returns "high-usage" if above 25 degrees', function() {
      thermostat.changePowerMode();
      thermostat.up(6);
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });

    it('returns "medium-usage" if between 18 and 25 degrees inclusive', function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

  });

})
