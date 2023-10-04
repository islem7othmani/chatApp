const { json } = require('express');


const jwt = require("jsonwebtoken");
const User = require('../Models/User.Model')
const asyncHandler = require('express-async-handler')
const bcryptjs = require("bcryptjs");
const generateToken = require("../Config/jwtFile")


const login = async(req,res)=>{
	try{
		const testadress = await User.findOne({email:req.body.email});
		if(!testadress) return res.status(401).json("adress can not found");

		const testpw = await bcryptjs.compare(
			req.body.password , testadress.password 
		);

		if(!testpw) return res.status(401).json("wrong email adress");

		 return res.status(200).json({testadress});
	}catch(err){
		return res.status(500).json(err);
	}
}  



const register = async (req, res) => {
	try {
		const usertest = await User.findOne({ email: req.body.email });
		if (usertest) return res.status(422).json("Email already exist");

		const hashed = await bcryptjs.genSalt(10); 
		const hashedPassword = await bcryptjs.hash(req.body.password, hashed);

		const newUser = new User({
			NameUser: req.body.NameUser,
			email: req.body.email,
			password: hashedPassword,
            pic: req.body.pic,
			token:generateToken(User._id),
		});

		const newuser = await newUser.save();
		return res.status(200).json(newuser);
	} catch (err) {
		return res.status(500).json(err);
	}
};


module.exports.register = register;
module.exports.login = login;


















