import express from "express";
import cors from "cors";
import { CharacterSearch } from "@xivapi/nodestone";

const app = express();
const parser = new CharacterSearch();

app.use(cors());

app.get("/", (req, res) => {
  res.send("FFXIV Char API");
});

app.get("/api/character/:name", async (req, res) => {
  try {
    const { name } = req.params;

    const character = await parser.parse({
      query: { name },
    } as any);

    res.json(character);
  } catch (error) {
    console.error("Failed to fetch character:", error);
    res.status(500).json({ error: "Failed to fetch character" });
  }
});

const PORT = 8080;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
