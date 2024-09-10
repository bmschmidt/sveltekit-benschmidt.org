
# Every md file in src/content or a subdirectory is a source.
SOURCES := $(shell find src/content -name '*.md')
r
# They need to be turned into djot files.
DJOTS := $(SOURCES:.md=.djot)

all: $(DJOTS)

%.djot: %.md lib/strip-text.lua
	pandoc -s -t markdown --lua-filter lib/strip-text.lua $< > $@
	pandoc -f markdown -t djot --lua-filter lib/fix-headers.lua $< >> $@

