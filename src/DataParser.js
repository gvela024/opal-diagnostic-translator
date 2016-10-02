module.exports = function(rawData) {
  const parsedData = {
    diagnostics: {},
    temperatureData: {}
  };

  //Regex
  var opalLogFormat =
    /([A-Z0-9]{2},){56}/g;
  var temperatureDataFormat =
    /[A-Za-z]{3}\s\d{1,2},\s\d{4},\s\d{1,2}:\d{1,2}\s[A-Z]{2}:\d{1,2}/g;
  var dateFormat =
    /[A-Za-z]{3}\s\d{1,2},\s\d{4}/g;
  var temperatureFormat =
    /\d{1,2}$/;
  var timeFormat =
    /\d{1,2}:\d{1,2}\s[A-Z]{2}/g;

  compileDiagnostics = function(data) {
    if (data.search(opalLogFormat) > -1) {
      var diagnosticsToAdd = data.match(opalLogFormat);

      for (var logIndex = 0; logIndex < diagnosticsToAdd.length; logIndex++) {
        parsedData.diagnostics[logIndex + 1] = diagnosticsToAdd[logIndex];
      }
    }
  };

  compileTemperatureHistory = function(data) {
    if (data.search(temperatureDataFormat) > -1) {
      var temperatureDataToAdd = data.match(temperatureDataFormat);

      for (var temperatureIndex = 0; temperatureIndex < temperatureDataToAdd.length; temperatureIndex++) {
        parsedData.temperatureData[temperatureIndex + 1] = {
          recorded: {
            date: temperatureDataToAdd[temperatureIndex].match(dateFormat)[0],
            time: temperatureDataToAdd[temperatureIndex].match(timeFormat)[0]
          },
          temperature: parseInt(temperatureDataToAdd[temperatureIndex].match(temperatureFormat)[0])
        };
      }
    }
  };

  this.parse = function() {
    compileDiagnostics(rawData);
    compileTemperatureHistory(rawData);

    return parsedData;
  };
};
