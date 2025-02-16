const getQueueChannel = require('../config/queue')
const sendMail = require("./sendEmail")

const processedExchange = 'processedExchange'
const rawExchange = 'rawExchange'

var channel = null
var rawExceptionQueue = null
var emailQueue = null
var dbQueue = null


async function initExchanges() {

    try{

        channel = await getQueueChannel()

        await channel.assertExchange(rawExchange,"fanout",{durable:true})
        await channel.assertExchange(processedExchange,"fanout",{durable:true})


        rawExceptionQueue = await channel.assertQueue("rawExceptionQueue",{durable:true,autoDelete:false})
        emailQueue = await channel.assertQueue("emailQueue",{durable:true,autoDelete:false})
        dbQueue = await channel.assertQueue("dbQueue",{durable:true,autoDelete:false})

        await channel.bindQueue(rawExceptionQueue.queue,rawExchange,'')
        await channel.bindQueue(emailQueue.queue,processedExchange,'')
        await channel.bindQueue(dbQueue.queue,processedExchange,'')


        console.log("Successfully initialized queues and exchanges")

    }
    catch(Err){
        console.log(Err)
    }
}


async function consumeFromEmailQueue() {

    try{
        if (channel == null){
            console.log("Exchange not initialized")
            throw Error("Channel not initialized")
        }

        channel.consume(emailQueue.queue,async(message)=>{
            if(message.content){

                const data = JSON.parse(message.content)
                const send = await sendMail(data)
                if(send === 200){
                    channel.ack(message)
                }

            }
        },{noAck:false})

    }
    catch(err){
        console.log(err)

    }
}


module.exports = {initExchanges,consumeFromEmailQueue}