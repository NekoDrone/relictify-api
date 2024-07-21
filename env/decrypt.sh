#!/usr/bin/env bash

DECRYPTION_KEY=""
ENV=""

usage() {
  echo "Please provide the decryption key."
  echo "Usage: $0 -k <decryption_key> -e <DEV or PROD>"
  exit 1
}

decryptDev() {
  echo "DEV flag provided. Attempting to decrypt .env.dev.enc"
  openssl enc -aes-256-cbc -d -in "./.env.dev.enc" -out ".env.development" -k "$DECRYPTION_KEY"
  echo "Done! Please check to see if the file is decrypted correctly."
  echo "Moving decrypted file to project root."
  mv ".env.development" "../"
}

decryptProd() {
  echo "PROD flag provided. Attempting to decrypt .env.prod.enc"
  openssl enc -aes-256-cbc -d -in "./.env.prod.enc" -out ".env.production" -k "$DECRYPTION_KEY"
  echo "Done! Please check to see if the file is decrypted correctly."
  echo "Moving decrypted file to project root."
  mv ".env.production" "../"
}

while getopts ":k:e:" opt; do
  case ${opt} in
    k) 
      DECRYPTION_KEY=$OPTARG
      ;;
    e)
      ENV=$OPTARG
      ;;
    :)
      echo "Option -${OPTARG} requires an argument."
      exit 1
      ;;
    ?)
      echo "Option -${OPTARG} not recognised."
      exit 1
      ;;
  esac
done

if [ -z "$DECRYPTION_KEY" ] || [ -z "$ENV" ]; then
  usage
fi

if [ "$ENV" == "DEV" ]; then
  decryptDev
else
  decryptProd
fi