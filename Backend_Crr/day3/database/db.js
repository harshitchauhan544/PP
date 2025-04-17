const {ulid} = require("ulid");
const fsPromises = require("fs/promises");

const saveProductInDb = async (obj) => {
    obj.id = ulid();
    const oldArray = await getProductsArray();
    oldArray.push(obj);
    saveProductsArray(oldArray);
};


const saveProductsArray = (arr) => {
    fsPromises.writeFile(
        "./data.json",
        JSON.stringify(arr)
    );
};

const getProductsArray = async () => {
    const str = await fsPromises.readFile('./data.json');
    const arr = JSON.parse(str);
    return arr;
}

module.exports = {
    saveProductInDb,
}