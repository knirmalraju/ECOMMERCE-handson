const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");      
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res)=>{     //getting request with user detail and responding code is inside for registering new user

    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });
    try{
        const savedUser = await newUser.save();  //saving new user to database
        res.status(201).json(savedUser);
    }catch (err){
        res.status(500).json(err);
    }

});

//login
router.post("/login", async (req, res)=>{    //getting request with user detail and responding code is inside for registering already user
    try{
        const user = await User.findOne({ username : req.body.username});
        //response acts like return function
        !user && res.status(401).json("wrong credentials!");     //if condition for wrong username
        //password decrytion
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        Originalpassword!==req.body.password && res.status(401).json("wrong credentials!");   //if condition for wrong password
        //others used for showing details except password and _doc used to avoid error in response
        //jwt provide token to access a data through client side
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,{expiresIn:"3d"}
        );

        const {password,...others} = user._doc;
        
        res.status(200).json({...others, accessToken});
        }catch(err){
            res.status(500).json(err);
        }
});

module.exports = router;