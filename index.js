import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/random.json"
    );
    res.render("index.ejs", { fact: response.data.text });
  } catch (error) {
    res.render("index.ejs", { fact: "Sorry, could not get the fact" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
