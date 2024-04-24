import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "../public/food-data.json"
import {Link} from "react-router-dom"
import suya from "../assets/suya-pizza.jpg"
import plantain from "../assets/plantain-pizza.jpg"
import spicy from "../assets/spicy-pizza.jpg"





export default function Pizza() {
  
  const [isVisible, setIsVisible] =useState(false)
  const [pizzaInfo, setPizzaInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.pizza

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPizzaInfo(jsonData);
        
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
          {pizzaInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
              





              {recipe.image ==="../assets/suya-pizza.jpg" &&(
              <img className="image" src={suya}/>
            )  }                
           
           {recipe.image ==="../assets/plantain-pizza.jpg" &&(
              <img className="image" src={plantain}/>
            )  }  

       {recipe.image ==="../assets/spicy-pizza.jpg" &&(
              <img className="image" src={spicy}/>
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
