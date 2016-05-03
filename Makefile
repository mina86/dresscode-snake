all: $(patsubst gh-pages/%,%,$(wildcard gh-pages/*.*) \
                             $(wildcard gh-pages/*/*.*))

%: gh-pages/%
	cp $< $@

demo/%: gh-pages/demo/%
	@mkdir -p $(dir $@)
	cp $< $@

files/%: gh-pages/files/%
	@mkdir -p $(dir $@)
	cp $< $@

solution/%: gh-pages/solution/%
	@mkdir -p $(dir $@)
	cp $< $@


.PHONY: all
