import { generateCreativeScripts } from "../utils/generate-script.js";

const results = generateCreativeScripts();
console.log("🧠 Generated Creative Outputs:");
console.log(JSON.stringify(results, null, 2));
