var Translator = require('../src/Translator')

describe('Translator', function() {
  var outputMock;

  beforeEach(function() {
    outputMock = {
      print: function() {}
    };

    spyOn(outputMock, 'print');
  })

  it('should convert one diagnostics data entry to something that is human readable', function() {
    var diagnosticsData = {
      diagnosticEntries: {
        0: 'C7,04,00,00,EB,27,00,00,49,2A,00,00,7E,2B,00,00,F0,46,00,00,F8,28,00,00,6A,29,00,00,61,0D,00,00,49,2A,00,00,47,71,00,00,4A,71,00,00,47,71,00,00,43,1C,00,00,B5,02,00,00,'
      }
    };

    var translator = Translator(outputMock);
    translator.translate(diagnosticsData);

    var expected = '' +
      'Entry 0\n' +
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
      'Bucket Switch: 0h 11m 33s\n' +
      '\n';

    expect(outputMock.print).toHaveBeenCalledWith(expected);
  });

  it('should convert multiple diagnostics data entries to something human readable', function() {
    var diagnosticsData = {
      diagnosticEntries: {
        0: 'C7,04,00,00,EB,27,00,00,49,2A,00,00,7E,2B,00,00,F0,46,00,00,F8,28,00,00,6A,29,00,00,61,0D,00,00,49,2A,00,00,47,71,00,00,4A,71,00,00,47,71,00,00,43,1C,00,00,B5,02,00,00,',
        1: '4C,10,00,00,55,7B,00,00,A4,82,00,00,22,89,00,00,04,BA,00,00,BA,7C,00,00,36,D6,00,00,E4,14,00,00,E7,8C,00,00,E3,49,01,00,F2,49,01,00,E3,49,01,00,58,12,00,00,92,09,00,00,',
        2: '67,02,00,00,C4,06,00,00,AF,08,00,00,2D,09,00,00,AF,08,00,00,94,08,00,00,68,07,00,00,32,00,00,00,AF,08,00,00,D8,18,00,00,D8,18,00,00,D8,18,00,00,00,00,00,00,00,00,00,00,'
      }
    };

    var translator = Translator(outputMock);
    translator.translate(diagnosticsData);

    var expected = '' +
      'Entry 0\n' +
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
      'Bucket Switch: 0h 11m 33s\n' +
      '\n' +
      'Entry 1\n' +
      'Pump: 1h 9m 32s\n' +
      'Compressor: 8h 46m 13s\n' +
      'Fan: 9h 17m 24s\n' +
      'Motor: 9h 45m 6s\n' +
      'IR Sender: 13h 13m 40s\n' +
      'IR Receiver: 8h 52m 10s\n' +
      'Upper Switch: 15h 13m 58s\n' +
      'Lower Switch: 1h 29m 8s\n' +
      'UV LED: 10h 1m 11s\n' +
      'LED Light: 23h 27m 31s\n' +
      'LED Ring: 23h 27m 46s\n' +
      'LED Daytime: 23h 27m 31s\n' +
      'Clean Switch: 1h 18m 16s\n' +
      'Bucket Switch: 0h 40m 50s\n' +
      '\n' +
      'Entry 2\n' +
      'Pump: 0h 10m 15s\n' +
      'Compressor: 0h 28m 52s\n' +
      'Fan: 0h 37m 3s\n' +
      'Motor: 0h 39m 9s\n' +
      'IR Sender: 0h 37m 3s\n' +
      'IR Receiver: 0h 36m 36s\n' +
      'Upper Switch: 0h 31m 36s\n' +
      'Lower Switch: 0h 0m 50s\n' +
      'UV LED: 0h 37m 3s\n' +
      'LED Light: 1h 46m 0s\n' +
      'LED Ring: 1h 46m 0s\n' +
      'LED Daytime: 1h 46m 0s\n' +
      'Clean Switch: 0h 0m 0s\n' +
      'Bucket Switch: 0h 0m 0s\n' +
      '\n';

    expect(outputMock.print).toHaveBeenCalledWith(expected);
  });

  

  xit('should not modify the original entry')
});
