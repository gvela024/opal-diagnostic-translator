module.exports = function() {
  return {
    parseJson: function(diagnosticsJson) {
      var csv = '';
      var diagnostics = diagnosticsJson.diagnostics;
      for (var diagnosticItem in diagnostics) {
        csv += "Log Index " + diagnosticItem + ",\n";
        csv += "Component,Hours,Minutes,Seconds,\n"
        for (var component in diagnostics[diagnosticItem]) {
          csv += component + "," + diagnostics[diagnosticItem][component].hours + "," + diagnostics[diagnosticItem][component].minutes + "," + diagnostics[diagnosticItem][component].seconds + ",\n";
        }
        csv += "\n\n";
      }
      // console.log(csv);
      return csv;
    }
  }
}
