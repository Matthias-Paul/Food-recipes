
import styles from "./foodtype.module.css";
import rice from "../Asset/rice.jpg";
import amala from "../Asset/ewedu-amala.jpg";
import yam from "../Asset/yam-egg.jpeg";
import potato from "../Asset/potato-egg.jpg";
import beans from "../Asset/beans-porridge.jpg";
import pasta from "../Asset/pasta-stir.jpg";
import Header from "./Header"
import tuwo from "../Asset/tuwo-dawa.jpg";
import pepperSoup from "../Asset/fish-soup.jpg";
import soup from "../Asset/oha-soup.jpg";
import pizza from "../Asset/spicy-pizza.jpg";
import bread from "../Asset/agege.jpg";
import plantain from "../Asset/plantain-pancake.jpg";
import indomie from "../Asset/indo-salad.jpg";
import shawama from "../Asset/chick-shawa.jpg";
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
        <Link to="rice" className={styles.food}>
          <img className={styles.image} src={rice}  />
          <div className={styles.text}>Rice</div>
          
          <div className={styles.number}>
            Four different rice recipes available!
          </div>
        </Link>

        <div  className={styles.food}>
          <img className={styles.image} src={amala} />
          <div className={styles.text}>Amala</div>
          <div className={styles.number}>
            Four different amala recipes available!
          </div>
        </div>

        <div  className={styles.food}>
          <img className={styles.image} src={yam} />
          <div className={styles.text}>Yam</div>
          <div className={styles.number}>
            Six different yam recipes available!
          </div>
        </div>

        <div className={styles.food}>
          <img className={styles.image} src={potato}  />
          <div className={styles.text}>Potato</div>
          <div className={styles.number}>
            Five different potato recipes available!
          </div>
        </div>

        <div className={styles.food}>
          <img className={styles.image} src={beans}  />
          <div className={styles.text}>Beans</div>
          <div className={styles.number}>
            Four different beans recipes available!
          </div>
        </div>

        <div className={styles.food}>
          <img className={styles.image} src={pasta}  />
          <div className={styles.text}>Pasta</div>
          <div className={styles.number}>
            Four different pasta recipes available!
          </div>
        </div>

        <div className={styles.food}>
          <img className={styles.image} src={tuwo} />
          <div className={styles.text}>Tuwo</div>
          <div className={styles.number}>
            Three different tuwo recipes available!
          </div>
        </div>

        <div className={styles.food}>
          <img className={styles.image} src={pepperSoup}  />
          <div className={styles.text}>Pepper Soup</div>
          <div className={styles.number}>
            Four different pepper soup recipes available!
          </div>
        </div>

        <div className={styles.food}>
          <img className={styles.image} src={soup}  />
          <div className={styles.text}>Soup</div>
          <div className={styles.number}>
            Twelve different soup recipes available!
          </div>
        </div>
 
 
        <div  className={styles.food}>
         <img className={styles.image}
             src={plantain}  />
          <div className={styles.text}>Plantain</div>
          <div className={styles.number}>
            Seven different plantain recipes available!
          </div>
        </div>

        <div className={styles.food}>
         <img className={styles.image}
             src={indomie}  />
          <div className={styles.text}>Indomie</div>
          <div className={styles.number}>
            Seven different indomie recipes available!
          </div>
        </div>

        <div className={styles.food}>
         <img className={styles.image}
             src={shawama} />
          <div className={styles.text}>Shawama</div>
          <div className={styles.number}>
            Four different shawama recipes available!
          </div>
        </div>

        <div  className={styles.food}>
         <img className={styles.image}
             src={bread} />
          <div className={styles.text}>Bread</div>
          <div className={styles.number}>
             Eight different bread recipes available!
          </div>
        </div>


        <div className={styles.food}>
         <img className={styles.image}
             src={pizza}  />
          <div className={styles.text}>Pizza</div>
          <div className={styles.number}>
             Three different pizza recipes available!
          </div>
        </div>

      </div>
    </>
  );
}
