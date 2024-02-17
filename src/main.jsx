import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from "./App"
import ProductPage from "./components/ProductPage"
import Body from "./components/Body"
import Report from "./components/Report"
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      
        <Route path="content" element={<Body />}/>
        
        <Route path="report" element={<Report />}/>
        <Route path="productPage/:productId" element={<ProductPage />} />
      </Route>
      
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
