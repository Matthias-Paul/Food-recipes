import { useState, useEffect } from "react";
import "./app.css";
import {Link} from "react-router-dom"
import Header from "./Header.jsx";

import Data from "../public/food-data.json"
import jo from "../assets/jollof.jpg"
import co from "../assets/coconut-rice.jpg"
import fri from "../assets/fried-rice.jpg"
import ofa from "../assets/ofada-rice.jpg"

export default function Rice() {
  
  const [isVisible, setIsVisible] = useState(false);
  const [riceInfo, setRiceInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.rice
 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setRiceInfo(jsonData);
        
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
        <Link to="/"  className="cancel">
          X
        </Link>

        <div>
          {riceInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
                      
            {recipe.image ==="../assets/jollof.jpg" &&(
              <img className="image" src={jo}/>
            )  }                
           
           {recipe.image ==="../assets/coconut-rice.jpg" &&(
              <img className="image" src={co}/>
            )  }  

       {recipe.image ==="../assets/fried-rice.jpg" &&(
              <img className="image" src={fri}/>
            )  }                
           
           {recipe.image ==="../assets/ofada-rice.jpg" &&(
              <img className="image" src={ofa}/>
            )  }                







              <div className="name">Name: {recipe.name}</div>

              <div className="descript">Descriptions: {recipe.description}</div>

              <button
                onClick={() => toggleRecipeVisibility(recipe.id)}
                className="button"
              >
                {isVisible[recipe.id] ? "Hide Recipes" : "View Recipes"}
              </button>
              {isVisible[recipe.id] && (
                <div className="view">
                  <div style={{ display: isVisible ? "block" : "none" }}>
                    <p className="subtopic">INGREDIENTS</p>
                    <ul className="list">
                      {recipe.ingredients.map((ingre, index) => (
                        <li className="sublist" key={index}>
                          {ingre}
                        </li>
                      ))}
                    </ul>
                    <p className="subtopic">INSTRUCTIONS</p>
                    <ul className="list">
                      {recipe.instructions.map((instruct, index) => (
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
