import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "../public/food-data.json"

export default function Shawama() {
  const [home, setHome] = useState(false)
  const [isVisible, setIsVisible] =useState(false)
  const [shawamaInfo, setShawamaInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.shawama

  useEffect(() => {
    const fetchData = async () => {
      try {
        setShawamaInfo(jsonData);
        
      } catch (error) {
        console.error("error fetching data:", error);
      }
      setLoading(false)
    };
    fetchData();
  },[jsonData]);


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
          {shawamaInfo.map((recipe) => (
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
