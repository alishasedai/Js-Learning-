const authorizeRole = (...allowedRoles) => {
    return (req,res,next)=>{
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({
                message : "You dont have permission"
            });

        }
        next();

    }
}
module.exports = authorizeRole;
