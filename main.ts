// SPDX-License-Identifier: MIT
// One Star, Written in Sap — make.fun bounty entry.
// Writes the one-line houseplant review to /output/entry.txt.
// The line is a 1-star review by a houseplant of its human owner:
// a grievance (flat Diet Coke for water, a mug with no drainage for a
// pot, brown tips dismissed as "character") and a reason for the
// single star, in under 280 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star: he waters me with flat Diet Coke, repotted me into a mug with no drainage, and calls my brown tips 'character'. The fungus gnats have a better lease than I do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
