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


To install all dependencies make sure you have npm installed.

Use node version 16

```bash
# checkout correct nvm version
nvm use 16

# check to make sure node version 16 is being used
nvm --version

# install dependencies
npm install --legacy-peer-deps
```

## Usage

---

### Run application Locally:

```bash
# make sure application build properly
npm run build
# application will run on http://localhost:8000
npm run dev
```
**Broken Dependencies**
- react-fade-in // be sure to add `--legacy-peer-deps` to `npm install` on your initial install
- crypto-codec-addr // navigate to `node_modules/crypto-addr-codec/package.json` change `"module": "dist/index.module.js",` to `"module": "dist/index.js",`


## Testing

---

All tests are written using the Jest testing library. 

```bash
# run all tests
npm run test 
```