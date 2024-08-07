
import styles from "./foodtype.module.css";
import rice from "../assets/rice.jpg";
import amala from "../assets/ewedu-amala.jpg";
import yam from "../assets/yam-porridge.jpeg";
import potato from "../assets/potato-porridge.jpeg";
import beans from "../assets/beans-porridge.jpg";
import pasta from "../assets/pasta-salad.jpg";
import Header from "./Header"
import tuwo from "../assets/tuwo-dawa.jpg";
import pepperSoup from "../assets/fish-soup.jpg";
import soup from "../assets/oha-soup.jpg";
import pizza from "../assets/spicy-pizza.jpg";
import bread from "../assets/potato-bread.jpg";
import plantain from "../assets/plantain-pancake.jpg";
import indomie from "../assets/indo-salad.jpg";
import shawama from "../assets/chick-shawa.jpg";
import {Link} from "react-router-dom"


export default function FoodType() {
  
  return (
    <>
    <Header/>
      <div className={styles.foodcontainer}>
        <div className={styles.hero}>
          <h3 className={styles.topic}>Welcome To SoloChef</h3>
          <p className={styles.paragraph}>we provide  recipes and cooking tips specifically designed
            for individuals who are cooking for themselves, friends or family.
          </p>
        </div>
        
        <h3>Recipes By Category</h3>
        <div className={styles.foodie} > 
        <Link to="/Rice" className={styles.food}>
          <img className={styles.image} src={rice}  />
          <div className={styles.text}>Rice</div>
          
          <div className={styles.number}>
            Four different rice recipes available!
          </div>
        </Link>

        <Link to="/Amala"  className={styles.food}>
          <img className={styles.image} src={amala} />
          <div className={styles.text}>Amala</div>
          <div className={styles.number}>
            Four different amala recipes available!
          </div>
        </Link>

        <Link to ="/Yam"  className={styles.food}>
          <img className={styles.image} src={yam} />
          <div className={styles.text}>Yam</div>
          <div className={styles.number}>
            Six different yam recipes available!
          </div>
        </Link>

        <Link to="/Potato" className={styles.food}>
          <img className={styles.image} src={potato}  />
          <div className={styles.text}>Potato</div>
          <div className={styles.number}>
            Five different potato recipes available!
          </div>
        </Link>

        <Link to="/Beans" className={styles.food}>
          <img className={styles.image} src={beans}  />
          <div className={styles.text}>Beans</div>
          <div className={styles.number}>
            Four different beans recipes available!
          </div>
        </Link>

        <Link to="/Pasta" className={styles.food}>
          <img className={styles.image} src={pasta}  />
          <div className={styles.text}>Pasta</div>
          <div className={styles.number}>
            Four different pasta recipes available!
          </div>
        </Link>

        <Link to="/Tuwo" className={styles.food}>
          <img className={styles.image} src={tuwo} />
          <div className={styles.text}>Tuwo</div>
          <div className={styles.number}>
            Three different tuwo recipes available!
          </div>
        </Link>

        <Link to="/PepperSoup" className={styles.food}>
          <img className={styles.image} src={pepperSoup}  />
          <div className={styles.text}>Pepper Soup</div>
          <div className={styles.number}>
            Four different pepper soup recipes available!
          </div>
        </Link>

        <Link to="Soup" className={styles.food}>
          <img className={styles.image} src={soup}  />
          <div className={styles.text}>Soup</div>
          <div className={styles.number}>
            Twelve different soup recipes available!
          </div>
        </Link>
 
 
        <Link to="/Plantain"  className={styles.food}>
         <img className={styles.image}
             src={plantain}  />
          <div className={styles.text}>Plantain</div>
          <div className={styles.number}>
            Seven different plantain recipes available!
          </div>
        </Link>

        <Link to="/Indomie" className={styles.food}>
         <img className={styles.image}
             src={indomie}  />
          <div className={styles.text}>Indomie</div>
          <div className={styles.number}>
            Seven different indomie recipes available!
          </div>
        </Link>

        <Link to="/Shawama" className={styles.food}>
         <img className={styles.image}
             src={shawama} />
          <div className={styles.text}>Shawama</div>
          <div className={styles.number}>
            Four different shawama recipes available!
          </div>
        </Link>

        <Link to="/Bread"  className={styles.food}>
         <img className={styles.image}
             src={bread} />
          <div className={styles.text}>Bread</div>
          <div className={styles.number}>
             Eight different bread recipes available!
          </div>
        </Link>


        <Link to="/Pizza" className={styles.food}>
         <img className={styles.image}
             src={pizza}  />
          <div className={styles.text}>Pizza</div>
          <div className={styles.number}>
             Three different pizza recipes available!
          </div>
        </Link>
        </div>
      </div>
    </>
  );
}
