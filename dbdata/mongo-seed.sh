#! /bin/bash

mongoimport --host=127.0.0.1 --port 27017 -u "testuser" -p "testpass" --authenticationDatabase admin --db test --collection post --drop --file ./data/db/test.json --jsonArray
