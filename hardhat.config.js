require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: 'baseSepolia',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    baseSepolia: {
      url: 'https://base-sepolia-rpc.publicnode.com',
      accounts: ['5ab95bcc80f82a2ee136204aeb371443ef4593f07409e7efef43e97cb9ca864a'],
      chainId: 84532, // Update this if the actual chain ID for base-sepolia is different
      timeout: 120000,
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
};
