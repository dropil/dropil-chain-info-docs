# Setup a Full Node

## Prerequisites ##

* If you have not already installed the drop daemon `dropd`, please refer to [Installing Dropil Chain](/getting-started/) before continuing.

## Setup ##
In order to setup a fresh full node, make sure you don't already have a folder on your system at path `C:\.dropd`.

First, initialize the drop daemon by executing the following command:

```
dropd init <MONIKER> --chain-id dropilchain
```

Replace `<MONIKER>` with an identifier of your choosing (i.e `my-dropil-chain-node`).

***Testnet chain-id is `Dropil-Chain-Poseidon`***

This will create the previously mentioned .dropd folder in your C:\ drive or root directory of your computer/server.

## Genesis File ##
Download the Dropil Chain genesis file from our Github [here](https://github.com/dropil/dropilchain/blob/master/genesis.json) (testnet genesis file can be found [here](https://github.com/dropil/dropilchain-testnet/blob/master/genesis.json)) and replace the automatically generated genesis file in the path `C:\.dropd\config\genesis.json` using the downloaded file.

## Start `dropd` ##
Start the drop daemon with the following command:

```
dropd start --minimum-gas-prices 0.05udrop --moniker <MONIKER> --p2p.seeds <SEEDS>
```

Replace `<MONIKER>` with the identifier you previously chose. Replace `<SEEDS>` with a comma separated list of validator seeds you would like your node to communicate with. You can find a list of seeds that are trusted by Dropil below or you can use seeds found elsewhere.

### Trusted Mainnet Validator Seeds ###
We will add trusted seeds when mainnet is launched.

### Trusted Testnet Validator Seeds ###
This is a list of testnet seeds you can connect to that are considered trusted by most people including Dropil.

* dropil-testnet-validator-1: `33f8774261cd036a9b7c78967d2f4d9f95270c1e@147.135.37.119:26656`
* dropil-testnet-validator-2: `5c45c0edfe4192a8df641c6c2277c812879aa04a@147.135.37.118:26656`
* dropil-testnet-validator-3: `e3bd09dc9ec29b9d4e7d11416463a0fb6a2344f9@147.135.37.208:26656`
* dropil-testnet-validator-4: `32dca2e5f5acc2b4ca0f09cb3a4b70fcc93bb2aa@147.135.37.233:26656`

Example `--p2p.seeds` string:

```
33f8774261cd036a9b7c78967d2f4d9f95270c1e@147.135.37.119:26656,5c45c0edfe4192a8df641c6c2277c812879aa04a@147.135.37.118:26656,e3bd09dc9ec29b9d4e7d11416463a0fb6a2344f9@147.135.37.208:26656,32dca2e5f5acc2b4ca0f09cb3a4b70fcc93bb2aa@147.135.37.233:26656
```

## Node Syncing ##
Once you have executed the command, your node will begin syncing all blocks until it has caught up to the current state. The speed at which your node catches up varies greatly depending on your network speed. You will know it's completed syncing once each block is taking roughly 5 seconds.

## Congratulations! ##
You have now setup a full node on Dropil Chain! You now have full access to the network and drop daemon `dropd`.