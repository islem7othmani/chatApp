const { register,login } = require("../Controllers/User.controllers")

const route = require ("express").Router();

route.post("/register",register)
//router.route("/register").post(register)
route.post("/login",login)
 
module.exports = route;