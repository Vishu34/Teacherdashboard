
const mongoose= require("mongoose")

mongoose.connect("mongodb://localhost:27017/teacheradmin",{

}).then(()=>{

 console.log("database is connected") })
.catch((e)=>{
    console.error(error)
})






