import prisma from "../config/db.config";

//So for this signup we will first do the following steps 
//1. we create the user

export const createUser = async (req:any,res :any)=>{
    const {email, password} = req.body;
    const findUser = await prisma.user_Signup.findUnique({
        where:{
            email: email
        }
    })
    if (findUser) {
           return  res.json({status:200,message:"email already exist "})
            
    }
    const newUser = await prisma.user_Signup.create({
        data:{
                email:email,
                password:password

        }
    })
    return res.json({status:200, message:"sucees fully created" ,data:newUser})
}