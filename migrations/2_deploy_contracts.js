const ConvertLib = artifacts.require("ConvertLib");
const NovaKoin = artifacts.require("NovaKoin");
//const SafeMath = artifacts.require("SafeMath");
module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  //deployer.deploy(SafeMath);
  deployer.link(ConvertLib, NovaKoin);
  deployer.deploy(NovaKoin);
};
