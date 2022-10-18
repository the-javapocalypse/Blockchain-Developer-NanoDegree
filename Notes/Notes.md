## Hashing
A cryptographic hash function (CHF) is a mathematical algorithm that maps data of an arbitrary size (often called the "message") to a bit array of a fixed size (the "hash value", "hash", or "message digest"). It is a one-way function, that is, a function for which it is practically infeasible to invert or reverse the computation.
It's a way to create a digital fingerprint for a piece of data. It's a fundamental idea behind what makes the blockchain work.
BitCoin uses the SHA-256 hash algorithm to generate verifiably "random" numbers in a way that requires a predictable amount of CPU effort. Generating a SHA-256 hash with a value less than the current target (preceding 0) solves a block and wins you some coins.


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
