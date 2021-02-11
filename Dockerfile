FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x ./run_nightwatch.sh

# CMD [ "sh run_nightwatch.sh" ]
CMD [ "./node_modules/nightwatch/bin/nightwatch ./src/scenario_for_docker.js" ]
