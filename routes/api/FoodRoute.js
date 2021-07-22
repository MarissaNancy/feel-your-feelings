//get by id according to mood
//get by id
const express = require("express");
// const db = require("../models/food");
const mongojs = require("mongojs");

app.get("/api/food/find/:id", (req, res) => {
  db.User_db.findOne(
    {
      _id: mongojs.ObjectId(req.params.id),
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});


