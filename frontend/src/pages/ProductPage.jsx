

import data from '../data/data.json'




const ProductPage = () => {

  const currentItemObject = data.products.find((e) => e.title === window.location.pathname.substring(window.location.pathname.lastIndexOf('/')).slice(1))


  // console.log(
  //   console.log(currentItemObject.images[0].img)
  // )

  return (
    <div className="products-main">




      <div className="products-bg">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-duration="250">


              <img src={
                currentItemObject.background.one



              } className="d-block w-100" alt="..." />
              <div className="product-overlay d-flex justify-content-center align-items-center">
                {currentItemObject.specialName !== undefined ? currentItemObject.specialName : currentItemObject.title}
              </div>

            </div>


            <div className="carousel-item" data-bs-duration="250" >
              <img src={currentItemObject.background.two} className="d-block w-100" alt="..." />
              <div className="product-overlay d-flex justify-content-center align-items-center">

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
          {currentItemObject.specialName !== undefined ? currentItemObject.specialName : currentItemObject.title} Export/Import From India
        </div>
        <hr />

        <div className="products-text container  ">

          {currentItemObject.details}
        </div>
        <div className="marquee-w">


        </div>

        <div className="product-album  ">

          <div className="product-img d-flex justify-content-center  flex-wrap ">


            {currentItemObject.images.map((e) => {
              return <img key={e.id} src={e.img} alt="heheihf " />

            })}







          </div>


          <div className="product-video my-5  d-flex justify-content-center align-items-center">
            <iframe width="800" height="320" src={currentItemObject['video-link']} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>



        </div>









      </div>













    </div>
  )
}

export default ProductPage
