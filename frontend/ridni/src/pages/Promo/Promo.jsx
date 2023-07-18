import styles from "./Promo.module.css";
import promoJewelery from "../../assets/images/promoJewelery.png";
import promoDecor from "../../assets/images/promoDecor.png";
import promoForHome from "../../assets/images/promoForHome.png";
import promoImage3 from "../../assets/images/promoImage3.png";
import logoWhite from "../../assets/images/logoWhite.svg";
import Button from "../../components/Button/Button";

const Promo = () => {
  return (
    <div>
      <section className={styles.popularCategoryPromo}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Most popular categories</h2>
          <div className={styles.cards}>
            <div className={styles.cardItem}>
              <div className={styles.imageHolder}>
                <img src={promoJewelery} alt="pictures" />
              </div>
              <h3 className={styles.itemHeading}>Jewelery and accessoires</h3>
              <div className={styles.textHolder}>
                <p className={styles.paragraph}>
                  Adorn yourself with exquisite handmade jewelry and
                  accessories, crafted by talented artisans with love and soul
                </p>
              </div>
              <div className={styles.buttonHolder}>
                <Button
                  className={`${styles.btn} ${styles.yellow}`}
                  text={"Want it!"}
                />
              </div>
            </div>
            <div className={styles.cardItem}>
              <div className={styles.imageHolder}>
                <img src={promoDecor} alt="pictures" />
              </div>
              <h3 className={styles.itemHeading}>Decor</h3>
              <div className={styles.textHolder}>
                <p className={styles.paragraph}>
                  Find one-of-a-kind handmade decor pieces that bring charm and
                  personality to any room at your home
                </p>
              </div>
              <div className={styles.buttonHolder}>
                <Button
                  className={`${styles.btn} ${styles.yellow}`}
                  text={"Want it!"}
                  onClick={() => {}}
                />
              </div>
            </div>
            <div className={styles.cardItem}>
              <div className={styles.imageHolder}>
                <img src={promoForHome} alt="pictures" />
              </div>
              <h3 className={styles.itemHeading}>For home</h3>
              <div className={styles.textHolder}>
                <p className={styles.paragraph}>
                  Discover andmade treasures to elevate your living space with
                  unique decor, textiles, ceramics, and furniture
                </p>
              </div>
              <div className={styles.buttonHolder}>
                <Button
                  className={`${styles.btn} ${styles.yellow}`}
                  text={"Want it!"}
                />
              </div>
            </div>
          </div>
          <div className={styles.pagination}>
            <span>0</span>
          </div>
        </div>
      </section>
      <section className={styles.sellersPromo}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Become a creativity provider</h2>
          <div className={styles.content}>
            <div className={styles.imageHolder}>
              <img src={promoImage3} alt="pictures" />
            </div>
            <div className={styles.description}>
              <span>
                Start to sell your crafts and grow your hobby as business too
              </span>
              <div className={styles.buttonHolder}>
                <Button
                  className={`${styles.btn} ${styles.yellow}`}
                  text={"Let’s start!"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerLogo}>
            <img src={logoWhite} alt="logotype" />
          </div>
          <div className={styles.servises}>
            <span>ridni.com.ua</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Promo;
