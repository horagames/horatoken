var Migrations = artifacts.require("./Migrations.sol");
var HoraToken = artifacts.require("./HoraToken.sol");

module.exports = function(callback) {

  Migrations.web3.eth.getGasPrice(function(error, result){
    var gasPrice = Number(result);
    console.log("Gas Price is " + gasPrice + " wei"); // "10000000000000"

    var MetaCoinContract = web3.eth.contract(Migrations._json.abi);
    var contractData = MetaCoinContract.new.getData({data: Migrations._json.bytecode});
    var gas = Number(web3.eth.estimateGas({data: contractData}, function(err, gas) {
      console.log("gas estimation = " + gas + " units");
      console.log("gas cost estimation = " + (gas * gasPrice) + " wei");
      console.log("gas cost estimation = " + Migrations.web3.fromWei((gas * gasPrice), 'ether') + " ether");
    }))


  // web3.eth.getBalance('0x87a88fdc552424ef60854920ce65714ccb71d771', function(err, account) {
  //   console.log(err, account.toString())
  // })
  //
  //
  });
  //
  // web3.eth.getAccounts(function(err, accounts) {
  //   console.log(err, accounts)
  // })

 // HoraToken.deployed().then((x) => x.mint('0xa6B42eB748C7B41866Da78Bd6A76f9d9b8D7479b', 1000000000000000000))
};