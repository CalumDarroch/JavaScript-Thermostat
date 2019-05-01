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
        thermostat.up(6);}).toThrow("Maximum temperature in power saving mode is 25");
    });

  });

  describe('If power saving mode is OFF', function() {

    it('the maximum temperature is 32 degrees', function() {
      thermostat.changePowerMode();
      expect(function() {
        thermostat.up(13);}).toThrow("Maximum temperature when not in power saving mode is 32");
    });

  });

})
