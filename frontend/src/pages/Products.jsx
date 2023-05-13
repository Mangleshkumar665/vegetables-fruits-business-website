import appleThumb from '../images/products/apple-thumb.jpg'
import bananaThumb from '../images/products/banana-thumb.jpg'
import blackgrapesThumb from '../images/products/blackgrapes-thumb.jpg'
import potatoThumb from '../images/products/potato-thumb.jpg'

import mangoThumb from '../images/products/mango-thumb.jpg'
import chilliThumb from '../images/products/chilli-thumb.jpg'










const Products = () => {
    return (
        <div className="">
            <div className='about-head d-flex justify-content-center align-items-center flex-column'>
                <div className="about-head-title">

                    Our Products
                </div>

            </div>

            <div className="products-wrapper  container my-4">


                <div className="card-group temp">
                    <div className="card product-wrapper  ">
                        <img className="card-img-top" src={appleThumb} alt="Card image cap" />
                        

                    </div>
                    <div className="card">
                        <img className="card-img-top" src={bananaThumb} alt="Card image cap" />
                
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={mangoThumb} alt="Card image cap" />
                        
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={potatoThumb} alt="Card image cap" />
                        
                    </div>
                    
                    <div className="card">
                        <img className="card-img-top" src={chilliThumb} alt="Card image cap" />
                        
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={blackgrapesThumb} alt="Card image cap" />
                        
                    </div>
                    
                    

                </div>
            </div>


        </div>
    )
}

export default Products
