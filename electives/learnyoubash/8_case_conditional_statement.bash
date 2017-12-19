#!/bin/bash

case "$1" in
	(jpg|jpeg)
		echo "$1 is jpeg."
	;;
	(png)
		echo "$1 is png."
	;;
	(gif)
		echo "$1 is gif."
	;;
	(*)
		echo "$1 is not an image!"
	;;
esac