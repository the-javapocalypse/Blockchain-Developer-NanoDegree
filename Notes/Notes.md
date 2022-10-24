## Hashing
A cryptographic hash function (CHF) is a mathematical algorithm that maps data of an arbitrary size (often called the "message") to a bit array of a fixed size (the "hash value", "hash", or "message digest"). It is a one-way function, that is, a function for which it is practically infeasible to invert or reverse the computation.
It's a way to create a digital fingerprint for a piece of data. It's a fundamental idea behind what makes the blockchain work.
BitCoin uses the SHA-256 hash algorithm to generate verifiably "random" numbers in a way that requires a predictable amount of CPU effort. Generating a SHA-256 hash with a value less than the current target (preceding 0) solves a block and wins you some coins.

## Nonce
In cryptocurrency, a nonce is an abbreviation for "number only used once," which is a number added to a hashed—or encrypted—block in a blockchain that, when rehashed, meets the difficulty level restrictions. The nonce is the number that blockchain miners are solving to receive the block reward. Eg. Nonce + Block Hash = 00000xxx...

## Blocks
Blocks are data structures within the blockchain database, where transaction data in a cryptocurrency blockchain are permanently recorded


## Types of Network
* **Centralized Network**: A network configuration where participants must communicate with a central authority to communicate with one another.
* **Distributed Network**: A network that allows information to spread out across many users.
* **Peer-to-Peer Network**: A network that allows information to be shared across all users.


## Memory Pool
A mempool or a memory pool is a mechanism for storing information on unconfirmed transactions. These transactions have been verified but have not yet been included in the blockchain.
Transactions are not added to a blockchain as soon as you make a payment. They are first sent to peer nodes for verification. Each node verifies the cryptographic signatures, checks if the funds are available, etc. Once the checks are done, the transaction is again broadcasted to nearby nodes. The goal is to send the transaction data to as many nodes as possible. This can help the nodes reach a consensus regarding the validity of a transaction.
If the transaction is invalid, then a node would simply drop it. This can happen if the sender has an insufficient balance in their wallet or the recipient’s public key is invalid. On the other hand, if a node is able to deem that a transaction as valid, it will be moved to the mempool, where a mining node can pick it up and package it into a block.

**Why Transactions Leave the Mempool?**
* The transaction expired by timeout (by default 14 days after entering).
* The transaction was at the bottom of the mempool (when sorted by fee per size), the mempool had reached its size limit, and a new higher-fee transaction was accepted, evicting the transaction at the bottom.
* The transaction was included in a block.
* The transaction or one of its unconfirmed ancestors conflicts with a transaction that was included in a block.

## Consensus: Proof Of Work
Proof-of-Work operates through guesswork. Miners gather a pile of transactions into a block. In order to add this block to the blockchain, they need to expend computational effort by searching for a valid nonce. Once such a hash is found, the solution is presented to the network and if valid indeed, the block of transaction is added to the blockchain and the guessing work begins anew.

## Consensus: Proof Of Stake
With proof of stake, a validator is chosen randomly, based in part on how many coins they have locked up in the blockchain network, also known as staking. The coins act as collateral and when a participant, or node, is chosen to validate a transaction, they receive a reward.
In the case that a validator accepts a bad block, a portion of their staked funds will be “slashed” as a penalty.

## Consensus: Delegated Byzantine Fault Tolerance (DBFT)
dBFT essentially works in a similar fashion to a country’s governance system, having its own citizens, delegates, and speakers to ensure that the country (network) is functional. The method is closer to PoS rather than PoW, by utilizing a voting system to choose delegates and speaker.

**Citizens** = NEO tokens holder (ordinary nodes)

**Delegates** = Bookkeeping Nodes (with specific requirements to be elected as one)

The requirements to be chosen as delegates:
* Solid internet connection
* 1000 GAS
* Specific equipment
* Speaker = One of the randomly chosen delegate

Citizens vote for delegates; each citizen has the ability to give their vote regardless of the amount of token that they hold. One of these delegates is then chosen at random to be the speaker. The job of these delegates is to listen to the citizens’ demands which are the various transactions being made on the network. The delegates will then keep track of all the transactions within the network and document them on a ledger.

When it comes down to verifying a block, the speaker that was randomly selected needs to propose his/her block. The speaker will then send his/her block to all the other delegates in order for the delegates to match their own blocks with the speaker block to ensure its validity. At least 2/3 of the delegates need to agree on the block that was proposed by the speaker before it is accepted and added to the network. In the instance that less than 2/3 of the delegates agree, a new speaker will be randomly chosen again and the whole procedure restarts.


## 51% Attack
In blockchain parlance, a 51% attack is a worst-case scenario, referring to a situation where malicious actors take over a blockchain network. However, pulling off a 51% attack is difficult (and expensive).

**In POW**
Generally, the smaller and more centralized a blockchain network is, the more likely it is to fall victim to an attack. In fact, due to the size of the Bitcoin network and the extent to which hash power is decentralized, along with the cost of mining equipment, it’s prohibitively expensive to attack Bitcoin. We estimate it would cost over $13 billion:

**In POS**
n light of the increasing prevalence of Proof-of-Stake (PoS) consensus, is a 51% attack any easier or more difficult? In a way, it’s both. In PoS consensus, network validators compete to validate blocks by expending energy and holding the biggest stake. Therefore, theoretically, all someone needs to do to launch a 51% attack in a PoS network is to accrue over 51% of the network’s total circulating tokens. 

However, even if someone were able to accrue 51% of the tokens, as a result of doing so, they’d have little incentive to attack the network. The majority token holder would be the worst hit by any drop in the token’s value resulting from the attack. Therefore, smaller PoW networks tend to be the prime targets for 51% attacks. 


## Identity
**Private Key** ----{Elliptical Curve Multiplication {one way hashing)}----> **Public Key** ----{RIPEMD (SHA256)}----> **Public Key Hash** ----{Base58Check}----> **Wallet Address**

## Private Key
A secret number that allows you to spend bitcoin from your wallet.
Same private key can be represented in 3 formats
* HEX
* WIF or Wallet Import Format (Base58Check)
* WIF-Compressed (Base58Check added suffex 0x01 before encoding)

## Public Key
Publicly shareable key that cannot be used to spend bitcoin.

## Wallet
### Wallet Address
A unique identifier for your wallet.

### Wallet Types
There are three types of wallets
![Wallet Types](https://github.com/the-javapocalypse/Blockchain-Developer-NanoDegree/blob/main/Notes/wallet%20types.png?raw=true)

#### 1. Non-deterministic Wallet
(random wallets) A wallet where private keys are generated from random numbers.
Random Number -> Private Key -> Public Key -> Wallet Address.
Best practice to generate new wallet address for each transaction.
Generally used where wallet addresses are generated from backend services and private keys are not derived from seeds.
The Private Key is used to restore and gives full control to wallet address

#### 2. Deterministic  Wallet
A wallet where addresses, private keys, and public keys can be traced back to their original seed words.
Can generate multiple private keys using the same seed
Seed gives all the control so must be stored securely
![Sequential Deterministic Wallet](https://github.com/the-javapocalypse/Blockchain-Developer-NanoDegree/blob/main/Notes/sequential%20wallets.png?raw=true)


#### 3. Hierarchical Deterministic Wallet (HD Wallets)
An advanced type of deterministic wallet that contains keys derived in a tree structure.
A parent key can derive children keys which can further derive grand children keys and so on
Can be shared partially or entirely (breaking a branch and sharing public and/or private key. We can also share upto certail levels (as it is a tree)
Useful to separate spending eg, different departmental spending
Subkey can generate more child keys
All the keys tie back to one master key

![HD Wallets](https://github.com/the-javapocalypse/Blockchain-Developer-NanoDegree/blob/main/Notes/hd%20wallets.png?raw=true)


## Ways to Restore a Wallet
### 1. Use a Seed
One way to restore a wallet is using a seed. The ‘seed’ is the 12 words you were given when creating your wallet. If you can remember these words, you can use them to restore your wallet!

### 2. Use a Private Key
When restoring a wallet using a private key, there are 2 ways to do it. You can either import or sweep this key, and it’s useful to understand the difference.
#### Import a Private Key
When importing a private key, you'll have a source wallet and a destination wallet. The destination wallet is likely filled with a group of private keys already. To import the key you move the private key from the source wallet to the destination wallet. This results in you getting access to both the source wallet AND the destination wallet.

#### Sweep a Private Key
When you sweep a private key, you add a private key from a source wallet into the destination wallet. All the bitcoins that belong to that private key are swept from the source wallet over into the destination wallet. This is a little different than importing because it completely removes the funds from the original wallet. You’ll now only be using this new wallet to make future transactions.


## Sign a Transaction
Tx Input (amount transferred to my wallet) -> Convert to Tx Output (to spend) by proving ownership of wallet address through digitally signing the transaction using the private key

## TX multiple inputs and outputs
UTXO cant be splitted so must create a change back tx to get the change amount back
![Multi IO TX](https://github.com/the-javapocalypse/Blockchain-Developer-NanoDegree/blob/main/Notes/tx%20io.png?raw=true)


## Bitcoin
Network of bitcoin users creating and validating transactions

## Bitcoin Core
Implementation of bitcoin that encompasses all of the software behind bitcoin
![Bitcoin Core Networks](https://github.com/the-javapocalypse/Blockchain-Developer-NanoDegree/blob/main/Notes/bitcoin%20core%20networks.png?raw=true)

## Debug Console
Tool that allows you to interact with data on the bitcoin blockchain

## Bitcoin Full Node Wallet
A bitcoin wallet that fully validates transactions and blocks

## Transaction Data
![Transaction Data](https://github.com/the-javapocalypse/Blockchain-Developer-NanoDegree/blob/main/Notes/Tx%20data.png?raw=true)

## Raw Transaction
#### Version
All transactions include information about the Bitcoin Version number so we know which rules this transaction follows.

#### Input Count
Which is how many inputs were used for this transaction

### Data stored in Input information:

#### Previous output hash
All inputs reference back to an output (UTXO). This points back to the transaction containing the UTXO that will be spent in this input. The hash value of this UTXO is saved in a reverse order here.
#### Previous output index
The transaction may have more than one UTXO which are referenced by their index number. The first index is 0.
#### Unlocking Script Size
This is the size of the Unlocking Script in bytes.
#### Unlocking Script
This is the hash of the Unlocking Script that fulfills the conditions of the UTXO Locking Script.
#### Sequence Number
This is a deprecated feature of bitcoin, currently set to ffffffff by default.
#### Output Count
It tells us how many outputs were produced from this transaction.

### Data stored in Output Information:

#### Amount
The amount of Bitcoin outputted in Satoshis (the smallest bitcoin unit). 10^8 Satoshis = 1 Bitcoin.
#### Locking Script Size
This is the size of the Locking Script in bytes.
#### Locking Script
This is the hash of the Locking Script that specifies the conditions that must be met to spend this output.
#### Locktime
The locktime field indicates the earliest time or the earliest block a transaction can be added to the blockchain. If the locktime is non-zero and less than 500 million, it is interpreted as a block height and miners have to wait until that block height is reached before attempting to add it to a block. If the locktime is above 500 million, it is read as a UNIX timestamp which means the number of seconds since the date January 1st 1970. It is usually 0 which means confirm as soon as possible.

![Raw Transaction](https://github.com/the-javapocalypse/Blockchain-Developer-NanoDegree/blob/main/Notes/raw%20tx.png?raw=true)
