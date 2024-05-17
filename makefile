nightly_path = /Applications/Firefox\ Nightly.app/Contents/MacOS/firefox 
AO3_path = "https://archiveofourown.org/users/contrastellar/works"
UNAME_S := $(shell uname -s)
HOSTNAME := $(shell hostname)

VERSION := 0.1.2

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

build:
	web-ext build --overwrite-dest --ignore-files=api-keys.dat

build-xpi:
	web-ext build --overwrite-dest --ignore-files=api-keys.dat
	mv web-ext-artifacts/ao3-read-time-$(VERSION).zip web-ext-artifacts/ao3-read-time-$(VERSION).xpi