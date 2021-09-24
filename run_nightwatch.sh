#!/usr/bin/env bash
echo  
echo  =====
echo Using scenario : "${SCENARIO_URL}"

#curl -fSL --compressed "${SCENARIO_URL}" -o ./src/temp.js
# ping -c 2 google.com

#node ./node_modules/nightwatch/bin/runner.js ./src/commerce_journeys/electronics.coveodemo.com.js  --headless --disable-gpu 
./node_modules/nightwatch/bin/nightwatch ./src/commerce_journeys/electronics.coveodemo.com.js 
