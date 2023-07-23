import React from "react";

import styles from "./Promo.module.css";
import promoProviderDesctop from "../../assets/images/promoImage3.png";
import promoProviderTablet from "../../assets/images/promoProviderTablet.png";
import promoProviderMobile from "../../assets/images/promoProviderMobile.png";
import logoWhite from "../../assets/images/logoWhite.svg";
import Button from "../../components/Button/Button";
import Slider from "../../components/Sliders/Slider";

const Promo = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.content}>
          <h1 className={styles.headerSlogan}>Crafted with love</h1>
          <span className={styles.logoImg}>by</span>
          people
        </div>
        <div className={styles.buttonHolder}>
          <Button className="btn whiteBtn" text={"Go shop now"} />
        </div>
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
          <div className={`${styles.container} container`}>
            <h2 className={styles.heading}>Most popular categories</h2>
            <div className={styles.cards}>
              <Slider />
            </div>
          </div>
        </section>
        <section className={styles.sellersPromo}>
          <div className={`${styles.container} container`}>
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
                  <Button className="btn yellowBtn" text={"Let’s start!"} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={`${styles.container} container`}>
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
