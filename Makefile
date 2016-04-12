all: gh-pages
gh-pages: gh-pages/demo gh-pages/solution gh-pages/files \
          gh-pages/index.html gh-pages/styles.css gh-pages/snake.png

clean:
	rm -rf gh-pages solution.js


compiler.jar:
	wget https://dl.google.com/closure-compiler/compiler-latest.zip
	unzip compiler-latest.zip compiler.jar


gh-pages/demo: gh-pages/demo/snake.js gh-pages/demo/snake.html

solution.js: solution.js.gpg
	gpg --output $@ --decrypt $<

gh-pages/demo/snake.js: compiler.jar snake-framework.js solution.js
	@mkdir -p $(dir $@)
	cat $(wordlist 2,3,$^) | \
		java -jar compiler.jar --new_type_inf \
		--compilation_level ADVANCED_OPTIMIZATIONS \
		--jscomp_error \* --js_output_file=$@

gh-pages/demo/snake.html: snake.html
	@mkdir -p $(dir $@)
	grep -v snake-framework.js <$< >$@



gh-pages/solution: gh-pages/solution/snake-framework.js \
                   gh-pages/solution/snake.js gh-pages/solution/snake.html

gh-pages/solution/%: %
	@mkdir -p $(dir $@)
	cp $< $@



gh-pages/files: gh-pages/files/snake-framework.js gh-pages/files/snake.js \
                gh-pages/files/snake.html

gh-pages/files/%: %
	@mkdir -p $(dir $@)
	cp $< $@


gh-pages/index.html: index.md efore fter
	pandoc -fmarkdown -thtml5 -o$@ -s -Mtitle:'DressCode: Snake' \
	       -c styles.css -Before -After --toc <$<

gh-pages/%: %
	@mkdir -p $(dir $@)
	cp $< $@


.DELETE_ON_ERROR:
.PHONY: gh-pages gh-pages/demo gh-pages/solution gh-pages/files clean
