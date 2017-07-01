#!/bin/bash
cd `dirname $0`/..
docker-compose run jspm-node npm test
docker-compose stop
