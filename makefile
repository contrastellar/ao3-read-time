nightly_path = /Applications/Firefox\ Nightly.app/Contents/MacOS/firefox 
AO3_path = "https://archiveofourown.org"
UNAME_S := $(shell uname -s)
HOSTNAME := $(shell hostname)

run:
ifeq ($(UNAME_S), Darwin)
ifeq ($(HOSTNAME), Skywraith)
	web-ext run -f $(nightly_path) -u $(AO3_path)
else
	web-ext run
endif
else
	web-ext run -u $(AO3_path)
endif
