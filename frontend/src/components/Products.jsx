import data from '../data/data.json'



import { Link } from 'react-router-dom'

// import back1 from '../images/frontpage/back1.jpg'









const Products = () => {
    // console.log(data.products,"chkl")

    return (
        <div className=" products-main">
            <div className='about-head d-flex justify-content-center align-items-center flex-column'>
                <div className="about-head-title">

                    Our Products
                </div>

            </div>


            <div className="marquee-w">

                <div className="marquee marquee2">
                    <span>Freshness Awaits! Experience Nature's Bounty with Our Premium Vegetable & Fruit Exports.&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
            </div>



            <div className="products-wrapper   my-5">


                <div className=" product-subwrapper   d-flex flex-wrap justify-content-center ">

                    {data.products.map((product) => {
                         return <div key={product.id}  className=" card product-wrapper    ">
                        <img className="card-img-top rotate-left" src={product.thumb} alt={product.title } />


                        <div className="card-body">
                            <h5 className="card-title text-center">{product.title}</h5>
                        </div>

                        <div className='product-details d-flex justify-content-center align-items-center'>
                            <Link id='Apple' to={`/Products/${product.title}`}

                                className='product-details-btn'>
                                View Details
                            </Link>
                        </div>

                    </div>
                    })
                    }




                    



                </div>



               
            </div>


        </div>
    )
}

export default Products
