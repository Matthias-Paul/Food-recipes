import {useState, useEffect} from "react"
import "./app.css"
import Header from "./Header.jsx"
import FoodType from "./FoodType.jsx"
import Rice from "./Rice.jsx"
import Amala from "./Amala.jsx"
import Yam from "./Yam.jsx"
import Potato from "./Potato.jsx"
import Beans from "./Beans.jsx"
import Pasta from "./Pasta.jsx"
import Tuwo from "./Tuwo.jsx"
import PepperSoup from "./PepperSoup.jsx"
import Soup from "./Soup.jsx"
import Shawama from "./Shawama.jsx"
import Pizza from "./Pizza.jsx"
import Bread from "./Bread.jsx"
import Plantain from "./Plantain.jsx"
import Indomie from "./Indomie.jsx"




export default function App(){

const [rice, setRice] = useState(false)
const [amala, setAmala] = useState(false)
const [yam, setYam] = useState(false)
const [potato, setPotato] = useState(false)
const [beans, setBeans] = useState(false)
const [pasta, setPasta] = useState(false)
const [tuwo, setTuwo] = useState(false)
const [pepperSoup, setPepperSoup] = useState(false)
const [soup, setSoup] = useState(false)
const [shawama, setShawama] = useState(false)
const [pizza, setPizza] = useState(false)
const [bread, setBread] = useState(false)
const [plantain, setPlantain] = useState(false)
const [indomie, setIndomie] = useState(false)
const [loading, setLoading] = useState(true)

useEffect (()=>{
  const timeout = setTimeout(()=>{
  setLoading(false)
  
  }, 2000)
  return ()=> clearTimeout(timeout)
  
  },[])
  if (loading){
    return (
      <>
      <Header/>
      <div className="help" ></div>
      <div className="loading"></div>
      
  
      </>
    )
    
    
  }
  
  
  
  
  




const change =()=>{
  setRice(true)
}
const changeAmala =()=>{
  setAmala(true)
}
const changeYam =()=>{
  setYam(true)
}
const changePotato =()=>{
  setPotato(true)
}
const changeBeans=()=>{
  setBeans(true)
}
const changePasta =()=>{
  setPasta(true)
}
const changeTuwo =()=>{
  setTuwo(true)
}
const changePepperSoup=()=>{
  setPepperSoup(true)
}
const changeSoup =()=>{
  setSoup(true)
}
const changeShawama =()=>{
  setShawama(true)
}
const changePizza=()=>{
  setPizza(true)
}
const changeBread =()=>{
  setBread(true)
}
const changePlantain=()=>{
  setPlantain(true)
}
const changeIndomie =()=>{
  setIndomie(true)
}




if (rice){
  return(
    <>
  <Header/>
  <Rice/>
  </>
  )
}
else if(amala){
return (
  <>
<Header/>
<Amala/>
</>
)
}
else if(yam){
  return (
    <>
  <Header/>
  <Yam/>
  </>
  )
  }
  else if(potato){
    return (
      <>
    <Header/>
    <Potato/>
    </>
    )
    }
    else if(beans){
      return (
        <>
      <Header/>
      <Beans/>
      </>
      )
      }
      else if(pasta){
        return (
          <>
        <Header/>
        <Pasta/>
        </>
        )
        }
        else if(tuwo){
          return (
            <>
          <Header/>
          <Tuwo/>
          </>
          )
          }
          else if(pepperSoup){
            return (
              <>
            <Header/>
            <PepperSoup/>
            </>
            )
            }
            else if(soup){
              return (
                <>
              <Header/>
              <Soup/>
              </>
              )
              }

              else if(shawama){
                return (
                  <>
                <Header/>
                <Shawama/>
                </>
                )
                }
                else if(pizza){
                  return (
                    <>
                  <Header/>
                  <Pizza/>
                  </>
                  )
                  }
                  else if(bread){
                    return (
                      <>
                    <Header/>
                    <Bread/>
                    </>
                    )
                    }
                    else if(plantain){
                      return (
                        <>
                      <Header/>
                      <Plantain/>
                      </>
                      )
                      }
                      else if(indomie){
                        return (
                          <>
                        <Header/>
                        <Indomie/>
                        </>
                        )
                        }





  return(
    <>
  <Header/>
  <FoodType change={change} 
  changeAmala={changeAmala} changeYam={changeYam}
  changePotato={changePotato} 
  changeBeans={changeBeans} changePasta={changePasta}
  changeTuwo={changeTuwo} changePepperSoup={changePepperSoup}
  changeSoup={changeSoup} 
  changeShawama={changeShawama} changePizza={changePizza}
  changeBread={changeBread} 
  changePlantain={changePlantain} changeIndomie={changeIndomie}
  />
  
    
    
    
    
    
    </>
  )
}