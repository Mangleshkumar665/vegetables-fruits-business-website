import img1 from '../images/frontpage/1-removebg.png'
import img2 from '../images/frontpage/2.jpg'


const FrontPage = () => {
  return (

    <div className='' style={{height:"100vh"}}>
      <div className="frontpage-wrapper">
        <img src={img2} alt="" style={{ width: "100%", position: 'absolute', height: "90%" }} />

        <div className='fp-bg-image-wrapper'>
          <img className='fp-bg-image' src={img1} alt="image" />
        </div>

        <div className='brand-text display-1 '>
      <div className='d-flex'>
      BalaJi Fresh <div className='brand-text-mod'>ee</div>  </div>  
      
      <div className='d-flex'>OverSea<div className='brand-text-mod'>s</div></div> 
      
      
      <div className='brand-text-caption'> 
      <div className='d-flex'>
      where world buys&nbsp;<div className='brand-text-mod'>fruits</div>&nbsp;and&nbsp; <div className='brand-text-mod'>vegies</div>
      </div>
      </div>

      <div className='d-flex justify-content-center align-item-center my-4'>
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
