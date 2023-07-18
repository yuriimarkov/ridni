import "./App.css";

import promoImage1 from "./assets/images/promoImage1.png";
import promoImage2 from "./assets/images/promoImage2.png";
import logoColor from "./assets/images/logoColor.svg";

const App = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={promoImage1} alt="images" />
          </div>
          <div>
            <img src={promoImage2} alt="images" />
          </div>
        </div>
        <div>
          <h1>Crafted with love</h1>
          <div>
            <span>by</span>
            <img src={logoColor} alt="images" />
            <span>people</span>
          </div>
        </div>
        <div>
          <button>Go shop now</button>
        </div>
      </div>
      <div>
        <h2>Why you should join us?</h2>
        <div>
          <div>
            <i></i>
            <span>Keeping up with trends</span>
          </div>
          <div>
            <i></i>
            <span>Global customers </span>
          </div>
          <div>
            <i></i>
            <span>Creative products</span>
          </div>
          <div>
            <i></i>
            <span>Verified sellers</span>
          </div>
        </div>
      </div>
      <div>
        <h2>Most popular categories</h2>
        <div>
          <div>
            <div>
              <img src="{}" alt="" />
            </div>
            <h3>Jewelery and accessoires</h3>
            <div>
              <p>
                Adorn yourself with exquisite handmade jewelry and accessories,
                crafted by talented artisans with love and soul
              </p>
            </div>
            <div>
              <button>Want it!</button>
            </div>
          </div>
          <div>
            <div>
              <img src="{}" alt="" />
            </div>
            <h3>Jewelery and accessoires</h3>
            <div>
              <p>
                Adorn yourself with exquisite handmade jewelry and accessories,
                crafted by talented artisans with love and soul
              </p>
            </div>
            <div>
              <button>Want it!</button>
            </div>
          </div>
          <div>
            <div>
              <img src="{}" alt="" />
            </div>
            <h3>Jewelery and accessoires</h3>
            <div>
              <p>
                Adorn yourself with exquisite handmade jewelry and accessories,
                crafted by talented artisans with love and soul
              </p>
            </div>
            <div>
              <button>Want it!</button>
            </div>
          </div>
        </div>
        <div>
          <span>0</span>
        </div>
      </div>
      <div>
        <h2>Become a creativity provider</h2>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <span>
              Start to sell your crafts and grow your hobby as business too
            </span>
            <div>
              <button>Let’s start!</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <span>ridni.com.ua</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </div>
  );
};
export default App;
