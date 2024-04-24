import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "../public/food-data.json"
import {Link} from "react-router-dom"
import cat from "../assets/catfish.jpg"
import chick from "../assets/chicken-soup.jpg"
import goat from "../assets/goat-soup.jpg"
import fish from "../assets/fish-soup.jpg"






export default function PepperSoup() {
  
  
  const [isVisible, setIsVisible] =useState(false)
  const [pepperSoupInfo, setPepperSoupInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.pepperSoup


  useEffect(() => {
    const fetchData = async () => {
      try {
        setPepperSoupInfo(jsonData);
        
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
          {pepperSoupInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
              






              {recipe.image ==="../assets/catfish.jpg" &&(
              <img className="image" src={cat}/>
            )  }                
           
           {recipe.image ==="../assets/chicken-soup.jpg" &&(
              <img className="image" src={chick}/>
            )  }  

       {recipe.image ==="../assets/goat-soup.jpg" &&(
              <img className="image" src={goat}/>
            )  }                
           
           {recipe.image ==="../assets/fish-soup.jpg" &&(
              <img className="image" src={fish}/>
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
