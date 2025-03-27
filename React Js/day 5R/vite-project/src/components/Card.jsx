import "./card.css";

const Card = ({c_data}) => {
    console.log(c_data);

    return (
        <div>
            {c_data.products?.map((pro)=>{
                return (
                    <div className="card">
                        <h3>{pro.title}</h3>
                        <p>{pro.description}</p>
                        <img className="photo" src={pro.thumbnail} />
                    </div>
                )
            })}
        </div>
    )
}

export default Card;