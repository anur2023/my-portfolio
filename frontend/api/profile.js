import { readFileSync } from "node:fs";
import { join } from "node:path";

export default function handler(_req, res) {
  try {
    const json = readFileSync(join(process.cwd(), "api", "profile.json"), "utf8");
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(json);
  } catch {
    res.status(500).json({ status: "error", message: "Profile data unavailable" });
  }
}
