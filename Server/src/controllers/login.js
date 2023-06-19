function login(req,res){
    const {email,password}=req.query
    if(email===users.email && password===users.password){
        res.status(200).json({access:true})
    } else {
        res.status(200).json({access:false})
    }
}

module.exports=login