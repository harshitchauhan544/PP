// const getProductsController = (req,res)=>{
//     console.log('Request Received');
//     res.json({
//         status: 'fail',
//         message: 'Work in progress',
//     })
// }

const { ProductModel } = require("../../../../models/product-schema")



const getProductsController = async (req,res) => {
    const productsList = await ProductModel.find();
    console.log("---:",productsList)
    res.send({
        status : "success",
        data : {
            products : productsList,
        }
    })
}

module.exports = {
    getProductsController
}