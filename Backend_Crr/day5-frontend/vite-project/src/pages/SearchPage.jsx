import React, { useEffect, useState } from 'react'

const SearchPage = ()=> {
    const [searchText,setSearchText] = useState("");
    const [prod,setProd] = useState([]);

    const getData = async () => {
      const resp = await fetch('http://localhost:2200/api/v1/products', {
        method : 'GET',
      });
      const data = await resp.json();
      setProd(data.data.products);

      console.log(": data",data);
    }
    
    useEffect( () => {
      getData();
    },[]);
  return (
    <div className='p-6 m-4'>
        <div className='flex gap-4'>
            <input
             className='py-1 px-3 border-1 border-solid border-red-700 rounded-lg'
             type="text" 
             value={searchText} 
             onChange={(e) => setSearchText(e.target.value)} 
             />
            <button className='py-1 px-3 rounded-lg bg-blue-400'>Search</button>
        </div>
        <div>
            <h1 className='text-4xl text-red-500'>Products</h1>
            <div className='grid grid-cols-3 items-center justify-center gap-4'>
            {
              prod.map( (product) => {
                return (
                  <div key={product._id}>
                    <div>{product.title}</div>
                    <div>{product.price}</div>
                    <div>{product.stock}</div>
                  </div>
                );
              })
            }
            </div>
        </div>
    </div>
  )
}

export default SearchPage;