
// var HDWalletProvider = require("truffle-hdwallet-provider-privkey");
// var apiKey = ''
// var mnenomic = '';
// var pk = [''];


// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
//   compilers: {
//     solc: {
//       version: '^0.5.2', // A version or constraint - Ex. "^0.5.0"
//     }
//   },

//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 9545,
//       network_id: "*" // Match any network id
//     },
//     ropsten: {
//       // provider: new HDWalletProvider(mnenomic, "https://ropsten.infura.io/" + apiKey),
//       provider: new HDWalletProvider(pk, "https://ropsten.infura.io/" + apiKey),
//       network_id: 3,
//       // gasPrice: 1000000000,
//       // gas: 257662,
//       // gas: 4712388,
//       // gasPrice: 100000000000,
//       gas: 4700000,
//       gasPrice: 1000000000,
//     },
//   }
// };

// const regeneratorRuntime = require("regenerator-runtime");

// var LedgerWalletProvider = require("truffle-ledger-provider");
// var infura_apikey = ''; // set your Infura API key
// var ledgerOptions = {
//   networkId: 3, // ropsten testnet
//   accountsOffset: 0 // we use the first address
// };
module.exports = {
  compilers: {
    solc: {
      version: '0.5.4', // A version or constraint - Ex. "^0.5.0"
    }
  },
  // networks: {
  //   ropsten: {
  //     provider: new LedgerWalletProvider(
  //       ledgerOptions,
  //       "https://ropsten.infura.io/" + infura_apikey
  //     ),
  //     network_id: 3,
  //     gas: 4600000
  //   }
  // }
};
