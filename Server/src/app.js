const express = require("express")
const port =10000
const app = express()
const cors= require("cors")

app.use(
    cors({
        origin:"*",
        credentials:true
    })
)

app.use(express.json())
app.use(express.urlencoded({extended:false}))


require("./db/db")

const GetRouter=require("./route/adminroute")

app.use("/", GetRouter)
app.listen(port , ()=>{
    console.log(`port is running on  ${port}` )
})