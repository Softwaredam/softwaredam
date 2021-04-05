const { gitDescribeSync } = require('git-describe');
const { writeFileSync } = require('fs');
const path = require('path');

const info = gitDescribeSync();
info["dateTime"] = new Date(Date.now()).toISOString();
const infoJson = JSON.stringify(info, null, 2);

writeFileSync(path.join(__dirname, '/src/environments/git-version.json'), infoJson);
