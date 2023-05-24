import appleBack1 from "../images/frontpage/apple-back1.jpg";
import appleBack2 from "../images/frontpage/apple-back2.jpg";
import apple1 from "../images/products/albums/apple/1.jpg";
import apple2 from "../images/products/albums/apple/2.jpg";
import apple3 from "../images/products/albums/apple/3.jpg";
import apple4 from "../images/products/albums/apple/4.jpg";
import apple5 from "../images/products/albums/apple/5.jpg";


import bananaBack1 from "../images/products/albums/banana/backgorund/back1.jpg"

import bananaBack2 from "../images/products/albums/banana/backgorund/back2.jpg"
import banana1 from "../images/products/albums/banana/1.jpg";
import banana2 from "../images/products/albums/banana/2.jpg";
import banana3 from "../images/products/albums/banana/3.jpg";
import banana4 from "../images/products/albums/banana/4.jpg";
import banana5 from "../images/products/albums/banana/5.jpg";

import data from '../data/data.json'




const ProductPage = () => {
  console.log(
    window.location.pathname.substring(window.location.pathname.lastIndexOf('/')).toLocaleLowerCase().slice(1) +"Back1"
  )

  return (
    <div className="products-main">




      <div className="products-bg">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-duration="250">


              <img src={
                window.location.pathname.substring(window.location.pathname.lastIndexOf('/')).toLocaleLowerCase().slice(1) +"Back1"

    
                
                } className="d-block w-100" alt="..." />
              <div className="product-overlay d-flex justify-content-center align-items-center">
                Apples
              </div>

            </div>


            <div className="carousel-item" data-bs-duration="250" >
              <img src={appleBack2} className="d-block w-100" alt="..." />
              <div className="product-overlay d-flex justify-content-center align-items-center">
                Apples
              </div>
            </div>

          </div>
          <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>


      </div>







      <div className="products-body container">

        <div className="products-head d-flex justify-content-center align-items-center my-3" >
          Apple Export/Import From India
        </div>
        <hr />

        <div className="products-text container  ">

          Fresh <strong className="brand-text-mod">Apples </strong>  is one of the important fruit crops commercially grown. The main commercially grown varieties are Bhagwa , Arkata & Ganesh, Bhagwa is widely known for its soft seed, Dark red colour, and extremely delicious. Varities : Bhagwa, Arkata, Ganesh Weight : 250 gm+ 400 gm Taste : Sweet Packing : 3 kg, 5 kg, 10 kg, Carton Box Fresh Pomegranate Exporters from India also provide Pomegranate Import at Sri Lanka, Maldives, Oman ,South Africa, Germany, UK, Sweden, Italy, USA, Australia, Canada and all over world.
        </div>
        <div className="marquee-w">


        </div>

        <div className="product-album  ">

          <div className="product-img d-flex justify-content-center  flex-wrap ">

        


            <img src={apple1} alt="" />

            <img src={apple2} alt="" />
            <img src={apple3} alt="" />
            <img src={apple4} alt="" />
            <img src={apple5} alt="" />

            <img src={apple5} alt="" />




          </div>


          <div className="product-video my-5  d-flex justify-content-center align-items-center">
            <iframe width="800" height="320" src="https://www.youtube.com/embed/NvdzK3RxC-Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>



        </div>









      </div>



















    </div>
  )
}

export default ProductPage
