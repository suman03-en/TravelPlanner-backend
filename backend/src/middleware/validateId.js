export const validateIdparam = (req,res,next)=>{
    const id = Number(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({
            message:"Invalid id. Must be a number"
        });
    }
    
    if(id<=0){
        return res.status(400).json({
            message:"Invalid id. Must be a positive"
        });
    }

    req.params.id = id;
    next();
}