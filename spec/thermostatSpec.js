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

})
