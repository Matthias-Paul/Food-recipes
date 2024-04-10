import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "./food-data.json"

export default function Potato() {
  const [home, setHome] = useState(false)
  const [isVisible, setIsVisible] =useState(false)
  const [potatoInfo, setPotatoInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.potato





  useEffect(() => {
    const fetchData = async () => {
      try {
        setPotatoInfo(jsonData);
        
      } catch (error) {
        console.error("error fetching data:", error);
      }
    };
    fetchData();
  },[jsonData]);

useEffect (()=>{
const timeout = setTimeout(()=>{
setLoading(false)

}, 1200)
return ()=> clearTimeout(timeout)

},[])
if (loading){
  return (
    <>
    <div className="help" ></div>
    <div className="loading"></div>
    </>
  )
}




  function cancel(){
    setHome(true)
    }
    if (home){
      return(
        <>
        <Header/>
        <App/>
        </>
      )
    }
    const toggleRecipeVisibility = (recipeId) => {
      setIsVisible((prevVisibility) => ({
        ...prevVisibility,
        [recipeId]: !prevVisibility[recipeId],
      }));
    };
  
  return (
    <>
      <div className="container">
      <button onClick={cancel} className="cancel">X</button>
        <div>
          {potatoInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
              <img className="image" src={recipe.image} />
              <div className="name">Name: {recipe.name}</div>

              <div className="descript">
                Descriptions: {recipe.description}
              </div>


              <button
                onClick={() => toggleRecipeVisibility(recipe.id)}
                className="button"
              >
                {isVisible[recipe.id] ? "Hide Recipes" : "View Recipes"}
              </button>
              {isVisible[recipe.id] && (


<div className="view">
<div style={{display: isVisible?"block":"none"}}>
  <p className="subtopic">INGREDIENTS</p>
<ul className="list">
  {recipe.ingredients.map((ingre, index)=>(
    <li className="sublist" key={index}>
      {ingre}
    </li>

    
  ))}
</ul>
<p className="subtopic">INSTRUCTIONS</p>
<ul className="list">
  {recipe.instructions.map((instruct, index)=>(
    <li className="sublist" key={index}>
      {instruct}
    </li>

    
  ))}
</ul>


</div>
</div>

              )}



              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
