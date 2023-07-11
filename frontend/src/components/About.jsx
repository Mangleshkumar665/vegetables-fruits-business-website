import { Link } from 'react-router-dom'
// import img3 from '../images/frontpage/3.jpg'

import one from "../images/aboutpage/1.jpg"
import two from "../images/aboutpage/2.jpg"

const About = () => {
    return (
        <div className=" about-wrapper container d-flex justify-content-center align-items-center flex-column " style={{fontFamily:"poppins"}}>

            <div className='about-head d-flex justify-content-center align-items-center flex-column'>
                <div className="about-head-title">

                    About Us
                </div>

            </div>
            <div className="about-details my-5 d-flex justify-content-center align-items-center flex-column container ">
                <p className=''>
                    Welcome to <strong className='brand-text-mod'>Balaji Freshee Overseas</strong>, a leading exporter of premium-quality fruits and vegetables. At Balaji Freshee Overseas, we are passionate about delivering the freshest, highest-quality produce from the bountiful fields of India to customers around the world.
                </p>
                <p>
                    With a firm commitment to excellence, we source our fruits and vegetables directly from trusted farmers who practice sustainable cultivation methods. Our stringent quality control measures ensure that only the finest and healthiest produce makes its way to your table.
                </p>              <p>
                    We take pride in our wide range of offerings, including an assortment of vibrant and succulent fruits, crisp and flavorful vegetables, and a variety of exotic specialties. From luscious mangoes and juicy apples to crunchy bell peppers and leafy greens, our diverse selection caters to the discerning tastes of our global clientele.
                </p>
                Driven by a customer-centric approach, we strive to exceed expectations by providing reliable and efficient delivery services. Whether you are a wholesaler, retailer, or distributor, our team is dedicated to meeting your specific requirements and ensuring a seamless experience.


                {window.location.pathname !== "/About-Us" ?
                    <Link to="/About-Us" className='about-details-btn ' style={{ zIndex: "1" }}>
                        Read More
                    </Link> : ""
                }
            </div>

            {window.location.pathname !== "/"?
                <div className='row    ' style={{ width: "75vw" }}>
                <div className='col d-flex justify-content-center align-items-center flex-column card product-wrapper  ' >

                    <img className="" src={one} alt="ancd" style={{ maxWidth: "300px" ,padding:"25px" }} />

                    <h3> Our Vision </h3>
                    <p>
                        To partner with farmers and customers in realizing the highest possible quality produce & services and achieve sustainability in long term growth
                    </p>
                </div>
                <div className='col d-flex justify-content-center flex-column  align-items-center card product-wrapper'>
                    <img className="" src={two} alt="ancd" style={{ maxWidth: "300px",padding:"25px" }} />



                    <h3> Our Mission </h3>
                    <p>To partner with farmers and customers in realizing the highest possible quality produce & services and achieve sustainability in long term growth</p>
                </div>
            </div>:""
        }
        </div >
    )
}

export default About
