#!/bin/sh

set -eu

if ! [ -d gh-pages ]; then
	echo 'gh-pages: no such directory' >&2
	exit 1
fi

ec=0

traverse() {
	for name in "$1"/*; do
		case $name in .*)
			continue
		esac

		if [ -d "$name" ]; then
			mkdir -p -- "${name#gh-pages/}"
			traverse "$name"
		elif [ -f "$name" ]; then
			cp -p -- "$name" "${name#gh-pages/}"
			git add "${name#gh-pages/}"
		else
			echo "$name: dunno what to do with it" >&2
			ec=1
		fi
	done
}

traverse gh-pages .
exit $ec
