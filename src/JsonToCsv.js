module.exports = function() {
  return {
    parseJson = function (diagnosticsJson) {
      var csv = '';
      for(var diagnostic in diagnosticsJson) {
        console.log(diagnostic);
        console.log(diagnosticsJson[diagnostic]);
      }
    }
  }
}
