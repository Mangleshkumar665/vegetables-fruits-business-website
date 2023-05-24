// import img1 from '../images/frontpage/1-removebg.png'
// import img2 from '../images/frontpage/2.jpg'

import data from '../data/data.json'

const FrontPage = () => {
  console.log(data.frontPage.background1,"chl")
  return (

    <div className='' style={{ height: "90vh", width: "100vw" }}>
      <div className="frontpage-wrapper">

        <div className='fp-bg-image-wrapper'>

          <div id="carouselExampleAutoplaying" className="carousel slide fp-bg-image-wrapper" data-bs-ride="carousel">
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img src={data.frontPage.background1} className="d-block w-100 carousel-img " alt="/" />
              </div>
              <div className="carousel-item carousel-item-clipped">
                <img src={data.frontPage.background2} className="d-block w-100 carousel-img  " alt="/" />
              </div>
              <div className="carousel-item  ">
                <img src={data.frontPage.background3} className="d-block w-100  carousel-item-clipped carousel-img " alt="/" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>









        </div>




        <div className='brand-text display-1 '>
          <div className='d-flex'>
            BalaJi Fresh <div className='brand-text-mod'>ee</div>  </div>

          <div className='d-flex'>OverSea<div className='brand-text-mod'>s</div></div>


          <div className='brand-text-caption my-2'>
            <div className='d-flex  '>
              <div className='brand-text-mod'> Freshness</div>
              &nbsp;Unleashed  <br />

            </div>
            <div className='d-flex'>
              From Farm to
              <div className='brand-text-mod'>&nbsp;Worldwide!</div>
            </div>

          </div>

          <div className='d-flex justify-content-start align-item-center my-4  mx-4'>
            <button className='brochure-btn  '>

              Brochure

            </button>
          </div>

        </div>

      </div>

      <div className='frontpage2-wrapper'></div>


    </div>
  )
}

export default FrontPage
