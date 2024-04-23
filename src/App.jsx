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

export default function App(){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<FoodType/>} />
        <Route path="/rice" element={<Rice />} />
        
      </>
    )
  );





  return(
    <>
  <RouterProvider router={router} />
  
  
    
    
    
    
    
    </>
  )
}