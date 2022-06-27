const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/3bfb9c601a04448bb47720f088d18f33"))

web3.eth.getBalance("0xB354853Df5AC3bA0ECb77701fE32ec86A9D9b671", function(err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(web3.utils.fromWei(result, "ether") + " ETH")
  }
})