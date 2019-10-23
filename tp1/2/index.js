const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let nbreCartons = input[0];
        let poids = 0;
        let cartonsCourant = 0;
        let cartonsUp = 0;
        let index = 1;
        let nbreAllerRetours = 0;

        while (cartonsUp != nbreCartons) {
            poids += input[index];

            index++;
            cartonsUp++;

            if (poids > 100) {
                index--;
                cartonsUp--;
                poids = 0;
                cartonsUp += cartonsCourant;
                cartonsCourant = 0;
                nbreAllerRetours++;
            }
        }
        nbreAllerRetours++;

        return nbreAllerRetours;
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