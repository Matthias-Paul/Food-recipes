import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "../public/food-data.json"
import {Link} from "react-router-dom"
import fry from "../assets/fried-plantain.jpg"
import boli from "../assets/boli.jpg"
import po from "../assets/plantain-porridge.jpg"
import frit from "../assets/plantain-fritters.jpg"
import chip from "../assets/plantain-chip.jpg"
import pan from "../assets/plantain-pancake.jpg"
import pot from "../assets/plantain-pottage.jpg"






export default function Plantain() {
  
  const [isVisible, setIsVisible] =useState(false)
  const [plantainInfo, setPlantainInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.plantain


  useEffect(() => {
    const fetchData = async () => {
      try {
        setPlantainInfo(jsonData);
        
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
    <Header/>
      <div className="container">
      <Link to="/" className="cancel">X</Link>
        <div>
          {plantainInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
             




             {recipe.image ==="../assets/fried-plantain.jpg" &&(
              <img className="image" src={fry}/>
            )  }                
           
           {recipe.image ==="../assets/boli.jpg" &&(
              <img className="image" src={boli}/>
            )  }  

       {recipe.image ==="../assets/plantain-porridge.jpg" &&(
              <img className="image" src={po}/>
            )  }                
           
           {recipe.image ==="../assets/plantain-fritters.jpg" &&(
              <img className="image" src={frit}/>
            )  } 


{recipe.image ==="../assets/plantain-chip.jpg" &&(
              <img className="image" src={chip}/>
            )  }                
           
           {recipe.image ==="../assets/plantain-pancake.jpg" &&(
              <img className="image" src={pan}/>
            )  }  

       {recipe.image ==="../assets/plantain-pottage.jpg" &&(
              <img className="image" src={pot}/>
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
