const { where } = require('sequelize')
const User = require('../model/user')

exports.getDetails=async (req, res,next)=>{
    try { const data = await User.findAll()
    res.status(201).json({allUser:data})
    }
    catch(err){res.status(500).json({error:err})}
}

exports.postDetails = async (req, res, next)=>{
    try{
        // console.log('request is:',req.body);
        if (!req.body.phone){
            throw new error ('Phone Number is mandatory');
        }
        const userName = req.body.name;
        const userEmail = req.body.email;
        const userPhone = req.body.phone;

        const data = await User.create({ 
            name : userName,
            email : userEmail,
            phone : userPhone
        })
        res.status(201).json({userDetails:data})
    }
    catch (err){ 
    res.status(500).json({error:err})};    
}

exports.deleteDetails = async (req, res, next)=>{
    const userId = req.params.id;
    try{
        if (userId=='undefined'){
           return res.status(400).json({err:"ID is missing"})
        }
        await User.destroy({where:{id:userId}})
        res.sendStatus(200);
    }
    catch (err){
        res.status(500).json({error:err});
    }
}