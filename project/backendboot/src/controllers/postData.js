import schemaData from '../../models/student.js'
const LoginPostData = async (req,res,next)=>{
    const {email,password}=req.body;
    try{
        const  existingUser = await schemaData.findOne({email:email});
        if(existingUser){
            if(existingUser.password==req.body.password){
                return res.status(200).json({msg:"login successfull",userdata:existingUser})
            }
            else{
                return res.status(201).json({msg:"incorrect password"})
            }
        }else{
            return res.status(201).json({msg:"user not found"})
        }
    }catch(err){
        return console.log(err)
    }
   
}
export default LoginPostData;
