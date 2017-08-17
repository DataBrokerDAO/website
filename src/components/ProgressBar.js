import React, { Component } from 'react';
import getWeb3 from '../utils/getWeb3';
// import contract from 'truffle-contract';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      percentage: 0,
      tokens: 0,
      eth: 0,
      MAX_TOKENS: 225000000,
      CONTRACT_ADDRESS: '0x52b8398551bb1d0bdc022355897508f658ad42f8',
    };
  }

  componentWillMount() {
    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3,
        });
        this.instantiateContract()
          .then(() => {
            this.polling = true;
            this.longPoller();
          })
          .catch(error => {
            console.log('longPoller error', error);
          });
      })
      .catch(e => {
        console.log('Error finding web3.', e);
      });
  }

  longPoller() {
    setTimeout(() => {
      this.instantiateContract().then(() => {
        if (this.polling) {
          this.longPoller();
        }
      });
    }, 2000);
  }

  componentWillUnmount() {
    this.polling = false;
  }

  async instantiateContract() {
    const balance = await this.state.web3.eth.getBalance(
      this.state.CONTRACT_ADDRESS
    );
    const totalSupply = Math.round(this.state.MAX_TOKENS / 3); //make dynamic
    this.setState({
      eth: this.state.web3.fromWei(balance, 'ether').toFixed(2),
      tokens: totalSupply,
      percentage: Math.round(totalSupply / this.state.MAX_TOKENS * 100),
    });
    // const simpleStorage = contract(SimpleStorageContract);
    // simpleStorage.setProvider(this.state.web3.currentProvider);
    // // Declaring this for later so we can chain functions on SimpleStorage.
    // var simpleStorageInstance;
    // // Get accounts.
    // this.state.web3.eth.getAccounts((error, accounts) => {
    //   simpleStorage
    //     .deployed()
    //     .then(instance => {
    //       simpleStorageInstance = instance;
    //       // Stores a given value, 5 by default.
    //       return simpleStorageInstance.set(5, { from: accounts[0] });
    //     })
    //     .then(result => {
    //       // Get the value from the contract to prove it worked.
    //       return simpleStorageInstance.get.call(accounts[0]);
    //     })
    //     .then(result => {
    //       // Update state with the result.
    //       return this.setState({ storageValue: result.c[0] });
    //     });
    // });
  }

  render() {
    return (
      <div>
        <hr />
        <div className="progress-horizontal progress-horizontal--lg">
          <div className="progress-horizontal__bar" data-value="40">
            <div
              className="progress-horizontal__progress"
              style={{ width: `${this.state.percentage}%` }}
            />
          </div>
          <span className="progress-horizontal__label h5">
            Tokens sold: {this.state.tokens} DATA -- ETH raised:{' '}
            {this.state.eth} -- Done: {this.state.percentage}%
          </span>
        </div>
        <hr />
      </div>
    );
  }
}

export default ProgressBar;
