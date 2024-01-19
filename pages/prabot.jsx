import React from "react";
import LeftArrowCircle from "./component/prabot/leftarrowcircle";
import MoreRead from "./component/prabot/moreread";
import Ref1 from "./component/prabot/ref1";
import Ref2 from "./component/prabot/ref2";
import Ref3 from "./component/prabot/ref3";
import Ref4 from "./component/prabot/ref4";
import Ref5 from "./component/prabot/ref5";
import RightArrow from "./component/prabot/rightarrow";
import RightArrowCircle from "./component/prabot/rightarrowcircle";

function prabot() {
  return (
    <div className="prabot-page">
      <div className="header">
        <div className="backgrond-wrapper">
          <div className="light"></div>
          <div className="dark">
            <div className="email">yourwebiste.com</div>
          </div>
        </div>
        <div className="header-menu">
          <div className="prabot-logo">
            <img src="assets/prabotlogo.png" />
          </div>
          <div className="header-component">
            <span>Shop</span>
            <span>Inspire</span>
            <span>Product</span>
          </div>
        </div>
        <div className="header-cabinet">
          <div className="header-text">
            <h1>MINIature Wide Cabinet </h1>
            <div className="details">
              <a href="#">Details</a> <RightArrow />
            </div>
          </div>
          <div className="product-img">
            <img className="img" src="/assets/Product.png" />
            <div className="right-arrow">
              <RightArrowCircle />
            </div>
          </div>
        </div>
      </div>
      <div className="eamil-mob">yourwebiste.com</div>

      <div className="rumah-para">
        Rumah berantakan karena banyak barang tercecer? Perlu simpan barang agar
        mudah dicari? Pengen dekor ruangan biar estetik?
      </div>

      <div className="hero">
        <div className="concept">
          <img className="img1" src="/assets/prabot2.png" />
          <span className="text">Con-cept</span>
        </div>
        <div className="gaya-para">
          <p>
            Gaya skandinavia meluas di Eropa Timur. Pada desain ini sangat
            memperhatikan detail, nilai fungsionalitas tanpa menghilangkan
            keindahan dan keanggunannya.
          </p>
          <img className="img2" src="/assets/prabot3.png" />
        </div>
      </div>
      <div className="minimalist">
        <div className="img3-wrapper">
          <img className="img3" src="/assets/prabot4.png" />
          <img className="img4sec" src="/assets/prabot4second.png" />
        </div>
        <h1 className="minimalist-text">Minimalist Cabinet</h1>
      </div>

      <div className="size-ingredient-wrapper">
        <div className="size-ingredient">
          <div className="ingredient-wrapper">
            <h1 className="ingredient-text">Ingredient</h1>
            <p className="bahan">
              Bahan Kayu mahoni,MDF Finishing cat duco Dikirim utuh, tinggal
              pasang kaki dengan instruksi rakit.
            </p>
          </div>
          <div className="size-wrapper">
            <div className="size">
              <h1 className="size-text">Size</h1>
              <p className="uk">
                Uk. kompartemen 47 x 26,5 x18 cm Pintu saat dibuka 30 cm Tinggi
                kaki 10 cm
              </p>
            </div>
            <div className="det-sec">
              <div className="details">
                <a href="#">Details</a> <RightArrow />
              </div>
            </div>
          </div>
        </div>
        <div className="img5">
          <img src="/assets/prabot5.png" />
        </div>
      </div>

      <div className="feature-wrapper">
        <img className="img6" src="/assets/product6.png" />
        <div className="minimal-feature-wrapper">
          <div className="minimal-feature">
            <h1>MINIature Wide Feature</h1>
            <ul>
              <li>
                Terdapat 4 rak kaca berkualitas dan bisa diatur ketinggian nya
              </li>
              <li>
                Mempunyai 2 pintu kaca dengan push button agar mudah buka tutup
              </li>
              <li>Lapisan cermin bagian dalam untuk estetika</li>
              <li>Sudut lemari tumpul agar tidak melukai saat terbentur</li>
              <li>Dilengkapi adjuster agar tidak merusak lantai</li>
            </ul>
          </div>

          <div className="det-sec2">
            <div className="details2">
              <a href="#">Feature</a> 
              <RightArrow />
            </div>
          </div>
        </div>
      </div>

      <div className="color-options-wrapper">
        <h1 className="color-options-text">Color Options</h1>
        <div className="color-options">
        <div className="first-color">
          <h2 className="ivory">Ivory</h2>
          <div className="ref"> <Ref1 className="ref"/> </div>
          <div className="order-now">
            <a href="#">Order Now</a>
          </div>
        </div>
        <div className="first-color">
          <h2 className="ivory">Natural</h2>
          <div className="ref"><Ref2 className="ref"/></div>
          <div className="order-now">
            <a href="#">Order Now</a>
          </div>
        </div>
        <div className="first-color">
          <h2 className="ivory">Tosca</h2>
          <div className="ref"><Ref3 className="ref"/></div>
          <div className="special-edition">
            <a href="#">Special Edition</a>
          </div>
        </div>
        <div className="first-color">
          <h2 className="ivory">Black</h2>
          <div className="ref"><Ref4 className="ref"/></div>
          <div className="order-now">
            <a href="#">Order Now</a>
          </div>
        </div>
        <div className="first-color">
          <h2 className="ivory">Pink</h2>
          <div className="ref"><Ref5 className="ref"/></div>
          <div className="order-now">
            <a href="#">Order Now</a>
          </div>
        </div>
        <div className="more-reade"> <MoreRead/></div>
       
        </div>
     
      </div>
      <div className="footer">
        <div className="view-all-product"><a href="#">View All product</a> <div className="a"><RightArrow /></div></div>
        {/* <div className="back-color"></div> */}
      </div>
    </div>
  );
}

export default prabot;
