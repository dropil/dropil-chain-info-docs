# Dropil Chain Proof-of-Stake

Dropil Chain is powered by Proof-of-Stake (PoS). This section, along with the other information articles, will explain how Dropil Chain uses staking, validators, and delegators to run the Dropil Chain network.

## What is PoS / 'staking'?

Dropil Chain is a public Proof-of-Stake (PoS) blockchain, meaning that the weight of validators is determined by the amount of staked tokens (Drops) bonded as collateral. These Drops can be self-delegated directly by the validator or delegated to them by other Drop holders.

Any user in the system can declare their intention to become a validator by sending a create-validator transaction. From there, they become validator candidates.

The weight (i.e. voting power) of a validator determines whether or not they are an active validator. Initially, only the top 100 validators with the most voting power will be active validators.

More information on validators can be found in the [validator article](validators).

## What is inflation?

With Proof-of-Stake, inflation is paid to users with staked Drops as an incentive in the form of block rewards. Every block mints a small amount of Drops and they are distributed proportionally to all staked users based on their stake compared to the total staked amount.

The yearly inflation rate is calculated to target 2/3 (~67%) bonded stake. If the total bonded stake in the network is less than 2/3 of the total Drop supply, inflation increases until it reaches 20%. If the total bonded stake is more than 2/3 of the Drop supply, inflation decreases until it reaches 10%. The 10-20% range of inflation is subject to change if voters decide through governance.

It's important to understand that the total inflation per year is based on the total supply and NOT the total staked amount. Additionally, inflation is compounded per block. As a rough example, if the total supply is 1,000,000 and the current inflation rate is 10%, then roughly 100,000 coins will be minted and distributed to the staked users. If the total staked amount is 500,000, then these users will essentially be receiving a 20% increase in their holdings: 100,000 minted / 500,000 staked = 20% reward.

We have created a calculator that can estimate the total inflation and the amount you will receive based on various factors such as total supply, inflation percent, your stake, and total stake. The calculator only estimates and is not a guarantee as many variables can affect the outcome. Click the link below to view the calculator.

[Dropil Chain Staking Calculator](https://dropilchain.com/calc)

## What is the incentive to stake?

Each member of a validator's staking pool earns different types of revenue:

* **Block rewards:** Native tokens of applications run by validators (e.g. Drops on Dropil Chain) are inflated to produce block provisions. These provisions exist to incentivize Drop holders to bond their stake, as non-bonded Drop will be diluted over time.
* **Transaction fees:** Dropil Chain maintains a whitelist of tokens that are accepted as fee payment. The initial fee token is the `drop`.

This total revenue is divided among validators' staking pools according to each validator's weight. Then, within each validator's staking pool the revenue is divided among delegators in proportion to each delegator's stake. A commission on delegators' revenue is applied by the validator before it is distributed.