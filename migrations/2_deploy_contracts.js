
var HoraToken = artifacts.require("./HoraToken.sol");

module.exports = function(deployer) {
  deployer.deploy(HoraToken);

};

// ERC20
// HoraToken.deployed().then(function(instance) {console.log(instance);});