all: $(patsubst gh-pages/%,%,$(wildcard gh-pages/*.*) \
                             $(wildcard gh-pages/*/*.*))

%: gh-pages/%
	cp $< $@

.PHONY: all
