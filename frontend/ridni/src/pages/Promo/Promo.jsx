import styles from "./Promo.module.css";
import globalStyle from "./../../assets/styles/global.module.css";
import promoJewelery from "../../assets/images/promoJewelery.png";
import promoDecor from "../../assets/images/promoDecor.png";
import promoForHome from "../../assets/images/promoForHome.png";
import promoProviderDesctop from "../../assets/images/promoImage3.png";
import promoProviderTablet from "../../assets/images/promoProviderTablet.png";
import promoProviderMobile from "../../assets/images/promoProviderMobile.png";
import logoWhite from "../../assets/images/logoWhite.svg";
import Button from "../../components/Button/Button";

const Promo = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.headerSlogan}>Crafted with love</h1>
        <div>
          <span className={styles.logoImg}>by</span>
          people
        </div>
        <Button
          className={`btn-basic ${styles.whiteBtn}`}
          text={"Go shop now"}
        />
      </header>
      <main>
        <section className={styles.sectionBenefits}>
          <h2 className={styles.heading}>Why you should join us?</h2>
          <div className={styles.benefits}>
            <div className={`${styles.benefitsItem} ${styles.benefitsItem1}`}>
              Keeping up <br />
              with trends
            </div>
            <div className={`${styles.benefitsItem} ${styles.benefitsItem2}`}>
              Global customers
            </div>
            <div className={`${styles.benefitsItem} ${styles.benefitsItem3}`}>
              Creative products
            </div>
            <div className={`${styles.benefitsItem} ${styles.benefitsItem4}`}>
              Verified sellers
            </div>
          </div>
        </section>
        <section className={styles.popularCategoryPromo}>
          <div className={`${styles.container} ${globalStyle.container}`}>
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
                  <Button className={styles.yellow} text={"Want it!"} />
                </div>
              </div>
              <div className={styles.cardItem}>
                <div className={styles.imageHolder}>
                  <img src={promoDecor} alt="pictures" />
                </div>
                <h3 className={styles.itemHeading}>Decor</h3>
                <div className={styles.textHolder}>
                  <p className={styles.paragraph}>
                    Find one-of-a-kind handmade decor pieces that bring charm
                    and personality to any room at your home
                  </p>
                </div>
                <div className={styles.buttonHolder}>
                  <Button
                    className={styles.yellow}
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
                  <Button className={styles.yellow} text={"Want it!"} />
                </div>
              </div>
            </div>
            <div className={styles.pagination}>
              <span
                className={`${styles.paginationItem} ${styles.paginationItemActive}`}
              ></span>
              <span className={`${styles.paginationItem}`}></span>
            </div>
          </div>
        </section>
        <section className={styles.sellersPromo}>
          <div className={`${styles.container} ${globalStyle.container}`}>
            <h2 className={styles.heading}>Become a creativity provider</h2>
            <div className={styles.info}>
              <div className={styles.imageHolder}>
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={promoProviderMobile}
                  />

                  <source
                    media="(min-width: 769px) and (max-width: 1024px)"
                    srcSet={promoProviderTablet}
                  />

                  <img
                    src={promoProviderDesctop}
                    alt="pictures"
                    className="responsiveImage"
                  />
                </picture>
              </div>
              <div className={styles.content}>
                <div className={styles.textHolder}>
                  <p>
                    Start to sell your crafts and grow your hobby as business
                    too
                  </p>
                </div>
                <div className={styles.buttonHolder}>
                  <Button className={styles.yellow} text={"Let’s start!"} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={`${styles.container} ${globalStyle.container}`}>
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
