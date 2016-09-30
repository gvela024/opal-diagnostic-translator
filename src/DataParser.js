module.exports = function(raw_data) {
    var parsed_data = {
      opal_diagnostics: {},
      temperature_history: {}
    };

    var diagnostic_data_format =
      /[A-Z0-9]{2},([A-Z0-9]{2},)+/g;
    var temperature_format =
      /[A-Za-z]{3}\s\d{1,2},\s\d{4},\s\d{1,2}:\d{1,2}\s[A-Z]{2}:\d{1,2}/g;

  compileDiagnosticEntries = function(data) {
    if(data.search(diagnostic_data_format) > -1)
    {
      var diagnostic_entries = data.match(diagnostic_data_format);

      for(var log_index = 0; log_index < diagnostic_entries.length; log_index++)
      {
        parsed_data.opal_diagnostics[log_index + 1] = diagnostic_entries[log_index];
      }
    }
  };

  compileTemperatureHistory = function (data) {
    if(data.search(temperature_format) > -1)
    {
      var temperature_entries = data.match(temperature_format);

      for(var history_index = 0; history_index < temperature_entries.length; history_index++)
      {
        parsed_data.temperature_history[history_index + 1] =  {
          recorded: {
            date: temperature_entries[history_index].match(/[A-Za-z]{3}\s\d{1,2},\s\d{4}/g)[0],
            time: temperature_entries[history_index].match(/\d{1,2}:\d{1,2}\s[A-Z]{2}/g)[0]
          },
          temperature: parseInt(temperature_entries[history_index].match(temperature_format)[0].slice(-2))
        };
      }
    }
  };

  this.parse = function() {
    compileDiagnosticEntries(raw_data);
    compileTemperatureHistory(raw_data);

    return parsed_data;
  };
};
// {
//   diagnostic_entries = {
//     [0] = "00,00, ...",
//     ...
//   },
//   temperature_hisotry = {
//     [0] = {
//       date = {
//         date = "11 Oct 1989",
//         time = "7:22",
//         deduced_seconds_elapsed = ##,
//       },
//       temperature = ##
//     },
//     ...
//   }
// }
