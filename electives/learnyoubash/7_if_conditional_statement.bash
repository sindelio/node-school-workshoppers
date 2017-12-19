#!/bin/bash

if [ $1 -lt 0 ]; then
	echo "Error!"
elif [ $1 -ge 24 ]; then
	echo "Error!"
elif [ $1 -ge 0 ] && [ $1 -lt 12 ]; then
	echo "Good morning!"
elif [ $1 -ge 12 ] && [ $1 -lt 18 ]; then
	echo "Good afternoon!"
elif [ $1 -ge 18 ] && [ $1 -lt 24 ]; then
	echo "Good evening!"
fi