const express1 = require("express");
app = express1();

app.get("", (req, res) => {
  res.send("<h1>weather</h1>");
});

app.get("/help", (req, res) => {
  res.send({
    name: "andrew",
    age: 27
  });
});

app.get("/about", (req, res) => {
  res.send("<h1>about us</h1>");
});
app.get("/weather", (req, res) => {
  res.send({
    latitude: 47,
    longitude: 50
  });
});
app.listen(3000, () => {
  console.log("server started at port 3000");
});
