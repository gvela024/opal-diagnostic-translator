var JsonToCsv = require('../src/JsonToCsv');

describe('JSON to CSV translator', function() {
  var jsonToCsv = JsonToCsv();

  it('should turn one diagnostic data to a pretty CSV format', function() {
    var json = {
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

    var expected = '';
    var actual = jsonToCsv.parseJson(json);
    expect(actual).toEqual(expected);
  });
});
