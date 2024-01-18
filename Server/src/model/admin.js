const mongoose= require("mongoose")

const TeacherSchema= new mongoose.Schema({
    
       
        tname:{
            type:String
        } ,
        temail: {
            type:String
        },
        tmobile: {
            type:Number
        },
       
        tgender: {
            type:String
        },
        tdob: {
            type:String
        },
        
        
        taddress: {
            type:String
        },
        
       
      
})

const TeacherModel =new  mongoose.model("Teacher" , TeacherSchema);



// const create=async()=>{

  
//     try{
//         const list1=new TeacherModel({
//             tname:"pramod shukla",
//             temail:"pramod@gmail.com" ,
//             tmobile:"123456789" ,
           
//             tgender:"male" ,
//             tdob:"12/01/1972",
            
            
//             taddress:"raipurbhilai" ,
//         });

//         const list2=new TeacherModel({
//             tname:"pramod shukla",
//             temail:"pramod@gmail.com" ,
//             tmobile:"123456789" ,
          
//             tgender:"male" ,
//             tdob:"12/01/1972",
            
            
//             taddress:"raipurbhilai" ,
//         })
    
//         const result= await  TeacherModel.insertMany([list1, list2])
//         console.log(result)
//     }
//     catch(error){
// console.log(error)
//     }
// }
// create()

module.exports= TeacherModel