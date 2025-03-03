// Promise

// Promises : fetch() , 

const getData = () => {
    const res = fetch('https://api.github.com/users/harshitchauhan544');
    console.log(res);
    res.then( (a) => {
        console.log("type of a is : " + typeof a);
        console.log(a);
        const pr = a.json();

        pr.then( (data) => {
            // console.log("data : " , data);
            showUI(data);
        })
    }).catch( (b) => {
        console.log(b);
        console.log("type of b is : " + typeof b);
    });
};

getData();

// // const res = fetch('https://dummyjson.com/products');
// const res = fetch('https://api.github.com/users/harshitchauhan544');
// console.log(res);

// res.then( (a) => {
//     console.log("type of a is : " + typeof a);
//     console.log(a);
//     const pr = a.json();

//     pr.then( (data) => {
//         // console.log("data : " , data);
//         showUI(data);
//     })
// }).catch( (b) => {
//     console.log(b);
//     console.log("type of b is : " + typeof b);
// });

function showUI(data){
    // for creating visualizing
    console.log(data);
    

    
    const{ avatar_url, login, html_url} = data;

    const card=document.getElementById('card');

    card.innerHTML = `
    <h4>${login.toUpperCase()}</h4>
    <img src = "${avatar_url}" alt="sorry">
    `

    storeData(data);
}

function storeData(data){
    const old = localStorage.getItem("searches");
    const arr = JSON.parse(old || "[]");
    arr.push(data);
    localStorage.setItem("searches", JSON.stringify(arr));
}