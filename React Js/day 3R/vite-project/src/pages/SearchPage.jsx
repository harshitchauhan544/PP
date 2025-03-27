import "./SearchPage.css";
import Card from "../components/Cards";
const cards = [
    {
        title : "One",
        text : "One One"
    },
    {
        title : "Two",
        text : "Two Two"
    }
]

const SearchPage = () => {
    return (
        <div className="search-page">
            
            {cards.map((ele) => {
                return(
                    <Card title={ele.title} text={ele.text} key = {ele.title}></Card>
                    // or 
                // <div key = {ele.title}>
                //     <h2>{ele.title}</h2>
                //     <p>{ele.text}</p>
                // </div>
                )
            })}
        
        </div>
    )
}

// const SearchPage = () => {
//     return (
//         <div className="search-page">
//             <div>
//                 <div>{cards[0].title}</div>
//                 <div>{cards[0].text}</div>
//             </div>
//             <div>
//                 <div>{cards[1].title}</div>
//                 <div>{cards[1].text}</div>
//             </div>
//         </div>
//     )
// }

export default SearchPage;