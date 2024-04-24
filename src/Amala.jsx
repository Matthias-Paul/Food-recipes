import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import App from "./App.jsx";
import "./app.css";
import Data from "../public/food-data.json";
import {Link} from "react-router-dom"
import ewe from "../assets/ewedu-amala.jpg"
import gbe from "../assets/gbegiri-amala.jpg"
import ogbo from "../assets/ogbono-amala.jpg"
import egu from "../assets/egusi-amala.jpg"







export default function Amala() {
  
  const [isVisible, setIsVisible] = useState({ 5: false });
  const [amalaInfo, setAmalaInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const jsonData = Data.amala;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAmalaInfo(jsonData);
      } catch (error) {
        console.error("error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [jsonData]);

  if (loading) {
    return (
      <>
        <div className="help"></div>
        <div className="loading"></div>
      </>
    );
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
        <Link to="/" className="cancel">
          X
        </Link>

        <div>
          {amalaInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>





                
{recipe.image ==="../assets/ewedu-amala.jpg" &&(
              <img className="image" src={ewe}/>
            )  }                
           
           {recipe.image ==="../assets/gbegiri-amala.jpg" &&(
              <img className="image" src={gbe}/>
            )  }  

       {recipe.image ==="../assets/ogbono-amala.jpg" &&(
              <img className="image" src={ogbo}/>
            )  }                
           
           {recipe.image ==="../assets/egusi-amala.jpg" &&(
              <img className="image" src={egu}/>
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
