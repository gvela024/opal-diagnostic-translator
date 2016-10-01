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
]

module.exports = function(output) {
  return {
    translate: function(diagnosticsData) {
      var context = {
        result: '',
      };

      for (diagnosticEntryIndex = 0; diagnosticEntryIndex < Object.keys(diagnosticsData.diagnosticEntries).length; diagnosticEntryIndex++) {
        context.result += 'Entry ' + diagnosticEntryIndex + '\n';
        context.entry = diagnosticsData.diagnosticEntries[diagnosticEntryIndex];
        components.forEach(component, context);
        context.result += '\n'
      }
      output.print(context.result);
    }
  }
}

function component(element, index, array) {
  var resultingData = ''

  var diagnostic_entry = this.entry.slice(index * 12, (index + 1) * 12);
  var seconds = convertFromLittleEndianStringToSeconds(diagnostic_entry);
  var hoursMinutesSeconds = getHoursMinutesSeconds(seconds);
  this.result += element + ': ' + hoursMinutesSeconds;
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
