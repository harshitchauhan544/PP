import { useEffect } from "react";

const Card = ({name,email,githubLink})=> {
    // const [data, setData] = useState({});
    // const res = githubLink.split('/');
    // const userId = res[3];
    // console.log(data);

    const getdata = async() =>
    {
        const resp = await fetch('https://api.github.com/${userId}');
        const temp = await resp.json();

        console.log(temp);

        // setData(temp);
    }

    useEffect(()=>{
        getdata();
    },[]);
    
    return (
        <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <a href={githubLink} target="_blank">Visit Profile </a>
        </div>
    )
}

export default Card;