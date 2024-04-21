import { useState, useEffect } from "react";
import "./app.css";
import Header from "./Header.jsx";
import App from "./App.jsx";
import Data from "./food-data.json"
import images from "./Asset"

export default function Rice() {
  const [home, setHome] = useState(false);
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










  function cancel() {
    setHome(true);
  }
  if (home) {
    return (
      <>
        <Header />
        <App />
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
      <div className="container">
        <button onClick={cancel} className="cancel">
          X
        </button>

        <div>
          {riceInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
                      <img className="image" src={require(`${recipe.image}`).default} alt={recipe.name} />
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
