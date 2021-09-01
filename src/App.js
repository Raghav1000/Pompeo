import "./App.css";

function App() {
  return (
    <div className="App">
      <body class="pompeo">
        {/*<!-- Header  -->*/}
        <header class="header">
          <div class="header__logo">
            <img src="../assets/Pompeo logo.jpg" alt="pompeoLogo" />
          </div>
          <div class="header__navOptions">
            <ul>
              <li class="header__navOptions">
                <a href="/">HOME</a>
              </li>
              <li class="header__navOptions">
                <a href="/">ABOUT</a>
              </li>
              <li class="header__navOptions">
                <a href="/">SHOP</a>
              </li>
              <li class="header__navOptions">
                <a href="/">CONTACT</a>
              </li>
              <div class="header__navCart">
                <img src="./assets/cart.svg" alt="cart" />
                <a href="/">CART</a>
              </div>
            </ul>
          </div>
        </header>

        {/*<!-- Landing Page -->*/}

        <main>
          <div class="landingPage">
            <div class="landingPage__backgroundImage">
              <img src="./assets/background-image.jpg" alt="bg" />
            </div>
            <div class="landingPage__sections">
              <div class="landPage_Left">
                <h6>POMPEO POTTERY</h6>
                <h2>Unique Porcelain & Stone Collection</h2>
                <p>
                  Unique & modern pottery made by our master in porcelain &
                  stones
                </p>
                <button>SHOP COLLECTION</button>
              </div>
              <div class="landPage_Right">
                <img src="./assets/background-image2.png" alt="" />
              </div>
            </div>
          </div>
        </main>

        {/*<!--Section -  1 -->*/}
        <section class="productCategories">
          <h6>PRODUCT CATEGORIES</h6>
          <h2>Porcelain & Pottery</h2>
          <div class="productOptions">
            <div class="productOption__mug">
              <img src="./assets/mugs.png" alt="mugs" />
              <p>Vases</p>
            </div>
            <div class="productOption__plate">
              <img src="./assets//plates.png" alt="plates" />
              <p>Plates</p>
            </div>
            <div class="productOption__bowl">
              <img src="./assets/bowls.png" alt="bowls" />
              <p>Mugs</p>
            </div>
          </div>
          <div class="productHistory">
            <div class="productHistory__one">
              <h4>
                Hand Grafted <br />
                Pottery since 1990
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus posuere
              </p>
            </div>
            <div class="productHistory__two">
              <h4>
                We Provide Premium <br />
                Pottery Produts
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus posuere
              </p>
            </div>
          </div>
          <div class="border"></div>
          <div class="productShowcase">
            <div class="productShowCase__left">
              <img src="./assets//vase-image.png" alt="" />
            </div>
            <div class="productShowCase__right">
              <h4>Gold & Black Pottery</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
                veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex
                ea commodo consequatuisaute.
              </p>
              <button>View Details</button>
            </div>
          </div>
        </section>

        {/*<!-- section - 2 -->*/}
        <section>
          <div class="potteryCollection">
            <h6>OUR ONLINE STORE</h6>
            <h2>Pottery Collection</h2>
            <div class="potteryCollection__products">
              <div id="product" class="potteryCollection_product">
                <img src="./assets//image-1.png" alt="" />
                <h6>Decor Plate</h6>
                <p id="potteryCollection_productPrice">$ 65.00 USD</p>
              </div>
              <div id="product" class="potteryCollection_product">
                <img src="./assets//image-2.png" alt="" />
                <h6>Decor Plate</h6>
                <p id="potteryCollection_productPrice">$ 75.00 USD</p>
              </div>
              <div id="product" class="potteryCollection_product">
                <img src="./assets//image-3.png" alt="" />
                <h6>Decor Plate</h6>
                <p id="potteryCollection_productPrice">$ 125.00 USD</p>
              </div>
              <div id="product" class="potteryCollection_product">
                <img src="./assets//image-4.png" alt="" />
                <h6>Decor Plate</h6>
                <p id="potteryCollection_productPrice">$ 55.00 USD</p>
              </div>
              <div id="product" class="potteryCollection_product">
                <img src="./assets//image-5.png" alt="" />
                <h6>Decor Plate</h6>
                <p id="potteryCollection_productPrice">$ 115.00 USD</p>
              </div>
              <div id="product" class="potteryCollection_product">
                <img src="./assets//image-6.png" alt="" />
                <h6>Decor Plate</h6>
                <p id="potteryCollection_productPrice">$ 75.00 USD</p>
              </div>
            </div>
            <button>VIEW ALL PRODUCTS</button>
          </div>

          <div class="newCollection">
            <div class="newCollection_image">
              <img src="./assets/newCollection.jpeg" alt="" />
            </div>
            <div class="newCollection_info">
              <h6>POMPEO POTTERY</h6>
              <h2>Ready to start shopping?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum.
              </p>
              <button>NEW COLLECTION</button>
            </div>
          </div>
        </section>
        <div class="subscribe">
          <h6>LATEST NEWS</h6>
          <h2>Latest news & New updates</h2>
          <div class="subscribe_input_button">
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
          <div class="checkbox">
            <input type="checkbox" />
            <label> Sign up for newsletter </label>
          </div>
        </div>

        <footer>
          <div class="footer">
            <img src="./assets/pomper-graybg.jpg" alt="pompeoLogo" />
            <p>
              I have always striven to fix beauty in wood, stone, glass or
              pottery, that has been my creed.
            </p>
            <div class="footer_details">
              <div class="footer_detail">
                <img src="./assets//email.png" alt="" />
                <h6>EMAIL</h6>
                <p>pompeopotery@gmail.com</p>
              </div>
              <div class="footer_detail">
                <img src="./assets//location.png" alt="" />
                <h6>FIND</h6>
                <p>Central Park, Manhattan New York, 1101</p>
              </div>
              <div class="footer_detail">
                <img src="./assets//contact.png" alt="" />
                <h6>CALL</h6>
                <p>+1 292 345 678</p>
              </div>
            </div>
          </div>
        </footer>
      </body>{" "}
    </div>
  );
}

export default App;
