const express = require('express');
const pool = require('../database');
const router = express.Router();
const path = require('path')

require('../database')




router.get('/all', async (req, res) => {
  const x = await pool.query('SELECT * FROM users', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get('/users', async (req, res) => {
  const x = await pool.query('SELECT * FROM users', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });


})

router.get('/users:id', async(req, res) => {
  const x = await pool.query('SELECT * FROM users', (err, rows, field) => {
    if (!err) {
      res.json();
    } else {
      console.log(err);
    }
  })
})


router.post('/users', async(req, res) => {
  // INSERT INTO `users` (`id`, `username`, `password`, `fullname`) VALUES (NULL, 'nico', '123456789', NULL);

const {username,fullname,password}=req.body;

 
  // INSERT INTO `users` (`id`, `username`, `password`, `fullname`) VALUES (NULL, 'nico', '123456789', NULL);

  const x = await pool.query("INSERT INTO users ( `username`, `password`, `fullname`) VALUES (?,?,?)", [username,fullname,password ], (err, rows, field) => {
    if (!err) {
      res.json();

    } else {
      console.log(err);
    }
  })
console.log(x)
// req.sendFile(__dirname + '/src/public/index.html')
res.sendFile(path.join(__dirname, '../public/index.html'));
})







module.exports = router;