const fsPromises = require('fs/promises');

const saveLog = (str) => {
    fsPromises.appendFile('logs.txt', str);
}

const requestLog = async(obj)=> {

    const {method,url} = requestLog;
    const date = new Date();
    saveLog(`${date.toLocaleString()}- ${method} - ${url}\n`);

    // try{
    //     const oldData = await fsPromises.readFile('logs.txt', 'utf-8');
    //     const oldDataArr = oldData.parse(oldData);
    //     oldDataArr.push(obj);
    //     await fsPromises.writeFile('logs.txt', JSON.stringify(oldDataArr));
    // }
    // catch(err){
    //     console.log(`File Handling error : ${err}`)
    // }

}





module.exports = {
    requestLog
}