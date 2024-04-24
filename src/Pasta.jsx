import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "../public/food-data.json"
import {Link} from "react-router-dom"
import spag from "../assets/spag-jollof.jpg"
import salad from "../assets/pasta-salad.jpg"
import mac from "../assets/mac-cheese.jpg"
import stir from "../assets/pasta-stir.jpg"





export default function Pasta() {
  
  const [isVisible, setIsVisible] =useState(false)
  const [pastaInfo, setPastaInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.pasta

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPastaInfo(jsonData);
        
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
          {pastaInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
              




              {recipe.image ==="../assets/spag-jollof.jpg" &&(
              <img className="image" src={spag}/>
            )  }                
           
           {recipe.image ==="../assets/pasta-salad.jpg" &&(
              <img className="image" src={salad}/>
            )  }  

       {recipe.image ==="../assets/mac-cheese.jpg" &&(
              <img className="image" src={mac}/>
            )  }                
           
           {recipe.image ==="../assets/pasta-stir.jpg" &&(
              <img className="image" src={stir}/>
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
