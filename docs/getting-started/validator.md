# Become a Validator

Read all about Validators and many related FAQ on the [validator information](../validators) article.

## Prerequisites ##

* If you have not already installed the Dropil Chain CLI `dropcli` or the drop daemon `dropd`, please refer to [Installing Dropil Chain](/getting-started/) before continuing.

* To become a validator, you must have a Dropil wallet with at least 1 (one) drop. To create a wallet using `dropcli`, visit [Create a Wallet](create-wallet).
      
### Obtaining Testnet Drops ###
If you already have testnet Drops, you may skip this section. Inside the Dropil Chain testnet, you can obtain Drops by using your Dropil account credentials to login to the [Dropil Chain Testnet Portal](https://testnet.dropilchain.com) and either create a Dropil testnet wallet and distribute Drops to it or supply an existing Dropil testnet wallet and have Drops distributed to it. See below for how to create a wallet if you want the wallet created yourself. Once you request distribution from the testnet portal, you will receive 100,000 (one hundred thousand) testnet Drops.

## Gather Required Information ##

Gather each of the following pieces of information by executing the commands and store the result somewhere for reference.

#### Public IP Address ####
Obtain your public IPv4 address via whichever method you choose. You can obtain it by visiting [whatismyip](https://www.whatismyip.com/) and obtaining the IPv4 address listed.

#### Node ID ####
The following command will return your full node ID.

```
dropd tendermint show-node-id
```

#### Address ####
The following command will return your address.

```
dropd tendermint show-address
```

#### Validator Public Key ####
The following command will return your validator public key.

```
dropd tendermint show-validator
```

## Full Node Peer String ##
You full node peer string is formatted as follows:

```
<NODE-ID>@<IP-ADDRESS>:26656
```

Store this with the other information obtained above.

## Become a Validator ##
If you haven't already added your wallet to your stored keys, do so now before continuing. You can do so by running `dropcli keys add <KEYNAME> --recover` and following the prompts. You will need your 24 word mnemonic to recover your wallet.

**Before you become a validator, your full node must be fully caught up to the current state.**

Once you ensure your full node is caught up, run the following command:

```
dropcli tx staking create-validator --chain-id dropilchain --from <KEYNAME> --moniker <MONIKER> --pubkey <VALIDATOR_PUB_KEY> --amount <AMOUNT>udrop --fees <FEE>udrop --min-self-delegation <MIN_SELF_DELEGATION> --commission-rate <COMMISSION_RATE> --commission-max-change-rate <COMMISSION_MAX_CHANGE_RATE> --commission-max-rate <COMMISSION_MAX_RATE>
```

***Note: Testnet chain-id is `Dropil-Chain-Poseidon`***

### Parameters to Replace ###
Replace the parameters inside the <> blocks (including the braces) with the following required information:

* **KEYNAME**: The name of the wallet that you are using to become a validator.
* **MONIKER**: The moniker is the identifier you chose when setting up your full node.
* **VALIDATOR_PUB_KEY**: This is the result of the command `dropd tendermint show-validator` that you ran in the previous step. The address will be in the `dropvalconspub` format.
* **AMOUNT**: Amount of Drops to self delegate for staking represented in udrop (1 Drop = 1,000,000 udrop)
* **FEE**: The fee paid for the current transaction.
  * Recommended: `20000`udrop (0.02 Drops)
* **MIN_SELF_DELEGATION**: A stritly positive integer that represents the minimum amount of self-delegated voting power your validator must always have. A min-self-delegation of 1 means your validator will never have a self-delegation lower than 1 Drop, or 1000000udrop.

The following parameters cannot be changed after creating a validator. Commission rates are one of the top factors that delegators consider before choosing a validator to delegate their Drops to.

**Commission parameters must be in decimal percent (X.XX) format: 0.05 = 5%, 0.25 = 25%, etc.**

* **COMMISSION_RATE**: The commission rate percent you will charge delegators from their portion of staking rewards.
* **COMMISSION_MAX_CHANGE_RATE**: The maximum percent that your validator can change it's current commission rate in a single day.
* **COMMISSION_MAX_RATE**: The maximum commission percent your validator can set.

Additional parameters for this transaction are available using the command:

```
dropcli tx staking create-validator -h
```

Here is an example of a filled out `create-validator` transaction with placeholder information:

```
dropcli tx staking create-validator --chain-id dropilchain --from Example-Keyname --moniker Example-Moniker --pubkey dropvalconspub1zcjduepqc30usk2rqjclw57dkufah842vf0623ar85j5ktt9p9gk7q3gqknqqmlt6g --amount 1000000000000udrop --fees 20000udrop --min-self-delegation 1 --commission-rate 0.05 --commission-max-change-rate 0.01 --commission-max-rate 0.50
```

***Note: Testnet chain-id is `Dropil-Chain-Poseidon`***

The above will create a validator using the `Example-Keyname` key and the `Example-Moniker` moniker with 1,000,000 self delegated Drops, a minimum self delegation of 1 Drop, a commission rate of 5%, a maximum daily commission rate change of 1%, and a maximum commission of 50%. The fee paid for the transaction will be 0.02 DROP.

## Congratulations! ##
You have now applied to be a validator. For more information on how validators are chosen, visit the [validators article](/info/validators).

You can check the current validators by visiting a public Dropil Chain explorer ([list found here](/introduction.html#dropil-chain-explorers)) or running the following command:

```
dropcli query staking validators
```