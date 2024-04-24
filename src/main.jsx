import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom" ;
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// adjusting the context hook

import { AuthContextProvider } from './context/AuthContext.jsx';



ReactDOM.createRoot(document.getElementById( 'root' ) ).render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthContextProvider>
  <ToastContainer theme='dark' autoClose={3000} pauseOnHover={false} closeOnClick position='bottom-right'  />
  <App/>
  </AuthContextProvider> 
  </BrowserRouter>
  </React.StrictMode>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
