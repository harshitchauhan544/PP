import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// This is our way of writing 
const domRoot = document.getElementById('root');
const reactRoot = createRoot(domRoot);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Way of writing by the provider
// works exactly the same

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
