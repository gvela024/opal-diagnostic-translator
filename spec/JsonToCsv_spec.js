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

    var expected = "" +
      "Log Index 0,\n" +
      "Component,Hours,Minutes,Seconds,\n" +
      "Pump,0,20,23,\n" +
      "Compressor,2,50,19,\n" +
      "Fan,3,0,25,\n" +
      "Motor,3,5,34,\n" +
      "IR Sender,5,2,40,\n" +
      "IR Receiver,2,54,48,\n" +
      "Upper Switch,2,56,42,\n" +
      "Lower Switch,0,57,5,\n" +
      "UV LED,3,0,25,\n" +
      "LED Light,8,3,19,\n" +
      "LED Ring,8,3,22,\n" +
      "LED Daytime,8,3,19,\n" +
      "Clean Switch,2,0,35,\n" +
      "Bucket Switch,0,11,33,\n\n\n";

    var actual = jsonToCsv.parseJson(json);
    expect(actual).toEqual(expected);
  });

  it("should return the CSV for multiple diagnostic entries", function() {
    var json = {
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

    var expected = "" +
      "Log Index 0,\n" +
      "Component,Hours,Minutes,Seconds,\n" +
      "Pump,0,10,15,\n" +
      "Compressor,0,28,52,\n" +
      "Fan,0,37,3,\n" +
      "Motor,0,39,9,\n" +
      "IR Sender,0,37,3,\n" +
      "IR Receiver,0,36,36,\n" +
      "Upper Switch,0,31,36,\n" +
      "Lower Switch,0,0,50,\n" +
      "UV LED,0,37,3,\n" +
      "LED Light,1,46,0,\n" +
      "LED Ring,1,46,0,\n" +
      "LED Daytime,1,46,0,\n" +
      "Clean Switch,0,0,0,\n" +
      "Bucket Switch,0,0,0,\n" +
      "\n" +
      "\n" +
      "Log Index 1,\n" +
      "Component,Hours,Minutes,Seconds,\n" +
      "Pump,0,10,15,\n" +
      "Compressor,0,28,52,\n" +
      "Fan,0,37,3,\n" +
      "Motor,0,39,9,\n" +
      "IR Sender,0,37,3,\n" +
      "IR Receiver,0,36,36,\n" +
      "Upper Switch,0,31,36,\n" +
      "Lower Switch,0,0,50,\n" +
      "UV LED,0,37,3,\n" +
      "LED Light,1,46,0,\n" +
      "LED Ring,1,46,0,\n" +
      "LED Daytime,1,46,0,\n" +
      "Clean Switch,0,0,0,\n" +
      "Bucket Switch,0,0,0,\n" +
      "\n" +
      "\n" +
      "Log Index 2,\n" +
      "Component,Hours,Minutes,Seconds,\n" +
      "Pump,0,10,15,\n" +
      "Compressor,0,28,52,\n" +
      "Fan,0,37,3,\n" +
      "Motor,0,39,9,\n" +
      "IR Sender,0,37,3,\n" +
      "IR Receiver,0,36,36,\n" +
      "Upper Switch,0,31,36,\n" +
      "Lower Switch,0,0,50,\n" +
      "UV LED,0,37,3,\n" +
      "LED Light,1,46,0,\n" +
      "LED Ring,1,46,0,\n" +
      "LED Daytime,1,46,0,\n" +
      "Clean Switch,0,0,0,\n" +
      "Bucket Switch,0,0,0,\n\n\n";

    var actual = jsonToCsv.parseJson(json);
    expect(actual).toEqual(expected);
  });

  it("should print temperature data in some pretty format", function() {
    var json = {
      temperatureData: {
        0: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 14
        }
      }
    };

    var expected = '' +
      "Temperature Data,\n" +
      "Date,Year,Time,Temperature (F),\n" +
      "Sep 7, 2016,4:11 PM,14,\n";
    var actual = jsonToCsv.parseJson(json);
    expect(actual).toEqual(expected);
  });

  it("should print more than one temperature in CSV format", function() {
    var json = {
      temperatureData: {
        0: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:12 PM",
          },
          temperature: 44
        },
        1: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:13 PM",
          },
          temperature: 46
        }
      }
    };

    var expected = '' +
      "Temperature Data,\n" +
      "Date,Year,Time,Temperature (F),\n" +
      "Sep 7, 2016,4:12 PM,44,\n" +
      "Sep 7, 2016,4:13 PM,46,\n";
    var actual = jsonToCsv.parseJson(json);
    expect(actual).toEqual(expected);
  });
});
