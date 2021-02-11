echo Using scenario: "${SCENARIO_URL}"
curl -fSL --compressed "${SCENARIO_URL}" -o ./src/scenario_for_docker.js

./node_modules/nightwatch/bin/nightwatch ./src/scenario_for_docker.js
