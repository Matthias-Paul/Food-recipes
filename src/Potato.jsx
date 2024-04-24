import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "../public/food-data.json"
import {Link} from "react-router-dom"
import por from "../assets/potato-porridge.jpeg"
import pot from "../assets/potato-pottage.jpeg"
import egg from "../assets/potato-egg.jpg"
import cro from "../assets/potato-croquette.jpg"
import clas from "../assets/classic-potato.jpg"





export default function Potato() {
  const [isVisible, setIsVisible] =useState(false)
  const [potatoInfo, setPotatoInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.potato





  useEffect(() => {
    const fetchData = async () => {
      try {
        setPotatoInfo(jsonData);
        
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
          {potatoInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
              





                
              {recipe.image ==="../assets/potato-porridge.jpeg" &&(
              <img className="image" src={por}/>
            )  }                
           
           {recipe.image ==="../assets/potato-pottage.jpeg" &&(
              <img className="image" src={pot}/>
            )  }  

       {recipe.image ==="../assets/potato-egg.jpg" &&(
              <img className="image" src={egg}/>
            )  }                
           
           {recipe.image ==="../assets/potato-croquette.jpg" &&(
              <img className="image" src={cro}/>
            )  }  

  {recipe.image ==="../assets/classic-potato.jpg" &&(
              <img className="image" src={clas}/>
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
