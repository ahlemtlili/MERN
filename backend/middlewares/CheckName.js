const checkName = (req, res, next)=>{
    if(!req.body.name){ return res.status(400).send("name is required")}
    next()

}

module.exports= checkName