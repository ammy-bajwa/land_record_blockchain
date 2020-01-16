var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Land = artifacts.require("./Land.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Land);
};
