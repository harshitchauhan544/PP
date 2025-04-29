const { ProductModel } = require("../../../../models/product-schema.js")


const postProductsController = async (req,res)=>{
    // const newProduct = await ProductModel.create({
    //     title : 'Parle-G',
    //     price:'10',
    // });
    try{
        const obj = req.body;
        const newProduct = await ProductModel.create(obj);

        res.status(201)
        res.json({
            status : "success",
            data : {
                product : newProduct,
            }
        })
    }catch(err){
        res.status(500);
    }
}

module.exports = {
    postProductsController
}