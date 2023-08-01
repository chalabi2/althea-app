# Althea Web App

## Overview

---

This is a fork of [canto.io](https://www.canto.io/)
reconfigured to work with [AltheaL1](https://github.com/althea-net/althea-L1)

---

## To-do

### Staking
- Staking apr
- Move from jailed validators tx type
- One button delegation
- claim rewards modal

### General
- Proper fonts (except titles)

### Bridge
- IBC transfer modal
- remove options other then grav for eth bridging 

### Governance
- check out vote modal when prop

### lending
- Remove lending

---

## Installation


To install all dependencies make sure you have yarn installed.

Use node version 16

```bash
# checkout correct nvm version
nvm use 16

# check to make sure node version 16 is being used
nvm --version

# install dependencies
yarn
```

## Usage

---

### Run application Locally:

```bash
# make sure application build properly
yarn build
# application will run on http://localhost:8000
yarn dev
```

## Testing

---

All tests are written using the Jest testing library. 

```bash
# run all tests
yarn test 
```