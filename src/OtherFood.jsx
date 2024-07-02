import {Routes, Route} from "react-router-dom"
import Soup from "./Soup"
import Tuwo from "./Tuwo"
import Yam from "./Yam"
import Beans from "./Beans"
import Bread from "./Bread"
export default function OtherFood() {
  return (
    <>
    <Routes>
       <Route path="/Soup" element={<Soup />} />
        <Route path="/Tuwo" element={<Tuwo/>} />
        <Route path="/Yam" element={<Yam />} />
        <Route path="/Beans" element={<Beans />} />
        <Route path="/Bread" element={<Bread />} />
     
      </Routes>
    </>
  )
}
