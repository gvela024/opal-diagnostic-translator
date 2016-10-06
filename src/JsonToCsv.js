module.exports = function() {
  return {
    parseJson: function(diagnosticsJson) {
      var csv = '';
      var diagnostics = diagnosticsJson.diagnostics;
      if (diagnostics !== undefined) {
        for (var diagnosticItem in diagnostics) {
          csv += "Log Index " + diagnosticItem + ",\n";
          csv += "Component,Hours,Minutes,Seconds,\n"
          for (var component in diagnostics[diagnosticItem]) {
            csv += component + "," + diagnostics[diagnosticItem][component].hours + "," + diagnostics[diagnosticItem][component].minutes + "," + diagnostics[diagnosticItem][component].seconds + ",\n";
          }
          csv += "\n\n";
        }
      }

      var temperatureDatum = diagnosticsJson.temperatureData;
      if (temperatureDatum !== undefined) {
        csv += "Temperature Data,\nDate,Year,Time,Temperature (F),\n"
        for (var temperatureData in temperatureDatum) {
          csv += temperatureDatum[temperatureData].recorded.date + "," + temperatureDatum[temperatureData].recorded.time + "," + temperatureDatum[temperatureData].temperature + ",\n";
        }
      }
      return csv;
    }
  }
}
