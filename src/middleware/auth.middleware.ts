import jwt from "jsonwebtoken";


export function validateUser(req, res, next) {
    jwt.verify(req.headers.authorization.replace("Bearer ", ""), process.env.SECRET_KEY||"YOUR_SECRET" , function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });    
}
