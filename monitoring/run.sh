#!/bin/bash

success_count=0
error_count=0
iterations=10

for ((i=0; i<$iterations; i++))
do
  DEBUG_MODE=true yarn start --env prod --jurisdiction tcfv2
  if [ $? -eq 0 ]
  then
    ((success_count++))
  else
    ((error_count++))
  fi
done

echo "Success count: $success_count"
echo "Error count: $error_count"
