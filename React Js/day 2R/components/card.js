
// start with uppercase letter for naming - React Components

const Card = ({username}) => {
    // console.log(abc)
    // const { username} = abc;
    // console.log(username)
    return (
        <div className = "card">
            <h3>Hello {username}!</h3>
            <p>Be fast </p>
        </div>
    );
};

// export this 
export default Card;