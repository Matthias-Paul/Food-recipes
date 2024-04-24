import {useState, useEffect} from "react"
import Header from "./Header.jsx"
import App from "./App.jsx"
import "./app.css";
import Data from "../public/food-data.json"
import{Link} from "react-router-dom"
import egu from "../assets/egusi-soup.jpg"
import ogbo from "../assets/ogbono-soup.jpg"
import pep from "../assets/pepper-soup.jpg"
import okra from "../assets/okra-soup.jpg"
import afang from "../assets/afang-soup.jpg"
import bit from "../assets/bitter-soup.jpg"
import veg from "../assets/veg-soup.jpg"
import oha from "../assets/oha-soup.jpg"
import banga from "../assets/banga-soup.jpg"
import miyan from "../assets/miyan-soup.jpg"
import eforiro from "../assets/eforiro.jpg"
import taushe from "../assets/taushe.jpg"





export default function Soup() {

  const [isVisible, setIsVisible] =useState(false)
  const [soupInfo, setSoupInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const jsonData = Data.soup


  useEffect(() => {
    const fetchData = async () => {
      try {
        setSoupInfo(jsonData);
        
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
          {soupInfo.map((recipe) => (
            <div className="subcontainer" key={recipe.id}>
              


              {recipe.image ==="../assets/egusi-soup.jpg" &&(
              <img className="image" src={egu}/>
            )  }                
           
           {recipe.image ==="../assets/ogbono-soup.jpg" &&(
              <img className="image" src={ogbo}/>
            )  }  

       {recipe.image ==="../assets/pepper-soup.jpg" &&(
              <img className="image" src={pep}/>
            )  }                
           
           {recipe.image ==="../assets/okra-soup.jpg" &&(
              <img className="image" src={okra}/>
            )  } 

            
{recipe.image ==="../assets/afang-soup.jpg" &&(
              <img className="image" src={afang}/>
            )  }                
           
           {recipe.image ==="../assets/bitter-soup.jpg" &&(
              <img className="image" src={bit}/>
            )  }  

       {recipe.image ==="../assets/veg-soup.jpg" &&(
              <img className="image" src={veg}/>
            )  }                
           
           {recipe.image ==="../assets/oha-soup.jpg" &&(
              <img className="image" src={oha}/>
            )  } 

            
{recipe.image ==="../assets/banga-soup.jpg" &&(
              <img className="image" src={banga}/>
            )  }                
           
           {recipe.image ==="../assets/miyan-soup.jpg" &&(
              <img className="image" src={miyan}/>
            )  }  

       {recipe.image ==="../assets/eforiro.jpg" &&(
              <img className="image" src={eforiro}/>
            )  }                
           
           {recipe.image ==="../assets/taushe.jpg" &&(
              <img className="image" src={taushe}/>
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
