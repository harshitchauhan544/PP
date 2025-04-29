// const getProductsController = (req,res)=>{
//     console.log('Request Received');
//     res.json({
//         status: 'fail',
//         message: 'Work in progress',
//     })
// }

const { ProductModel } = require("../../../../models/product-schema")

const getProductsController = async (req,res) => {
    // const productsList = await ProductModel.find();
    // console.log("---:",productsList)

    const {page = 1,limit = 6,q = ""} = req.query;

    let mongoosequery = ProductModel.find();
    
    const regexMatch = new RegExp(q,'g');
    mongoosequery = mongoosequery.where('title').regex(regexMatch);

    mongoosequery = mongoosequery.sort('_id');
    mongoosequery = mongoosequery.skip( (page - 1)* limit);
    mongoosequery = mongoosequery.limit(limit)

    const productsList = await mongoosequery;

    const queryClone = mongoosequery.clone();
    const totalProducts = await ProductModel.countDocuments();

    res.send({
        status : "success",
        data : {
            products : productsList,
            page,
            limit,
            total : totalProducts,
        }
    })
}

module.exports = {
    getProductsController
}