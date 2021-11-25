#!/bin/bash
. $HOME/.bash_profile

#
# This is the script that is run periodically on the EC2 machine: coveodemo\jdevost 
# EC2 details = https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#InstanceDetails:instanceId=i-04edfe4e6cd79fc79
#
# It updates itself, then run the journeys.
#
# It is scheduled by a cron job (about every 15 minutes). See /etc/crontab
#

# nvm use 16

cd /home/ec2-user/traffic-generator

git pull
npm i

# Load a list of user agents
IFS=$'\n' array=($(cat user_agents.txt))
number_of_useragents=${#array[@]}

function run_nightwatch {
  echo $1
  useragent=${array[$(($RANDOM % $number_of_useragents))]}
  useragentmd5=$(echo -n $useragent | openssl md5 | sed 's/(stdin)= //')

  # replace --window-size by --user-agent 
  sed -e "s|--window-size=1565,1237|--user-agent=${useragent}|gi" nightwatch.json > nightwatch.$useragentmd5.json

  ./node_modules/nightwatch/bin/nightwatch $1 --config nightwatch.$useragentmd5.json --headless --disable-gpu >> _last_run_ec2user_visits.log 2>&1
  rm nightwatch.$useragentmd5.json
}  

echo Start > _last_run_ec2user_visits.log 2>&1

run_nightwatch ./src/Examples/RandomVisit.fashion.js
run_nightwatch ./src/Examples/RandomVisit.fashion.js
run_nightwatch ./src/Examples/RandomVisit.electronics.js
run_nightwatch ./src/Examples/RandomVisit.electronics.js
