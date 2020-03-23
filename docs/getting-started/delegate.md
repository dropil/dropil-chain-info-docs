# Delegating & Staking Drops

Read all about Delegators and related FAQ on the [Delegator Information](../delegators) article or read all about Validators and related FAQ on the [Validator Information](../validators) article.

This document contains all the necessary information for delegators to interact with Dropil Chain through the Command-Line Interface (CLI).


::: danger Very Important: 
Please assure that you follow the steps described hereinafter carefully, as negligence in this significant process could lead to an indefinite loss of your Drops. Therefore, read through the following instructions in their entirety prior to proceeding and reach out to us in case you need support.

Interaction with blockchain technology requires advanced technical skills and always entails risks that are outside our control. By using the software, you confirm that you understand the inherent risks associated with cryptographic software and the Dropil team may not be held liable for potential damages arising out of the use of the software. Any use of this open source software released under the Apache 2.0 license is done at your own risk and on a "AS IS" basis, without warranties or conditions of any kind. 

Please exercise extreme caution!
:::

## Installing `dropcli`

Refer to [this article] on how to install Dropil Chain to install the Dropil Chain CLI. If you are not intersted in setting up a full node, then you may skip the `go install ./dropd` step of the installation process.

## Wallet Prerequiste

Before getting started with delegating your Drops, you must have a wallet that contains Drops in it. Refer to [this article](create-wallet) for information on creating a wallet using the `dropcli`.

## Accessing the Dropil Chain Network

In order to query the state and send transactions, you need a way to access the network. To do so, you can either run your own full-node, or connect to someone else's.

::: danger NOTE: 
Do not share your mnemonic (12 or 24 words) with anyone. The only person who should ever need to know it is you. This is especially important if you are ever approached via email or direct message by someone requesting that you share your mnemonic for any kind of blockchain services or support. No one from the Dropil team will ever send an email that asks for you to share any kind of account credentials or your mnemonic.". 
:::

### Running Your Own Full-Node
This is the most secure option, but comes with relatively high resource requirements. In order to run your own full-node, you need good bandwidth and at least 500GB of disk space to be safe.

You will find the tutorial on how to install `dropd` [here](/info/getting-started/), and the guide to run a full-node [here](full-node).

### Connecting to a Remote Full-Node
If you do not want or cannot run your own node, you can connect to someone else's full-node. You should pick an operator you trust, because a malicious operator could return incorrect query results or censor your transactions. However, they will never be able to steal your funds, as your private keys are stored locally on your computer or ledger device. Possible options of full-node operators include validators, wallet providers or exchanges.

In order to connect to the full-node, you will need an address of the following form: https://77.87.106.33:26657 (Note: This is a placeholder). This address has to be communicated by the full-node operator you choose to trust. You will use this address in the following section.

## Setting Up `dropcli`

::: warning 
**Please check that you are always using the latest stable release of `dropcli`** 
:::

`dropcli` is the tool that enables you to interact with the node that runs on the Dropil Chain network, whether you run it yourself or not. Let us set it up properly.

In order to set up `dropcli`, use the following command:

```
dropcli config
```

The above will return a list of existing config key value pairs. If you have not added any key value pairs yet, it will say that the config file does not exist yet. **Once you add your first key value pair, it will automatically create the file and print out a warning stating that it has done so.**

`dropcli config` allows you to set a default value for each given flag.

First, set up the address of the full-node you want to connect to:

```
dropcli config node <ADDRESS>
```

If you run your own full-node, just use `tcp://localhost:26657` as the address.

Then, let us set the default value of the `--trust-node` flag:

```
dropcli config trust-node false 

// Set to true if you run a light-client node, false otherwise
```

Finally, let us set the `chain-id` of the blockchain we want to interact with:

```
dropcli config chain-id dropilchain
```

_testnet chain-id is `Dropil-Chain-Poseidon`_

## Querying the State

`dropcli` lets you query all relevant information from the blockchain, like account balances, amount of bonded tokens, outstanding rewards, governance proposals and more. Next is a list of the most useful commands for delegator.

```
//query account balances and other account-related information 
dropcli query account 

// query the list of validators 
dropcli query staking validators 

// query the information of a validator given their address (e.g. dropvaloper1n5pepvmgsfd3p2tqqgvt505jvymmstf6s9gw27) 
dropcli query staking validator 

// query all delegations made from a delegator given their address (e.g. drop10snjt8dmpr5my0h76xj48ty80uzwhraqalu4eg) 
dropcli query staking delegations 

// query a specific delegation made from a delegator (e.g. drop10snjt8dmpr5my0h76xj48ty80uzwhraqalu4eg) to a validator (e.g. dropvaloper1n5pepvmgsfd3p2tqqgvt505jvymmstf6s9gw27) given their addresses 
dropcli query staking delegation 

// query the rewards of a delegator given a delegator address (e.g. drop10snjt8dmpr5my0h76xj48ty80uzwhraqalu4eg) 
dropcli query distribution rewards 

// query all proposals currently open for depositing 
dropcli query gov proposals --status deposit_period 

// query all proposals currently open for voting 
dropcli query gov proposals --status voting_period 

// query a proposal given its proposalID 
dropcli query gov proposal
```

For more commands, just type:

```
dropcli query
```

For each command, you can use the `-h` or `--help` flag to get more information.

## Bonding Drops

::: warning
**Before bonding Drops, please read the delegator faq to understand the risk and responsibilities involved with delegating**
:::