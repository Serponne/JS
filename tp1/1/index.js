const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let place = input[0];

    for (let index = 1; index < input.length; index++) 
    {
        const element = input[index];
        let deplacements = element.split(" ");
        let depassePar = parseInt(deplacements[0], 10);
        let depasse = parseInt(deplacements[1], 10);
        place = place + depassePar;
        place = place - depasse;
    }

    if (place >= 0 && place <= 100) {
        return 1000;
    } else if (place > 100 && place <= 10000) {
        return 100;
    } else {
        return "KO";
    }
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}