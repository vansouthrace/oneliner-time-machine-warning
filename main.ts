import { mkdirSync, writeFileSync } from "node:fs";

// Warning label for a time machine, for the
// "Funniest Time Machine Warning Label" bounty on make.fun.
const entry =
  "WARNING: Do not meet yourself. He will ask to borrow money, and technically, you already owe it to him.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
