const express = require('express'); //importing express
const cors = require('cors'); //importing cors
const {getTasks, createTask} = require('./src/tasks'); //importing get Task
const PORT = process.env.PORT || 3000; // conecting to port

const app = express();   // intailizing express
app.use(cors());        //Telling Express to use Cors
app.use(express.json());  //Telling api to parce info as json


//Routes
app.post('/tasks', createTask);   
app.get('/tasks', getTasks);
app.patch('/task/:taskId', updateTask);


app.listen(PORT, ()=> {          //connecting to port
    console.log('Listening on Port:', PORT)
});