const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "SENDGRID_API_KEY = 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"
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
