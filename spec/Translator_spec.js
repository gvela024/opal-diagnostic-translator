var Translator = require('../src/Translator')

describe('Translator', function() {
  var console_out_mock;

  beforeEach(function() {
    console_out_mock = {
      print: function() {}
    };

    spyOn(console_out_mock, 'print');
  })

  it('should convert a diagnostics data entry to something that is human readable', function() {
    var diagnostics_data = {
      diagnostic_entries: {
        0: 'C7,04,00,00,EB,27,00,00,49,2A,00,00,7E,2B,00,00,F0,46,00,00,F8,28,00,00,6A,29,00,00,61,0D,00,00,49,2A,00,00,47,71,00,00,4A,71,00,00,47,71,00,00,43,1C,00,00,B5,02,00,00,'
      }
    };

    var translator = Translator(console_out_mock);
    translator.translate(diagnostics_data);

    var expected = '' +
      'Pump: 0h 20m 23s\n' +
      'Compressor: 2h 50m 19s\n' +
      'Fan: 3h 0m 25s\n' +
      'Motor: 3h 5m 34s\n' +
      'IR Sender: 5h 2m 40s\n' +
      'IR Receiver: 2h 54m 48s\n' +
      'Upper Switch: 2h 56m 42s\n' +
      'Lower Switch: 0h 57m 5s\n' +
      'UV LED: 3h 0m 25s\n' +
      'LED Light: 8h 3m 19s\n' +
      'LED Ring: 8h 3m 22s\n' +
      'LED Daytime: 8h 3m 19s\n' +
      'Clean Switch: 2h 0m 35s\n' +
      'Bucket Switch: 0h 11m 33s\n';

    expect(console_out_mock.print).toHaveBeenCalledWith(expected);
  });

  xit('should not modify the original entry')
});
