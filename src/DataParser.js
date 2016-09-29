class DataParser {
  constructor(raw_data) {
    this.raw_data = raw_data;
    console.log("LOL");
  }

  parse() {
    return {
      opal_diagnostics: {},
      temperature_history: {}
    };
  }
}

module.exports = DataParser;
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
