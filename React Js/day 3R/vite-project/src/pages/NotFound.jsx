import {Link} from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
        <h2>Page Not Found</h2>
        <a href="/">Home</a>
        <br />
        <br />
        <Link to="/">Home</Link>
    </div>
  )
}

export default NotFoundPage;

// Avoid using anchor tag 

// use link to route among pages

// as anchor reloads the page 

// while link used the preloaded js