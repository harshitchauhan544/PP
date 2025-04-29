const validateCreateProductDto = (req,res,next) => {
    
    try{
        console.log(req.body);
        const {title,price,stock} = req.body;
        if(title === undefined || title == null || typeof title != 'string' || title.length < 2){
            throw new Error('Invalid title');
            
        }

        if(price === undefined || price == null || Number(price) === NaN || Number(price) <= 0){
            throw new Error('Invalid price');
        }

        if(stock != undefined && stock != null ){
            if(Number(stock) === NaN || Number(stock) <= 0){
                throw new Error('Invalid stock');
            }
        }

    next();

    }catch(err){
        res.status(400);
        res.json({
            status : 'fail',
            message: err.message,
        })
    }


}

module.exports = {
    validateCreateProductDto
}