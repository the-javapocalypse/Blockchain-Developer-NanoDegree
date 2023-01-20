# Supply chain & data auditing

Deployment
---
### Etherscan
FarmerRole: https://goerli.etherscan.io/address/0x4814147B345D136358C0bAe1DA6c404201801E61
DistributorRole: https://goerli.etherscan.io/address/0x82324488A4Cd02e50b24711c3A2cDc42D91B2D9E
RetailerRole: https://goerli.etherscan.io/address/0x8Fa9F48249CB6c35Da8c95c13a2391fCb3fC93C6
ConsumerRole: https://goerli.etherscan.io/address/0x66cf7aa69C3d42282376F058FEc5D5C08529795F
SupplyChain: https://goerli.etherscan.io/address/0xe965641045361d9d51aaad1567fbbdf0c672743ed808e1691e2d468b6217ec54

### Logs
```
PS D:\Blockchain Nanodegree\Blockchain-Developer-NanoDegree\Project 6> truffle migrate --reset --network goerli

Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\coffeeaccesscontrol\ConsumerRole.sol
> Compiling .\contracts\coffeeaccesscontrol\DistributorRole.sol
> Compiling .\contracts\coffeeaccesscontrol\FarmerRole.sol
> Compiling .\contracts\coffeeaccesscontrol\RetailerRole.sol
> Compiling .\contracts\coffeeaccesscontrol\Roles.sol
> Compiling .\contracts\coffeebase\SupplyChain.sol
> Compiling .\contracts\coffeecore\Ownable.sol
> Artifacts written to D:\Blockchain Nanodegree\Blockchain-Developer-NanoDegree\Project 6\build\contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang


Starting migrations...
======================
> Network name:    'goerli'
> Network id:      5
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x42fc6f54efb9aa8e6a4d3e7f86bfdc59f654850b81adc63c86e14d71a68ac5cb
   > Blocks: 3            Seconds: 29
   > contract address:    0xe1D8DaCD4494Db0eb1D11E683415BFaCD14d9E49
   > block number:        8345623
   > block timestamp:     1674236796
   > account:             0x8d4bA0e8e9360b98eE6E4BC1D56c12570dD3D5E6
   > balance:             0.087262637533908806
   > gas used:            226537 (0x374e9)
   > gas price:           0.344682871 gwei
   > value sent:          0 ETH
   > total cost:          0.000078083423547727 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000078083423547727 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0xcf0ac5e1f1aa6514257a87c9b9e165e373c206ef9994ca573ffb4f7bcf132970
   > Blocks: 1            Seconds: 9
   > contract address:    0x4814147B345D136358C0bAe1DA6c404201801E61
   > block number:        8345625
   > block timestamp:     1674236820
   > account:             0x8d4bA0e8e9360b98eE6E4BC1D56c12570dD3D5E6
   > balance:             0.087123754468834469
   > gas used:            312078 (0x4c30e)
   > gas price:           0.390401536 gwei
   > value sent:          0 ETH
   > total cost:          0.000121835730551808 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0xf0992003bf86d088bd62dc9186c35e2f888b1a7fa2fa221355c068afc0af0438
   > Blocks: 6            Seconds: 89
   > contract address:    0x82324488A4Cd02e50b24711c3A2cDc42D91B2D9E
   > block number:        8345631
   > block timestamp:     1674236916
   > account:             0x8d4bA0e8e9360b98eE6E4BC1D56c12570dD3D5E6
   > balance:             0.087009442815333347
   > gas used:            312066 (0x4c302)
   > gas price:           0.366306017 gwei
   > value sent:          0 ETH
   > total cost:          0.000114311653501122 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0xff698ce4655c33373f840a4d019943f2b2a74fb8cc55a3a9f24dae41a8095eec
   > Blocks: 2            Seconds: 17
   > contract address:    0x8Fa9F48249CB6c35Da8c95c13a2391fCb3fC93C6
   > block number:        8345633
   > block timestamp:     1674236940
   > account:             0x8d4bA0e8e9360b98eE6E4BC1D56c12570dD3D5E6
   > balance:             0.086872187950249361
   > gas used:            312078 (0x4c30e)
   > gas price:           0.439809487 gwei
   > value sent:          0 ETH
   > total cost:          0.000137254865083986 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x2101b99f43340b37a2b6ea3f00abafd885013a7cbef8fe8fc101a800c15419ac
   > Blocks: 2            Seconds: 17
   > contract address:    0x66cf7aa69C3d42282376F058FEc5D5C08529795F
   > block number:        8345635
   > block timestamp:     1674236964
   > account:             0x8d4bA0e8e9360b98eE6E4BC1D56c12570dD3D5E6
   > balance:             0.086739085112872865
   > gas used:            312078 (0x4c30e)
   > gas price:           0.426505032 gwei
   > value sent:          0 ETH
   > total cost:          0.000133102837376496 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xe965641045361d9d51aaad1567fbbdf0c672743ed808e1691e2d468b6217ec54
   > Blocks: 1            Seconds: 29
   > contract address:    0x13502D3DcB140434A8904C862a745FE165361b5d
   > block number:        8345637
   > block timestamp:     1674237000
   > account:             0x8d4bA0e8e9360b98eE6E4BC1D56c12570dD3D5E6
   > balance:             0.085533352856280602
   > gas used:            3072633 (0x2ee279)
   > gas price:           0.392410111 gwei
   > value sent:          0 ETH
   > total cost:          0.001205732256592263 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.001712237343105675 ETH

Summary
=======
> Total deployments:   6
> Final cost:          0.001790320766653402 ETH

```

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

> The starter code is written for **Solidity v0.4.24**. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function *mutability* and *visibility* to be specified (please refer to Solidity [documentation](https://docs.soliditylang.org/en/v0.5.0/050-breaking-changes.html) for more details). To use this starter code, please run `npm i -g truffle@4.1.14` to install Truffle v4 with Solidity v0.4.24.

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
  to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
