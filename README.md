# ao3-read-time

A Firefox extension that is centered around showing the time it'll take to read a fic, depending on the word count.

## Description

ao3-read-time is a Firefox extension focused around one thing, and one thing only -- the ability to see how long it'll take you to read a fic, based *your* reading speed.


## Getting Started

### Dependencies

* [Mozilla Developer Docs, Web Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
* [`web-ext`](https://github.com/mozilla/web-ext) 7.11.0
* [Homebrew (for macos)](https://brew.sh/) 4.2.20

### Installing

The addon can be installed in one primary method

1. addons.mozilla.org (Preferred Method)
Navigate to [this site](https://addons.mozilla.org/en-US/firefox/addon/ao3-read-time) and simply install the addon!

[Releases] https://github.com/contrastellar/ao3-read-time/releases are provided as "benchmarks" of what code is compiled when, as I've yet to set up my own verification process for the addon.

## Help

If you need help, please feel free to make an [issue](https://github.com/contrastellar/ao3-read-time/issues) and I'll take a look as soon as possible!

## Version History

Any releases that are not version 1.0.0 will be considered "pre-release"

* 1.0.0 (planned)
    * Full release
* 0.1.3
    * Beta release, fixing the issue where sometimes the script would run before the word count would be loaded, causing the read-time to display as zero
* 0.1.2
    * Beta release, fixing an issue where only the first instance of a page with word-count tags on it would ever run.
* 0.1.1
    * Beta release, minor changes
* 0.1.0
    * Beta Release

## License
The License for this software is the `AGPL-3.0 License`, as found [here](https://github.com/contrastellar/ao3-read-time/blob/main/LICENSE)

