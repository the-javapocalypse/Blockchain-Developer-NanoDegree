# Star Notary - Udacity Blockchain Project
DApps for claiming, buy, transfer, exchange star with blockchain Ethereum.

# Contract Address
0x7a5d75b23EFcf474F67dC3cC1979FB2A030892d9

## Specification
### Versions
- Truffle: v5.7.3
- OpenZeppelin: 2.3.0

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
