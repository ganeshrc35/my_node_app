const Users = require("../model/Users")

module.exports = {
  	index: async (req, res, next) => {
  		try{
  			Users.get(req.con).then(data=>{
  				res.json(data);
  			});
  		}catch(err){
  			next(err);
  		}
 	},
 	validate_password: async(req,res,next) => {
 		try{
 			Users.validate_password(req.con,req.body).then(data=>{
 				res.json(data);
 			});
 		}
 		catch(err){
  			next(err);
  		}
 	}
}