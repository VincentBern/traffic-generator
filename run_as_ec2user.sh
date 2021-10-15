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

./node_modules/nightwatch/bin/nightwatch ./src/commerce_journeys/electronics.coveodemo.com.js --headless --disable-gpu > _last_run_ec2user.log 2>&1
./node_modules/nightwatch/bin/nightwatch ./src/commerce_journeys/fashion.coveodemo.com.js --headless --disable-gpu >> _last_run_ec2user.log 2>&1
./node_modules/nightwatch/bin/nightwatch ./src/Examples/electronics.coveodemo.com.js --headless --disable-gpu >> _last_run_ec2user.log 2>&1
