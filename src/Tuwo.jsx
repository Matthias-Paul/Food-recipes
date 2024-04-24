import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "../public/food-data.json"
import {Link} from "react-router-dom"
import shink from "../assets/tuwo-shinkara.jpg"
import masa from "../assets/tuwo-masara.jpg"
import dawa from "../assets/tuwo-dawa.jpg"


export default function Tuwo() {
  
 
  const [isVisible, setIsVisible] =useState(false)
  const [tuwoInfo, setTuwoInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.tuwo

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTuwoInfo(jsonData);
        
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





 

    const toggleRecipeVisibility = (recipeId) => {
      setIsVisible((prevVisibility) => ({
        ...prevVisibility,
        [recipeId]: !prevVisibility[recipeId],
      }));
    };


  return (
    <>
      <div className="container">
      <Link to="/" className="cancel">X</Link>
        <div>
          {tuwoInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
              




              {recipe.image ==="../assets/tuwo-shinkara.jpg" &&(
              <img className="image" src={shink}/>
            )  }  

       {recipe.image ==="../assets/tuwo-masara.jpg" &&(
              <img className="image" src={masa}/>
            )  }                
           
           {recipe.image ==="../assets/tuwo-dawa.jpg" &&(
              <img className="image" src={dawa}/>
            )  } 







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
