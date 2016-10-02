module.exports = function(raw_data) {
  console.log('Oh yeah!')
};

// regex101.com

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
