# Star Notary - Udacity Blockchain Project
DApps for claiming, buy, transfer, exchange star with blockchain Ethereum.

## Specification
### Versions
- Truffle: v5.7.3
- OpenZeppelin: ^2.2.0

## Token
- Name: BBToken
- Symbol: BBA

`.secret` file will contain mnemonic (metamask seed).

## Develop
Run test on the contract

```
$ truffle develop
$ compile
$ migrate --reset
$ test
```

## Run in Rinkeby network
Deploy contract to rinkeby test network
```
$ truffle migrate --reset --network rinkeby
```
