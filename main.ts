import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "WARNING: do not visit your past self. He is insufferable, he knows it, and he will ask for the lottery numbers.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
