# FlightSurety

FlightSurety is a sample application project for Udacity's Blockchain course.

## Test Logs

```
PS D:\Blockchain Nanodegree\Blockchain-Developer-NanoDegree\Project 4> truffle test
Using network 'development'.

Compiling .\contracts\FlightSuretyData.sol...


  Contract: Flight Surety Tests
    √ (multiparty) has correct initial isOperational() value (117ms)
    √ (multiparty) can block access to setOperatingStatus() for non-Contract Owner account
    √ (multiparty) can allow access to setOperatingStatus() for Contract Owner account (255ms)
    √ (multiparty) can block access to functions using requireIsOperational when operating status is false (559ms)
    √ (airline) cannot register an Airline using registerAirline() if it is not funded (253ms)

  Contract: Oracles
Oracle Registered: 4, 0, 2
Oracle Registered: 2, 9, 8
Oracle Registered: 8, 1, 0
Oracle Registered: 6, 0, 7
Oracle Registered: 2, 6, 5
Oracle Registered: 3, 6, 4
Oracle Registered: 0, 4, 1
Oracle Registered: 3, 0, 9
Oracle Registered: 5, 1, 2
    √ can register oracles (6196ms)
    √ can request flight status (9072ms)


  7 passing (18s)

```

## Install

This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle), dApp scaffolding (using HTML, CSS and JS) and server app scaffolding.

To install, download or clone the repo, then:

`npm install`
`truffle compile`

## Develop Client

To run truffle tests:

`truffle test ./test/flightSurety.js`
`truffle test ./test/oracles.js`

To use the dapp:

`truffle migrate`
`npm run dapp`

To view dapp:

`http://localhost:8000`

## Develop Server

`npm run server`
`truffle test ./test/oracles.js`

## Deploy

To build dapp for prod:
`npm run dapp:prod`

Deploy the contents of the ./dapp folder


## Resources

* [How does Ethereum work anyway?](https://medium.com/@preethikasireddy/how-does-ethereum-work-anyway-22d1df506369)
* [BIP39 Mnemonic Generator](https://iancoleman.io/bip39/)
* [Truffle Framework](http://truffleframework.com/)
* [Ganache Local Blockchain](http://truffleframework.com/ganache/)
* [Remix Solidity IDE](https://remix.ethereum.org/)
* [Solidity Language Reference](http://solidity.readthedocs.io/en/v0.4.24/)
* [Ethereum Blockchain Explorer](https://etherscan.io/)
* [Web3Js Reference](https://github.com/ethereum/wiki/wiki/JavaScript-API)
