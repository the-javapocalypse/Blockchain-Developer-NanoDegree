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
