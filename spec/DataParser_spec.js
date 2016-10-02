var DataParser = require('../src/DataParser');

describe('Data Parser', function() {
  it('should return empty object for empty data', function() {
    var rawData = new DataParser("");
    var actual = rawData.parse();
    var expected = {
      diagnostics: {},
      temperatureData: {}
    };

    expect(actual).toEqual(expected);
  });

  it('should return object with one opal log data entry', function() {
    var rawData =
      new DataParser("00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00," +
        "00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00," +
        "00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,");
    var actual = rawData.parse();
    var expected = {
      diagnostics: {
        0: "00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,0" +
          "0,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
          ",00,00,00,00,00,00,00,00,00,00,00,00,"
      },
      temperatureData: {}
    };

    expect(actual).toEqual(expected);
  });

  it('should return object with more than 1 diagnostic entries', function() {
    var rawData = new DataParser("00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
      ",00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,0" +
      "0,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,::::::00,00,00," +
      "00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
      ",00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,0" +
      "0,00,00,00,00,00,");
    var actual = rawData.parse();
    var expected = {
      diagnostics: {
        0: "00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,0" +
          "0,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
          ",00,00,00,00,00,00,00,00,00,00,00,00,",
        1: "00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,0" +
          "0,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
          ",00,00,00,00,00,00,00,00,00,00,00,00,"
      },
      temperatureData: {}
    };

    expect(actual).toEqual(expected);
  });

  it('should return object with one temperature history entry', function() {
    var rawData = new DataParser("Sep 7, 2016, 4:11 PM:14,");
    var actual = rawData.parse();
    var expected = {
      diagnostics: {},
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

    expect(actual).toEqual(expected);
  });

  it('should return object with two temperature history entries', function() {
    var rawData =
      new DataParser("Sep 7, 2016, 4:12 PM:44,Sep 7, 2016, 4:13 PM:46,");
    var actual = rawData.parse();
    var expected = {
      diagnostics: {},
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

    expect(actual).toEqual(expected);
  });

  it('should return object with multiple temperature history entries', function() {
    var rawData =
      new DataParser("TEMP DATA: Sep 7, 2016, 4:11 PM:14,Sep 7, 2016, 4:12 P" +
        "M:20,Sep 7, 2016, 4:13 PM:22,Sep 7, 2016, 4:14 PM:23,Sep 7, 2016, 4:1" +
        "5 PM:25,");
    var actual = rawData.parse();
    var expected = {
      diagnostics: {},
      temperatureData: {
        0: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 14
        },
        1: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:12 PM",
          },
          temperature: 20
        },
        2: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:13 PM",
          },
          temperature: 22
        },
        3: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:14 PM",
          },
          temperature: 23
        },
        4: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:15 PM",
          },
          temperature: 25
        },
      }
    };

    expect(actual).toEqual(expected);
  });

  it('should correctly parse entire raw data', function() {
    var rawData =
      new DataParser("------------ DATA DUMP (index: <04>) -----------------" +
        "-00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
        ",00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
        ",00,00,00,00,00,00,00,00,00,00,::::::00,00,00,00,00,00,00,00,00,00,00" +
        ",00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
        ",00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,::" +
        "::::00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
        ",00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
        ",00,00,00,00,00,00,00,00,00,00,00,::::::E0,0B,00,00,55,3C,00,00,0A,45" +
        ",00,00,81,46,00,00,46,52,00,00,10,42,00,00,A7,95,00,00,A6,19,00,00,4D" +
        ",4F,00,00,D9,42,01,00,E0,42,01,00,DA,42,01,00,00,00,00,00,44,00,00,00" +
        ",::::::67,02,00,00,C4,06,00,00,AF,08,00,00,2D,09,00,00,AF,08,00,00,94" +
        ",08,00,00,68,07,00,00,32,00,00,00,AF,08,00,00,D8,18,00,00,D8,18,00,00" +
        ",D8,18,00,00,00,00,00,00,00,00,00,00,::::::4C,10,00,00,55,7B,00,00,A4" +
        ",82,00,00,22,89,00,00,04,BA,00,00,BA,7C,00,00,36,D6,00,00,E4,14,00,00" +
        ",E7,8C,00,00,E3,49,01,00,F2,49,01,00,E3,49,01,00,58,12,00,00,92,09,00" +
        ",00,::::::C7,04,00,00,EB,27,00,00,49,2A,00,00,7E,2B,00,00,F0,46,00,00" +
        ",F8,28,00,00,6A,29,00,00,61,0D,00,00,49,2A,00,00,47,71,00,00,4A,71,00" +
        ",00,47,71,00,00,43,1C,00,00,B5,02,00,00,::::::TEMP DATA Sep 7, 2016, " +
        "4:11 PM:14,Sep 7, 2016, 4:11 PM:20,Sep 7, 2016, 4:11 PM:22,Sep 7, 201" +
        "6, 4:11 PM:23,Sep 7, 2016, 4:11 PM:25,Sep 7, 2016, 4:11 PM:27,Sep 7, " +
        "2016, 4:11 PM:29,Sep 7, 2016, 4:11 PM:31,Sep 7, 2016, 4:11 PM:32,Sep " +
        "7, 2016, 4:11 PM:33,Sep 7, 2016, 4:11 PM:35,Sep 7, 2016, 4:12 PM:37,S" +
        "ep 7, 2016, 4:12 PM:39,Sep 7, 2016, 4:12 PM:41,Sep 7, 2016, 4:12 PM:4" +
        "2,Sep 7, 2016, 4:12 PM:44,Sep 7, 2016, 4:13 PM:46,Sep 7, 2016, 4:13 P" +
        "M:48,");
    var actual = rawData.parse();
    var expected = {
      diagnostics: {
        0: "00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,0" +
          "0,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
          ",00,00,00,00,00,00,00,00,00,00,00,00,",
        1: "00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,0" +
          "0,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
          ",00,00,00,00,00,00,00,00,00,00,00,00,",
        2: "00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,0" +
          "0,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00" +
          ",00,00,00,00,00,00,00,00,00,00,00,00,",
        3: "E0,0B,00,00,55,3C,00,00,0A,45,00,00,81,46,00,00,46,52,00,00,10,4" +
          "2,00,00,A7,95,00,00,A6,19,00,00,4D,4F,00,00,D9,42,01,00,E0,42,01,00" +
          ",DA,42,01,00,00,00,00,00,44,00,00,00,",
        4: "67,02,00,00,C4,06,00,00,AF,08,00,00,2D,09,00,00,AF,08,00,00,94,0" +
          "8,00,00,68,07,00,00,32,00,00,00,AF,08,00,00,D8,18,00,00,D8,18,00,00" +
          ",D8,18,00,00,00,00,00,00,00,00,00,00,",
        5: "4C,10,00,00,55,7B,00,00,A4,82,00,00,22,89,00,00,04,BA,00,00,BA,7" +
          "C,00,00,36,D6,00,00,E4,14,00,00,E7,8C,00,00,E3,49,01,00,F2,49,01,00" +
          ",E3,49,01,00,58,12,00,00,92,09,00,00,",
        6: "C7,04,00,00,EB,27,00,00,49,2A,00,00,7E,2B,00,00,F0,46,00,00,F8,2" +
          "8,00,00,6A,29,00,00,61,0D,00,00,49,2A,00,00,47,71,00,00,4A,71,00,00" +
          ",47,71,00,00,43,1C,00,00,B5,02,00,00,"
      },
      temperatureData: {
        0: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 14
        },
        1: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 20
        },
        2: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 22
        },
        3: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 23
        },
        4: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 25
        },
        5: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 27
        },
        6: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 29
        },
        7: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 31
        },
        8: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 32
        },
        9: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 33
        },
        10: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:11 PM",
          },
          temperature: 35
        },
        11: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:12 PM",
          },
          temperature: 37
        },
        12: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:12 PM",
          },
          temperature: 39
        },
        13: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:12 PM",
          },
          temperature: 41
        },
        14: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:12 PM",
          },
          temperature: 42
        },
        15: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:12 PM",
          },
          temperature: 44
        },
        16: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:13 PM",
          },
          temperature: 46
        },
        17: {
          recorded: {
            date: "Sep 7, 2016",
            time: "4:13 PM",
          },
          temperature: 48
        },
      }
    };

    expect(actual).toEqual(expected);
  });
});
