require('dotenv').config();
//async errors

const express = require('express') ;
const app = express() ;

const notFoundMiddleware = require('./middleware/not-found') ;
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('<h1>Store API</h1><a href = "/api/v1/products">Product Routes </a>')
})



const connectDB = require('./db/connect')



app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000 ;

const start = async() =>{
    try {
        //Connect TO DB 
        await connectDB(process.env.MONGO_URI)


        app.listen(port , console.log(`server is listening on ${port} ...`))

    }catch(error) {

        console.log(error)

    }
}

start()





