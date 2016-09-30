var DataParser = require('../src/DataParser');

describe('Data Parser', function() {
  it('should return empty object for empty data', function() {
    var raw_data = new DataParser("");
    var expected = { opal_diagnostics: {}, temperature_history: {} };

    expect(raw_data.parse()).toEqual(expected);
  });

  it('should return object with one opal log data entry', function() {
    var raw_data = new DataParser("00,00,00,");
    var expected = {
      opal_diagnostics: {
        1: "00,00,00,"
      },
       temperature_history: {}
     };

     expect(raw_data.parse()).toEqual(expected);
  });

  it('should return object with two opal log data entries', function() {
    var raw_data = new DataParser("00,00,00,:::::A1,12,B2,");
    var expected = {
      opal_diagnostics: {
        1: "00,00,00,",
        2: "A1,12,B2,"
      },
       temperature_history: {}
     };

     expect(raw_data.parse()).toEqual(expected);
  });

  it('should return object with multiple opal log data entries', function() {
    var raw_data = new DataParser("-- DATA DUMP (index: <04>) -- \
    00,00,00,:::00,00,00,:::E0,0B,00,:::67,02,00,:::4C,10,00,:::C7,04,00,:::");
    var expected = {
      opal_diagnostics: {
        1: "00,00,00,",
        2: "00,00,00,",
        3: "E0,0B,00,",
        4: "67,02,00,",
        5: "4C,10,00,",
        6: "C7,04,00,",
      },
       temperature_history: {}
     };

     expect(raw_data.parse()).toEqual(expected);
  });

  it('should return object with one temperature history entry', function() {
    var raw_data = new DataParser("Sep 7, 2016, 4:11 PM:14,");
    var expected = {
      opal_diagnostics: {
      },
      temperature_history: {
        1: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 14
        }
      }
     };

     expect(raw_data.parse()).toEqual(expected);
  });

  it('should return object with two temperature history entries', function() {
    var raw_data = new DataParser("Sep 7, 2016, 4:12 PM:44,Sep 7, 2016, 4:13 PM:46,");
    var expected = {
      opal_diagnostics: {
      },
      temperature_history: {
        1: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:12 PM",
          },
          temperature: 44
        },
        2: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:13 PM",
          },
          temperature: 46
        }
      }
     };

     expect(raw_data.parse()).toEqual(expected);
  });

  it('should return object with multiple temperature history entries', function() {
    var raw_data =
      new DataParser(" TEMP DATA \
        Sep 7, 2016, 4:11 PM:14, \
        Sep 7, 2016, 4:12 PM:20, \
        Sep 7, 2016, 4:13 PM:22, \
        Sep 7, 2016, 4:14 PM:23, \
        Sep 7, 2016, 4:15 PM:25,");
    var expected = {
      opal_diagnostics: {
      },
      temperature_history: {
        1: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 14
        },
        2: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:12 PM",
          },
          temperature: 20
        },
        3: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:13 PM",
          },
          temperature: 22
        },
        4: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:14 PM",
          },
          temperature: 23
        },
        5: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:15 PM",
          },
          temperature: 25
        },
      }
     };

     expect(raw_data.parse()).toEqual(expected);
  });
});
