var components = [
  'Pump',
  'Compressor',
  'Fan',
  'Motor',
  'IR Sender',
  'IR Receiver',
  'Upper Switch',
  'Lower Switch',
  'UV LED',
  'LED Light',
  'LED Ring',
  'LED Daytime',
  'Clean Switch',
  'Bucket Switch',
];

module.exports = function() {
  return {
    translateToObject: function(diagnosticsData) {
      var diagnostics = {}

      for (var rawDataIndex in Object.keys(diagnosticsData.rawDiagnostics)) {
        diagnostics[rawDataIndex] = {}
        var rawData = diagnosticsData.rawDiagnostics[rawDataIndex];
        for (var componentIndex in components) {
          var componentRawData = rawData.slice(parseInt(componentIndex) * 12, (parseInt(componentIndex) + 1) * 12);
          var seconds = convertFromLittleEndianStringToSeconds(componentRawData);
          diagnostics[rawDataIndex][components[componentIndex]] = {}
          diagnostics[rawDataIndex][components[componentIndex]].hours = getHours(seconds);
          diagnostics[rawDataIndex][components[componentIndex]].minutes = getMinutes(seconds);
          diagnostics[rawDataIndex][components[componentIndex]].seconds = getSeconds(seconds);
        }
      }

      return diagnostics;
    }
  }
}

function convertFromLittleEndianStringToSeconds(dataString) {
  return parseInt('0x' + getHexString(dataString));
}

function getHoursMinutesSeconds(seconds) {
  return getHours(seconds).toString() + 'h ' + getMinutes(seconds).toString() + 'm ' + getSeconds(seconds).toString() + 's\n';
}

function getHexString(dataString) {
  var match = dataString.match(/[0-9A-Fa-f]{2}/);
  if (match === null) {
    return ''
  } else {
    return getHexString(dataString.slice(3)) + match
  }
}

function getHours(seconds) {
  return Math.floor(seconds / 3600);
}

function getMinutes(seconds) {
  return Math.floor((seconds - (getHours(seconds) * 3600)) / 60)
}

function getSeconds(seconds) {
  return seconds % 60;
}
