#!/usr/bin/env bash
set -ev

if [[ "$TRAVIS_BRANCH" == "master" && "$TRAVIS_PULL_REQUEST" == "false" ]]; then
  firebase deploy --token "2OQrrggesr1F0PFekdsHCiAtsybgnfFiCNKZQPt6"
fi
