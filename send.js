var Web3 = require('web3');
var Tx = require('ethereumjs-tx');
// Show Web3 where it needs to look for a connection to Ethereum.
//web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/3bfb9c601a04448bb47720f088d18f33'));
var gasPrice = "2";//or get with web3.eth.gasPrice
var gasLimit = 3000000;
var addr = "0xB354853Df5AC3bA0ECb77701fE32ec86A9D9b671";
var toAddress = "0x4582Cf7Ae7CF0b9C687f1a3a7dBc899a34024eEF";
var amountToSend = "0.00192823123348952"; //$1
var nonce = web3.eth.getTransactionCount(addr); //211;
var rawTransaction = {
"from": addr,
"nonce": web3.utils.toHex(nonce),
"gasPrice": web3.utils.toHex(gasPrice * 1e9),
"gasLimit": web3.utils.toHex(gasLimit),
"to": toAddress,
"value": amountToSend ,
"chainId": 3 //remember to change this
};
var privateKey = "2b0525117c6e348153650cf0adcf3a471126a464caf9078468e8aa5d1d33c65f";
var privKey = new Buffer(privateKey, 'hex');
console.log("privKey  : ", privKey);
const tx = new Tx(rawTransaction);
tx.sign(privKey);
var serializedTx = tx.serialize();
console.log('serializedTx : '+serializedTx);
web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
if (!err)
{
console.log('Txn Sent and hash is '+hash);
}
else
{
console.error(err);
}
});