var Translator = require('../src/Translator')

describe('Translator', function() {
  it('should convert one diagnostics data entry to JSON', function() {
    var diagnosticsData = {
      diagnosticEntries: {
        0: 'C7,04,00,00,EB,27,00,00,49,2A,00,00,7E,2B,00,00,F0,46,00,00,F8,28,00,00,6A,29,00,00,61,0D,00,00,49,2A,00,00,47,71,00,00,4A,71,00,00,47,71,00,00,43,1C,00,00,B5,02,00,00,'
      }
    };

    var translator = Translator();
    var actual = translator.translateToObject(diagnosticsData);

    var expected = {
      diagnostics: {
        0: {
          Pump: {
            hours: 0,
            minutes: 20,
            seconds: 23
          },
          Compressor: {
            hours: 2,
            minutes: 50,
            seconds: 19
          },
          Fan: {
            hours: 3,
            minutes: 0,
            seconds: 25
          },
          Motor: {
            hours: 3,
            minutes: 5,
            seconds: 34
          },
          'IR Sender': {
            hours: 5,
            minutes: 2,
            seconds: 40
          },
          'IR Receiver': {
            hours: 2,
            minutes: 54,
            seconds: 48
          },
          'Upper Switch': {
            hours: 2,
            minutes: 56,
            seconds: 42
          },
          'Lower Switch': {
            hours: 0,
            minutes: 57,
            seconds: 5
          },
          'UV LED': {
            hours: 3,
            minutes: 0,
            seconds: 25
          },
          'LED Light': {
            hours: 8,
            minutes: 3,
            seconds: 19
          },
          'LED Ring': {
            hours: 8,
            minutes: 3,
            seconds: 22
          },
          'LED Daytime': {
            hours: 8,
            minutes: 3,
            seconds: 19
          },
          'Clean Switch': {
            hours: 2,
            minutes: 0,
            seconds: 35
          },
          'Bucket Switch': {
            hours: 0,
            minutes: 11,
            seconds: 33
          }
        }
      }
    };

    expect(actual).toEqual(expected);
  });

  it('should convert multiple diagnostics data entries to something human readable', function() {
    var diagnosticsData = {
      diagnosticEntries: {
        0: 'C7,04,00,00,EB,27,00,00,49,2A,00,00,7E,2B,00,00,F0,46,00,00,F8,28,00,00,6A,29,00,00,61,0D,00,00,49,2A,00,00,47,71,00,00,4A,71,00,00,47,71,00,00,43,1C,00,00,B5,02,00,00,',
        1: '4C,10,00,00,55,7B,00,00,A4,82,00,00,22,89,00,00,04,BA,00,00,BA,7C,00,00,36,D6,00,00,E4,14,00,00,E7,8C,00,00,E3,49,01,00,F2,49,01,00,E3,49,01,00,58,12,00,00,92,09,00,00,',
        2: '67,02,00,00,C4,06,00,00,AF,08,00,00,2D,09,00,00,AF,08,00,00,94,08,00,00,68,07,00,00,32,00,00,00,AF,08,00,00,D8,18,00,00,D8,18,00,00,D8,18,00,00,00,00,00,00,00,00,00,00,'
      }
    };

    var translator = Translator();
    var actual = translator.translateToObject(diagnosticsData);

    var expected = {
      diagnostics: {
        0: {
          Pump: {
            hours: 0,
            minutes: 10,
            seconds: 15
          },
          Compressor: {
            hours: 0,
            minutes: 28,
            seconds: 52
          },
          Fan: {
            hours: 0,
            minutes: 37,
            seconds: 3
          },
          Motor: {
            hours: 0,
            minutes: 39,
            seconds: 9
          },
          'IR Sender': {
            hours: 0,
            minutes: 37,
            seconds: 3
          },
          'IR Receiver': {
            hours: 0,
            minutes: 36,
            seconds: 36
          },
          'Upper Switch': {
            hours: 0,
            minutes: 31,
            seconds: 36
          },
          'Lower Switch': {
            hours: 0,
            minutes: 0,
            seconds: 50
          },
          'UV LED': {
            hours: 0,
            minutes: 37,
            seconds: 3
          },
          'LED Light': {
            hours: 1,
            minutes: 46,
            seconds: 0
          },
          'LED Ring': {
            hours: 1,
            minutes: 46,
            seconds: 0
          },
          'LED Daytime': {
            hours: 1,
            minutes: 46,
            seconds: 0
          },
          'Clean Switch': {
            hours: 0,
            minutes: 0,
            seconds: 0
          },
          'Bucket Switch': {
            hours: 0,
            minutes: 0,
            seconds: 0
          }
        },
        1: {
          Pump: {
            hours: 0,
            minutes: 10,
            seconds: 15
          },
          Compressor: {
            hours: 0,
            minutes: 28,
            seconds: 52
          },
          Fan: {
            hours: 0,
            minutes: 37,
            seconds: 3
          },
          Motor: {
            hours: 0,
            minutes: 39,
            seconds: 9
          },
          'IR Sender': {
            hours: 0,
            minutes: 37,
            seconds: 3
          },
          'IR Receiver': {
            hours: 0,
            minutes: 36,
            seconds: 36
          },
          'Upper Switch': {
            hours: 0,
            minutes: 31,
            seconds: 36
          },
          'Lower Switch': {
            hours: 0,
            minutes: 0,
            seconds: 50
          },
          'UV LED': {
            hours: 0,
            minutes: 37,
            seconds: 3
          },
          'LED Light': {
            hours: 1,
            minutes: 46,
            seconds: 0
          },
          'LED Ring': {
            hours: 1,
            minutes: 46,
            seconds: 0
          },
          'LED Daytime': {
            hours: 1,
            minutes: 46,
            seconds: 0
          },
          'Clean Switch': {
            hours: 0,
            minutes: 0,
            seconds: 0
          },
          'Bucket Switch': {
            hours: 0,
            minutes: 0,
            seconds: 0
          }
        },
        2: {
          Pump: {
            hours: 0,
            minutes: 10,
            seconds: 15
          },
          Compressor: {
            hours: 0,
            minutes: 28,
            seconds: 52
          },
          Fan: {
            hours: 0,
            minutes: 37,
            seconds: 3
          },
          Motor: {
            hours: 0,
            minutes: 39,
            seconds: 9
          },
          'IR Sender': {
            hours: 0,
            minutes: 37,
            seconds: 3
          },
          'IR Receiver': {
            hours: 0,
            minutes: 36,
            seconds: 36
          },
          'Upper Switch': {
            hours: 0,
            minutes: 31,
            seconds: 36
          },
          'Lower Switch': {
            hours: 0,
            minutes: 0,
            seconds: 50
          },
          'UV LED': {
            hours: 0,
            minutes: 37,
            seconds: 3
          },
          'LED Light': {
            hours: 1,
            minutes: 46,
            seconds: 0
          },
          'LED Ring': {
            hours: 1,
            minutes: 46,
            seconds: 0
          },
          'LED Daytime': {
            hours: 1,
            minutes: 46,
            seconds: 0
          },
          'Clean Switch': {
            hours: 0,
            minutes: 0,
            seconds: 0
          },
          'Bucket Switch': {
            hours: 0,
            minutes: 0,
            seconds: 0
          }
        }
      }
    };

    expect(actual).toEqual(expected);
  });

  it('should return an empty object if there is no diagnostics data', function() {
    var diagnosticsData = {
      diagnosticEntries: {}
    };

    var translator = Translator();
    var actual = translator.translateToObject(diagnosticsData);

    expect(actual).toEqual({
      diagnostics: {}
    });
  });
});
