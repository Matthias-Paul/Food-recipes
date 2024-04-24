import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "../public/food-data.json"
import {Link} from "react-router-dom"
import agege from "../assets/agege.jpg"
import potato from "../assets/potato-bread.jpg"
import coco from "../assets/coconut-bread.jpg"
import chin from "../assets/chin-bread.jpg"
import bana from "../assets/banana-bread.jpg"
import corn from "../assets/corn-bread.jpg"
import co from "../assets/coconu-bread.jpg"
import wheat from "../assets/wheat-bread.jpg"













export default function Bread() {

  const [isVisible, setIsVisible] =useState(false)
  const [breadInfo, setBreadInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.bread

  useEffect(() => {
    const fetchData = async () => {
      try {
        setBreadInfo(jsonData);
        
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
          {breadInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
              





              {recipe.image ==="../assets/agege.jpg" &&(
              <img className="image" src={agege}/>
            )  }                
           
           {recipe.image ==="../assets/potato-bread.jpg" &&(
              <img className="image" src={potato}/>
            )  }  

       {recipe.image ==="../assets/coconut-bread.jpg" &&(
              <img className="image" src={coco}/>
            )  }                
           
           {recipe.image ==="../assets/chin-bread.jpg" &&(
              <img className="image" src={chin}/>
            )  } 


{recipe.image ==="../assets/banana-bread.jpg" &&(
              <img className="image" src={bana}/>
            )  }                
           
           {recipe.image ==="../assets/corn-bread.jpg" &&(
              <img className="image" src={corn}/>
            )  }  

       {recipe.image ==="../assets/coconu-bread.jpg" &&(
              <img className="image" src={co}/>
            )  }                
           
           {recipe.image ==="../assets/wheat-bread.jpg" &&(
              <img className="image" src={wheat}/>
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
