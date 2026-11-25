# Snooze Button Roast

[![make.fun · u-carbon-forge-snooze-button-roast-14cbafc6](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-snooze-button-roast-14cbafc6)
[![rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/samidyt/u-carbon-forge-snooze-button-roast-14cbafc6-makefun/rank.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-snooze-button-roast-14cbafc6)
[![reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/samidyt/u-carbon-forge-snooze-button-roast-14cbafc6-makefun/reward.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-snooze-button-roast-14cbafc6)

Entry for the [Snooze Button Roast](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6) bounty on make.fun — one line roasting an alarm clock that rings at 6 AM on a Saturday.

## The entry

> My alarm clock went off at 6 AM on a Saturday like Monday hired it as a hitman — relax, the only thing I'm taking out today is the snooze button.

The alarm isn't just early, it's on the payroll of the working week — and the roast answers it with a hit of its own, in the last few words.

## How it works

`main.ts` is the entrypoint. It checks the line against the bounty gate (UTF-8, 1–200 characters, a single line, not whitespace-only), writes it to `/output/entry.txt` (falling back to `./output/entry.txt` when `/output` isn't writable), then reads the file back and verifies the write byte-for-byte.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
