import { useState, useEffect } from "react";
const useGetProducts = () => {
    const [prod,setProd] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try{
            setLoading(true);
            const resp = await fetch('http://localhost:2200/api/v1/products', {
            method : 'GET',
            });
            const data = await resp.json();
            setProd(data.data.products);

            console.log(": data",data);
        }catch(err){
            console.log("getData -->",err.message);
        }finally{
            setLoading(false);
        }
    }
    
    useEffect( () => {
      getData();
    },[]);

    return { prod, loading };
}

export {useGetProducts};