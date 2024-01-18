const TeacherModel=require("../model/admin")
const GetData=(async(req,res)=>{

    try{

       
        console.log("hello")
        const result = await TeacherModel.find({})
        .sort({_id:-1})
        // console.log(result)
       res.status(200).json({
        message:"success" , data : result
       })
       
       
    }catch(error){
        console.log("semething is wrong" , error)
        res.status(500).json({ message: 'error', error: error.message });
    }
})


const PostData=(async(req,res)=>{

    const {name,
        email,
        mobile,
        address,
        gender}=req.body

        console.log(name,
            email,
            mobile,
            address,
            gender)
    try{

       
        
        const result = new TeacherModel({
            tname:name,
            temail:email,
          tmobile:mobile,
          taddress: address,
          tgender:gender
        })
        
        result.save()
       res.status(201).json({
        message:"success" , data : result
       })
       
       
    }catch(error){
        console.log("semething is wrong" , error)
        res.status(500).json({ message: 'error', error: error.message });
    }
})

const GetparticulerData=(async(req,res)=>{

    console.log(req.params.id)
    try{

       
        
        const result = await TeacherModel.findById({_id:req.params.id})
       
        console.log(result)
       res.status(200).json({
        message:"success" , data : result
       })
       
       
    }catch(error){
        console.log("semething is wrong" , error)
        res.status(500).json({ message: 'error', error: error.message });
    }
})


const UpdateData=(async(req,res)=>{

console.log(req.params.id);
const {name,
    email,
    mobile,
    address,
    gender}=req.body

   
    try{

       
        // console.log("hello")
        const result = await TeacherModel.findByIdAndUpdate({_id:req.params.id},{
            tname:name,
            temail:email,
          tmobile:mobile,
          taddress: address,
          tgender:gender

        }, {
            new:true
        });
        console.log(result)
       res.status(201).json({
        message:"success" , data : result
       })
       
       
    }catch(error){
        console.log("semething is wrong" , error)
        res.status(500).json({ message: 'error', error: error.message });
    }
})

const RemoveData=(async(req,res)=>{
const id = req.params.id
console.log(id)
    try{

       
      
        const result = await TeacherModel.findByIdAndDelete({
            _id:id
        })
        
        console.log(result)
       res.status(204).json({
        message:"data has been deleted" 
       })
       
       
    }catch(error){
        console.log("semething is wrong" , error)
        res.status(500).json({ message: 'error', error: error.message });
    }
})

module.exports={GetData , PostData, UpdateData, RemoveData , GetparticulerData}