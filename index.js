const express = require("express");
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT
const getQueueChanel = require("./config/queue")
const {initExchanges,consumeFromEmailQueue} = require("./utils/rabbitManager")
app.use(express.json());


getQueueChanel().then(
    async ()=>{
        await initExchanges()
        await consumeFromEmailQueue()
    }
)



app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});