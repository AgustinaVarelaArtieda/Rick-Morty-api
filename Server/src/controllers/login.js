const data=require('../utils/users');

function login(req,res){
    const {email,password}=req.query
    const found = data.find((user)=>user.email===email&&user.password===password)
    const access=found?true:false;
    res.status(200).json({access});

    //Como lo hice yo y estaba mal D:
    // if(email===users.email && password===users.password){
    //     res.status(200).json({access:true})
    // } else {
    //     res.status(200).json({access:false})
    // }
}

module.exports=login;