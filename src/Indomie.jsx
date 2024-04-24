import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "../public/food-data.json"
import {Link} from "react-router-dom"

import stir from "../assets/indo-stir.jpg"
import stew from "../assets/indo-soup.jpg"
import fried from "../assets/indo-fried.jpg"
import pan from "../assets/Indo pancake.jpg"
import pizza from "../assets/indo-pizza.jpg"
import veg from "../assets/indo-veg.jpg"
import salad from "../assets/indo-salad.jpg"





export default function Indomie() {
 
  const [isVisible, setIsVisible] =useState(false)
  const [indomieInfo, setIndomieInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.indomie

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIndomieInfo(jsonData);
        
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
          {indomieInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
              





              {recipe.image ==="../assets/indo-stir.jpg" &&(
              <img className="image" src={stir}/>
            )  }                
           
           {recipe.image ==="../assets/indo-soup.jpg" &&(
              <img className="image" src={stew}/>
            )  }  

       {recipe.image ==="../assets/indo-fried.jpg" &&(
              <img className="image" src={fried}/>
            )  }                
           
           {recipe.image ==="../assets/Indo pancake.jpg" &&(
              <img className="image" src={pan}/>
            )  } 


{recipe.image ==="../assets/indo-pizza.jpg" &&(
              <img className="image" src={pizza}/>
            )  }                
           
           {recipe.image ==="../assets/indo-veg.jpg" &&(
              <img className="image" src={veg}/>
            )  }  

       {recipe.image ==="../assets/indo-salad.jpg" &&(
              <img className="image" src={salad}/>
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
