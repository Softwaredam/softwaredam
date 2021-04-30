#!/bin/bash

# Thanks to https://itnext.io/how-to-add-git-hash-into-your-angular-application-bec20b702bb1
node grab-git-info.js

ng build --prod --base-href "https://softwaredam.com"