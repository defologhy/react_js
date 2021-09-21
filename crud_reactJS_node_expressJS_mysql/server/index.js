const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "konveksi",
});

app.post("/createKonsumen", (req, res) => {
  const id = req.body.id;
  const notlp = req.body.notlp;
  const namakonsumen = req.body.namakonsumen;
  const alamatkonsumen = req.body.alamatkonsumen;

  db.query(
    "INSERT INTO konsumen VALUES (?, ?, ?, ?, ?)",
    [id, notlp, namakonsumen, alamatkonsumen, 1],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/getKonsumenById/:id", (req, res) => {
  
  const id = req.params.id;
  
  db.query("SELECT id,notlp,namakonsumen,alamatkonsumen FROM konsumen where id='"+id+"'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getKonsumen", (req, res) => {
  db.query("SELECT id,notlp,namakonsumen,alamatkonsumen FROM konsumen", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/updatekonsumen", (req, res) => {
  const id = req.body.id;
  const notlp = req.body.notlp;
  const namakonsumen = req.body.namakonsumen;
  const alamatkonsumen = req.body.alamatkonsumen;
  db.query(
    "UPDATE konsumen SET notlp = ?, namakonsumen = ?,alamatkonsumen = ? WHERE id = ?",
    [notlp,namakonsumen,alamatkonsumen, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/deletekonsumen/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM konsumen WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
