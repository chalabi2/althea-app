# Althea Web App

## Overview

---

This is a fork of [canto.io](https://www.canto.io/)
reconfigured to work with [AltheaL1](https://github.com/althea-net/althea-L1)

---

## To-do

### Staking
- multi stake tx failing
- sanity check, missed blocks, slashings, voting power (true Rank), and scoring system
- multi stake modal load time

### General
- done

### Bridge
- done

### Governance
- done

### lending
- done

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