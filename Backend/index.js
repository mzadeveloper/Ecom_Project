const express = require("express");
const app = express();
var User = require("./component/config");

app.use(express.json());
app.post("/signup", async (req, resp) => {
  const user = new User(req.body);
  let data = await user.save();
  resp.send(data);
});
app.listen("5000");
