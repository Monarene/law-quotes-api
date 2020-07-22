const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.set("port", 3000);

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json([
    {
      author: "Voltaire",
      quote:
        "It is forbidden to kill; therefore all murderers are punished unless they kill in large numbers and to the sound of trumpets",
    },
    {
      author: "Robert A. Heinlein",
      quote:
        "I am free, no matter what rules surround me. If I find them tolerable, I tolerate them; if I find them too obnoxious, I break them. I am free because I know that I alone am morally responsible for everything I do.",
    },
    {
      author: "Cassandra Clare, Clockwork Angel",
      quote: "It isn't against the Law to be an idiot",
    },
    {
      author: "Hunter S. Thompson",
      quote:
        "We cannot expect people to have respect for law and order until we teach respect to those we have entrusted to enforce those laws",
    },
    {
      author: " Charlotte Brontë, Jane Eyre",
      quote:
        "Laws and principles are not for the times when there is no temptation: they are for such moments as this, when body and soul rise in mutiny against their rigour ... If at my convenience I might break them, what would be their worth?",
    },
    {
      author: "Marcus Tullius Cicero",
      quote: "In times of war, the law falls silent",
    },
  ]);
});

app.listen(app.get("port"), () => {
  console.log(`The Node app is running in ${app.get("port")}`);
});
