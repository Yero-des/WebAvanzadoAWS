import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send("Dashboard");
})

app.get('/main', (req, res) => {
  res.send("Menu");
});

app.get('/items', (req, res) => {
  const items = ["Mesa","Silla", "Puerta", "Ropero"];
  const itemsString = items.join(" ");
  res.send(itemsString);
});

app.listen(3000, () => {
  console.log("Server corriendo en el puerto 3000");
});
