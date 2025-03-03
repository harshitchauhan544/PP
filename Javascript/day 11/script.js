//  https://dummyjson.com/recipes/search?q=Margherita


const getData = (text) => {
    const pr = fetch(`https://dummyjson.com/recipes/search?q=${text}`);

    pr.then((res) =>{
        const pr2 = res.json();
        pr2.then((data) => {
            showcards(data.recipes);
        });
    });
};

const showcards = (dataArr) => {
    const root = document.getElementById("prt")
    root.innerHTML = "";
    dataArr.forEach((elem) => {
        const newDiv = document.createElement('div');
        newDiv.className = "card";
        newDiv.innerHTML = `
        <h4>${elem.name} </h4>
        <img src= "${elem.image}">
        <p>${elem.cuisine}</p>
        `
        root.appendChild(newDiv);
    });
};

let timeOutId = null;

const handleSearch = (e) => {
    // getData(e.target.value);

    // deleting the previous apicall
    // if new word is written within the time limit
    // to reduce redundant api calls 
    if(timeOutId){
        clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
        getData(e.target.value);
        
    }, 1000);
}