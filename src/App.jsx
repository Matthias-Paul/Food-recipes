import {useState, useEffect} from "react"
import "./app.css"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import FoodType from "./FoodType"
import Rice from "./Rice"
import Amala from "./Amala"
import Indomie from "./Indomie"
import Pasta from "./Pasta"
import PepperSoup from "./PepperSoup"
import Pizza from "./Pizza"
import Plantain from "./Plantain"
import Potato from "./Potato"
import Shawama from "./Shawama"
import Soup from "./Soup"
import Tuwo from "./Tuwo"
import Yam from "./Yam"
import Beans from "./Beans"
import Bread from "./Bread"
import HomePageNotFound from "./HomePageNotFound"

export default function App(){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<FoodType/>} />
        <Route path="/Rice" element={<Rice />} />
        <Route path="/Amala" element={<Amala />} />
        <Route path="/Beans" element={<Beans />} />
        <Route path="/Bread" element={<Bread />} />
        <Route path="/Indomie" element={<Indomie />} />
        <Route path="/Pasta" element={<Pasta />} />
        <Route path="/PepperSoup" element={<PepperSoup />} />
        <Route path="/Pizza" element={<Pizza />} />
        <Route path="/Plantain" element={<Plantain/>} />
        <Route path="/Potato" element={<Potato />} />
        <Route path="/Shawama" element={<Shawama />} />
        <Route path="/Soup" element={<Soup />} />
        <Route path="/Tuwo" element={<Tuwo/>} />
        <Route path="/Yam" element={<Yam />} />
        <Route path="*" element={<HomePageNotFound />} />
      </>
    )
  );





  return(
    <>
  <RouterProvider router={router} />
  
  
    
    
    
    
    
    </>
  )
}