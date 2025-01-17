const express = require("express");
const app = express();
const getQueueChanel = require("./config/queue")
const {initExchanges,consumeFromEmailQueue} = require("./utils/rabbitManager")
app.use(express.json());


getQueueChanel().then(
    async ()=>{
        await initExchanges()
        await consumeFromEmailQueue()
    }
)



app.listen(5001,()=>{
    console.log("Server running on port 5001");
});