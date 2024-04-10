
import styles from "./foodtype.module.css";
import rice from "../Asset/rice.jpg";
import amala from "../Asset/ewedu-amala.jpg";
import yam from "../Asset/yam-egg.jpeg";
import potato from "../Asset/potato-egg.jpg";
import beans from "../Asset/beans-porridge.jpg";
import pasta from "../Asset/pasta-stir.jpg";

import tuwo from "../Asset/tuwo-dawa.jpg";
import pepperSoup from "../Asset/fish-soup.jpg";
import soup from "../Asset/oha-soup.jpg";
import pizza from "../Asset/spicy-pizza.jpg";
import bread from "../Asset/agege.jpg";
import plantain from "../Asset/plantain-pancake.jpg";
import indomie from "../Asset/indo-salad.jpg";
import shawama from "../Asset/chick-shawa.jpg";


export default function FoodType({change, changeAmala, changeYam,
changePotato, changeBeans, changePasta, changeTuwo, changePepperSoup,
changeSoup, changeShawama, changePizza, changeBread, changePlantain,
changeIndomie

}) {
  
  return (
    <>
      <div className={styles.foodcontainer}>
        <div onClick ={change} className={styles.food}>
          <img className={styles.image} src={rice} alt="food image" />
          <div className={styles.text}>Rice</div>
          
          <div className={styles.number}>
            Four different rice recipes available!
          </div>
        </div>

        <div onClick={changeAmala} className={styles.food}>
          <img className={styles.image} src={amala} alt="food image" />
          <div className={styles.text}>Amala</div>
          <div className={styles.number}>
            Four different amala recipes available!
          </div>
        </div>

        <div onClick={changeYam}  className={styles.food}>
          <img className={styles.image} src={yam} alt="food image" />
          <div className={styles.text}>Yam</div>
          <div className={styles.number}>
            Six different yam recipes available!
          </div>
        </div>

        <div onClick={changePotato} className={styles.food}>
          <img className={styles.image} src={potato} alt="food image" />
          <div className={styles.text}>Potato</div>
          <div className={styles.number}>
            Five different potato recipes available!
          </div>
        </div>

        <div onClick={changeBeans} className={styles.food}>
          <img className={styles.image} src={beans} alt="food image" />
          <div className={styles.text}>Beans</div>
          <div className={styles.number}>
            Four different beans recipes available!
          </div>
        </div>

        <div onClick={changePasta} className={styles.food}>
          <img className={styles.image} src={pasta} alt="food image" />
          <div className={styles.text}>Pasta</div>
          <div className={styles.number}>
            Four different pasta recipes available!
          </div>
        </div>

        <div onClick={changeTuwo}className={styles.food}>
          <img className={styles.image} src={tuwo} alt="food image" />
          <div className={styles.text}>Tuwo</div>
          <div className={styles.number}>
            Three different tuwo recipes available!
          </div>
        </div>

        <div onClick={changePepperSoup}className={styles.food}>
          <img className={styles.image} src={pepperSoup} alt="food image" />
          <div className={styles.text}>Pepper Soup</div>
          <div className={styles.number}>
            Four different pepper soup recipes available!
          </div>
        </div>

        <div onClick={changeSoup} className={styles.food}>
          <img className={styles.image} src={soup} alt="food image" />
          <div className={styles.text}>Soup</div>
          <div className={styles.number}>
            Twelve different soup recipes available!
          </div>
        </div>
 
 
        <div onClick={changePlantain} className={styles.food}>
         <img className={styles.image}
             src={plantain} alt="food image" />
          <div className={styles.text}>Plantain</div>
          <div className={styles.number}>
            Seven different plantain recipes available!
          </div>
        </div>

        <div onClick={changeIndomie} className={styles.food}>
         <img className={styles.image}
             src={indomie} alt="food image" />
          <div className={styles.text}>Indomie</div>
          <div className={styles.number}>
            Seven different indomie recipes available!
          </div>
        </div>

        <div onClick={changeShawama} className={styles.food}>
         <img className={styles.image}
             src={shawama} alt="food image" />
          <div className={styles.text}>Shawama</div>
          <div className={styles.number}>
            Four different shawama recipes available!
          </div>
        </div>

        <div onClick={changeBread} className={styles.food}>
         <img className={styles.image}
             src={bread} alt="food image" />
          <div className={styles.text}>Bread</div>
          <div className={styles.number}>
             Eight different bread recipes available!
          </div>
        </div>


        <div onClick={changePizza} className={styles.food}>
         <img className={styles.image}
             src={pizza} alt="food image" />
          <div className={styles.text}>Pizza</div>
          <div className={styles.number}>
             Three different pizza recipes available!
          </div>
        </div>

      </div>
    </>
  );
}
