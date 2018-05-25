export const getWeb3 = new Promise(async function(resolve, reject) {
  const [Web3, contract, saleJSON] = await Promise.all([
    import(/* webpackChunkName: 'contract' */ 'web3'),
    import(/* webpackChunkName: 'contract' */ 'truffle-contract'),
    import(/* webpackChunkName: 'contract' */ '../contracts/TokenSale.json'),
  ]).catch(reject)

  // Wait for loading completion to avoid race conditions with web3 injection timing.
  //window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  // if (typeof web3 !== 'undefined') {
  //   // Use Mist/MetaMask's provider.
  //   web3 = new Web3(web3.currentProvider);

  //   results = {
  //     web3: web3,
  //   };

  //   console.log('Injected web3 detected.');

  //   resolve(dresults);
  // } else {
  //   // Fallback to localhost if no web3 injection.
  const provider = new Web3.providers.HttpProvider(
    process.env.REACT_APP_SALE_NETWORK,
  )

  const web3 = new Web3(provider)

  const sale = contract(saleJSON)
  sale.setProvider(provider)

  const results = {
    web3,
    sale,
  }

  // console.log('No web3 instance injected, using infura web3.');

  resolve(results)
  // }
  //});
})
