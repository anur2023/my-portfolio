import { profile } from "../src/data/profile.js";

export default function handler(_req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json(profile);
}
