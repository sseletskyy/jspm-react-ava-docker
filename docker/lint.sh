#!/bin/bash
cd `dirname $0`/..
docker-compose run jspm-npm npm run lint
