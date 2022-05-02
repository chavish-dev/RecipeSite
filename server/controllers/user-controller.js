module.exports={
    getAllUsers:(req,res)=>{
        res.status(200).json({
            massege:"get all users"
        })
    },
    createNewUser:(req,res)=>{
        res.status(200).json({
            massege:"create a new user"
        })
    }
}