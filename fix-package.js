// fix-package.js
const fs = require('fs');
const path = require('path');

const packagePath = path.join(__dirname, 'node_modules', 'crypto-addr-codec', 'package.json');
const packageData = require(packagePath);

// Update the 'module' field
packageData.module = "dist/index.js";

// Write the updated package.json back
fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2));
