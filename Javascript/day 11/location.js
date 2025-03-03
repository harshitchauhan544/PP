const getdata = (text) => {
            const pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`,{
            method : "GET",
            headers : {
                "x-rapidapi-host" : "google-map-places.p.rapidapi.com",
                "x-rapidapi-key" : "8831d848bemsh687bc42d8abd870p12451ajsnef2a77e950d3",
    
            }
        });

        pr.then((res) => {
            const pr2 = res.json();
            pr2.then( (data) => {
                showLocations(data);
            })
        })
};

const root = document.getElementById("locations");

root.addEventListener("click" , )

const showLocations = (data) => {
    root.innerHTML = "";
    const {predictions} = data;
    // console.log(predictions)
    predictions.forEach((ele) => {
        const p = document.createElement("p");
        p.innerText = ele.description;
        p.id = ele.place_id;
        root.appendChild(p);
    });
};

let id = null;


const handleSearch= (e) =>{

    if(id){
        clearTimeout(id);
    }
    
    id = setTimeout(() => {
        getdata(e.target.value);
        
    }, 800);
}



const getSpecificInfo = (placeId) => {
    const pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/details/json?place_id=${placeId}&region=en&fields=all&language=en&reviews_no_translations=true`,{
        method : "GET",
        headers : {
            "x-rapidapi-host" : "google-map-places.p.rapidapi.com",
            "x-rapidapi-key" : "8831d848bemsh687bc42d8abd870p12451ajsnef2a77e950d3",

        }
    });
}