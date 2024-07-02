import {Routes, Route} from "react-router-dom"
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

export default function PopularFood() {
  return (
    <>
    <Routes>
    <Route path="/" element={<FoodType />} />
        <Route path="/Rice" element={<Rice />} />
        <Route path="/Amala" element={<Amala />} />
        <Route path="/Indomie" element={<Indomie />} />
        <Route path="/Pasta" element={<Pasta />} />
        <Route path="/PepperSoup" element={<PepperSoup />} />
        <Route path="/Pizza" element={<Pizza />} />
        <Route path="/Plantain" element={<Plantain/>} />
        <Route path="/Potato" element={<Potato />} />
        <Route path="/Shawama" element={<Shawama />} />
        
        </Routes>
    </>
  )
}
