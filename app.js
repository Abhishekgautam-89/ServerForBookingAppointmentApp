const express = require('express');
const app = express();
const cors = require ('cors')
const sequelize = require('./util/database')

const bodyparser = require('body-parser');

const userRoutes = require('./routes/submit');

// app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json({extended:false}));
app.use(cors())
app.use(userRoutes);
// app.use('/', ((req,res,next)=>{
//     res.send('<p>Server Created</p>')
// }))


sequelize.sync()
.then((result)=>{
    console.log(result);
    app.listen(3000)})
.catch(err=>console.log(err))


// app.listen(5000)