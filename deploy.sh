#!/bin/bash
# Run on local machine

set -e

sshuser=$1
reponame="https://github.com/thiscoldhouse/catastrophicthinking.git"

prodpath="/var/www/catastrophicthinking.com"

localdeploy=thiscoldhousedeploy
server="172.104.24.137"

cd /tmp
git clone $reponame $localdeploy

echo "Beaming code to the servers"

echo "First, removing old code"
ssh -t aleruiz@$server "rm -rf /var/www/catastrophicthinking.com/* "
echo "Sending new code"
scp -r /tmp/$localdeploy/* aleruiz@$server:/var/www/catastrophicthinking.com
echo "Cleaning up"
rm -rf $localdeploy
cd -
echo "Done"
