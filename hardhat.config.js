require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.24" },
      { version: "0.6.7", settings: {} },
      { version: "0.8.0", settings: {} }, // Add this line.
    ],
  },
};
