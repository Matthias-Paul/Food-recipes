import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "../public/food-data.json"
import {Link} from 'react-router-dom'
import por from "../assets/beans-porridge.jpg"
import moi from "../assets/moimoi.jpg"
import cake from "../assets/bean-cake.jpg"
import stew from "../assets/bean-stew.jpg"


export default function Beans() {
  
  
  const [isVisible, setIsVisible] =useState(false)
  const [beansInfo, setBeansInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.beans

  useEffect(() => {
    const fetchData = async () => {
      try {
        setBeansInfo(jsonData);
        
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
          
          {beansInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
              





              {recipe.image ==="../assets/beans-porridge.jpg" &&(
              <img className="image" src={por}/>
            )  }                
           
           {recipe.image ==="../assets/moimoi.jpg" &&(
              <img className="image" src={moi}/>
            )  }  

       {recipe.image ==="../assets/bean-cake.jpg" &&(
              <img className="image" src={cake}/>
            )  }                
           
           {recipe.image ==="../assets/bean-stew.jpg" &&(
              <img className="image" src={stew}/>
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
