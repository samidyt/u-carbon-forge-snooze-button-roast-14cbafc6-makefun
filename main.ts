// Snooze Button Roast — make.fun entry
// Competition: u-carbon-forge-snooze-button-roast-14cbafc6
//
// Writes one roast line to /output/entry.txt (falling back to a local
// ./output/entry.txt when /output is not writable), after checking it
// against the bounty gate: UTF-8, 1-200 characters, one line, not
// whitespace-only. Then reads the file back and compares it byte for
// byte with the entry, so a bad write fails loudly instead of silently.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Final: fresh angle — the alarm as Monday's hired hitman. Concrete,
// unexpected, and the punchline pays off in the last few words.
const ENTRY =
  "My alarm clock went off at 6 AM on a Saturday like Monday hired it as a hitman — relax, the only thing I'm taking out today is the snooze button.";

const MAX_CHARS = 200;

function checkGate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`entry is ${length} chars; gate allows 1-${MAX_CHARS}`);
  }
  if (text.trim() === "") throw new Error("entry is whitespace-only");
  if (/[\r\n]/.test(text)) throw new Error("entry must be a single line");
  Buffer.from(text, "utf8"); // throws on invalid UTF-8
}

function pickOutputDir(): string {
  const tries = [process.env.OUTPUT_DIR, "/output", "output"].filter(
    (d): d is string => typeof d === "string" && d !== "",
  );
  for (const dir of tries) {
    try {
      mkdirSync(dir, { recursive: true });
      return dir;
    } catch {
      // Not usable here — try the next candidate.
    }
  }
  throw new Error("no writable output directory found");
}

checkGate(ENTRY);
const dir = pickOutputDir();
const target = `${dir}/entry.txt`;
writeFileSync(target, ENTRY, "utf8");
const back = readFileSync(target, "utf8");
if (back !== ENTRY) throw new Error(`round-trip mismatch in ${target}`);
console.log(`OK: wrote ${[...ENTRY].length}-char entry to ${target}`);
