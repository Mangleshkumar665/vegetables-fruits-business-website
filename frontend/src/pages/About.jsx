import img3 from '../images/frontpage/3.jpg'
const About = () => {
    return (
        <div className=" about-wrapper " >

            <div className='about-head d-flex justify-content-center align-items-center flex-column'>
                <div className="about-head-title">

                    About Us
                </div>

            </div>
                <div className="about-details my-5 d-flex justify-content-center align-items-center flex-column container">
                    <p className=''>
                        Welcome to <strong className='brand-text-mod'>Balaji Freshee Overseas</strong>, a leading exporter of premium-quality fruits and vegetables. At Balaji Freshee Overseas, we are passionate about delivering the freshest, highest-quality produce from the bountiful fields of India to customers around the world.
                    </p>
                    <p>
                        With a firm commitment to excellence, we source our fruits and vegetables directly from trusted farmers who practice sustainable cultivation methods. Our stringent quality control measures ensure that only the finest and healthiest produce makes its way to your table.
                    </p>              <p>
                        We take pride in our wide range of offerings, including an assortment of vibrant and succulent fruits, crisp and flavorful vegetables, and a variety of exotic specialties. From luscious mangoes and juicy apples to crunchy bell peppers and leafy greens, our diverse selection caters to the discerning tastes of our global clientele.
                    </p>
                    Driven by a customer-centric approach, we strive to exceed expectations by providing reliable and efficient delivery services. Whether you are a wholesaler, retailer, or distributor, our team is dedicated to meeting your specific requirements and ensuring a seamless experience.
                    {/* <p>
                        With Balaji Freshee Overseas, you can trust that each bite of our produce is a testament to our unwavering commitment to freshness, quality, and customer satisfaction. Join us on this flavorful journey as we bring the goodness of nature<sup>'</sup>s harvest to your doorstep, enhancing your culinary experiences one fruit and vegetable at a time.
                    </p> */}

                        <button className='about-details-btn' >
                            Read More
                        </button>
                    
                </div>

 
            


        </div >
    )
}

export default About
