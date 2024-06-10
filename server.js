import express from "express";

const app = express();

// your routes will go here...

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});

app.get("/messages", (req, res) => {
  res.json({ message: biggerObject });
});

let biggerObject = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

app.post("/messages", (req, res) => {
  res.json({ message: "New message created." });
});

app.use(express.json());
