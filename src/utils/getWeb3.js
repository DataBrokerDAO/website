import Web3 from 'web3';
import contract from 'truffle-contract';
import saleJSON from '../contracts/TokenSale.json';

export const getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  //window.addEventListener('load', function() {
  var results;
  var web3 = window.web3;

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  // if (typeof web3 !== 'undefined') {
  //   // Use Mist/MetaMask's provider.
  //   web3 = new Web3(web3.currentProvider);

  //   results = {
  //     web3: web3,
  //   };

  //   console.log('Injected web3 detected.');

  //   resolve(results);
  // } else {
  //   // Fallback to localhost if no web3 injection.
  var provider = new Web3.providers.HttpProvider(
    process.env.REACT_APP_SALE_NETWORK
  );

  web3 = new Web3(provider);

  const sale = contract(saleJSON);
  sale.setProvider(provider);

  results = {
    web3,
    sale
  };

  // console.log('No web3 instance injected, using infura web3.');

  resolve(results);
  // }
  //});
});
