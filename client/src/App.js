import React, { Component } from "react";

import LandContract from "./contracts/Land.json";

import Tabs from "./components/Tabs/Tabs";

import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, land_contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork_land = LandContract.networks[networkId];

      const land_instance = new web3.eth.Contract(
        LandContract.abi,
        deployedNetwork_land && deployedNetwork_land.address
      );
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState(
        { web3, accounts, land_contract: land_instance },
        this.runExample
      );
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const {
      land_contract: {
        methods: { getLength }
      }
    } = this.state;
    const arrIndex = await getLength().call();
    console.log("should be zero ", arrIndex);
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div>
        <Tabs
          land_contract={this.state.land_contract}
          account={this.state.accounts[0]}
        />
      </div>
    );
  }
}

export default App;
