const { ProductModel } = require("../../../../models/product-schema.js")


const postProductsController = async (req,res)=>{
    const newProduct = await ProductModel.create({
        title : 'Parle-G',
        price:'10',
    });

    res.status(201)
    res.json({
        status : "success",
        data : {
            product : newProduct,
        }
    })
}

module.exports = {
    postProductsController
}