import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFound";
import {BrowserRouter,Routes,Route} from 'react-router'


// using react-router to handle rounting 

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={ <NotFoundPage /> } />
      
    </Routes>
  </BrowserRouter>
  )
}


// brute way of routing 

// const App = () => {
//   const { location } = window;
//   const { pathname } = location;

//   if (pathname === "/") {
//     return (
//       <div>
//         <HomePage />
//       </div>
//     )
//   } else if (pathname === "/search") {
//     return (
//       <div>
//         <SearchPage />
//       </div>
//     )
//   }
//   else {
//     return (
//       <div>
//         <h1>OOPs, page not found</h1>
//         <a href='/'>Home</a>
//       </div>
//     )
//   }
// }

export default App;