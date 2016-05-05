#!/bin/sh

set -eu

if ! [ -d gh-pages ]; then
	echo 'gh-pages: no such directory' >&2
	exit 1
fi

ec=0
found=false

traverse() {
	for name in "$1"/*; do
		case $name in .*)
			continue
		esac

		if [ -d "$name" ]; then
			mkdir -p -- "${name#gh-pages/}"
			traverse "$name"
		elif ! [ -f "$name" ]; then
			echo "$name: dunno what to do with it" >&2
			ec=1
		elif ! cmp "$name" "${name#gh-pages/}" >/dev/null 2>&1; then
			cp -p -- "$name" "${name#gh-pages/}"
			git add "${name#gh-pages/}"
			found=true
		fi
	done
}

traverse gh-pages .
if $found; then
	git status
else
	echo 'No changed files found'
fi
exit $ec
