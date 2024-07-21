import { allChars } from "./characters";
import * as fs from "node:fs"

function generateCharData() {
  const jsonCharData = JSON.stringify(allChars)
  fs.writeFileSync('../characters.json', jsonCharData);
}

generateCharData()