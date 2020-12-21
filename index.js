const express = require( "express");
const app = express()
const morgan = require('morgan');
const cors = require('cors');


  app.use(express.static(__dirname + '/src/public')); 



//  app.use(express.static('./src/public'))


const PORT = process.env.PORT || 3000;


app.use(express.json()); 
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cors());



/**************** */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
/********************* */

app.use('/api',require('./src/routes/ruta'))
// app.use('/api/users',require('./src/public/'))




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
