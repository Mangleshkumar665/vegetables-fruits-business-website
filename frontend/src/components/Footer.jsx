
const Footer = () => {
    return (
        <div className="footer-wrapper ">

            <div className="container  " style={{ marginTop: "0px " }}>
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">

                        </a>
                        <p className="text-muted">© 2022</p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <h4> About Us </h4>

                        <p>
                            BalaJi Freshee is one of the Leading Fresh Vegetables and Fruits Exporters from India. We are the main Exporter of the Fresh Vegetables and Fresh Fruits.
                        </p>

                        <div>
                            <div className="card-body d-flex flex-row flex-wrap  contact-cards" >
                                <div className="flex-shrink-0">
                                    <i className="fa-brands fa-instagram m-2 fa-2xl"></i>
                                </div>
                                
                                <div className="flex-shrink-0">
                                    <i className="fa-brands fa-facebook m-2 fa-2xl"></i>
                                </div>
                                
                                <div className="flex-shrink-0">
                                    <i className="fa-brands fa-youtube m-2 fa-2xl"></i>
                                </div>
                                
                                
                            </div>
                            

                        </div>
                    </div>

                    <div className="col mb-3">
                        <h4>Contact Us </h4>
                        <ul className="nav flex-column">
                            <li>
                                Address
                            </li>
                            <li>
                                Address
                            </li>

                            <li>
                                Phone Number
                            </li>
                            <li>
                                Email us
                            </li>


                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Quick Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Brochure</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Gallery</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
