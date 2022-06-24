#!/usr/bin/env bash

set -e

node /app/index.js || exit 1
tail -f /dev/null

exit 0
