import fs from "fs";

export function fetchApprovedTrends() {
  const path = "../trendhunter-agent/output/approved.json";
  if (!fs.existsSync(path)) return [];

  const data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data);
}
