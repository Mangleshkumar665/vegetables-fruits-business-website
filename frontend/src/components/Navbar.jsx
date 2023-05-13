
const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid  ">

                    
                    <a className="navbar-brand " href="/">BalaJi Freshee OverSease</a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

{/* d-flex justify-content-center align-items-center */}

                    <div className="collapse navbar-collapse  navbar-actions-wrapper    " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-actions-subwrapper  d-flex justify-content-start align-items-center ">
                            <li className="nav-item  ">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">About Us </a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Our Products
                                </a>


                                <ul className="dropdown-menu ">
                                    <li>
                                        <a className="dropdown-item" href="">Fresh Fruits</a>

                                        <ul className="dropdown-menu submenu" >

                                            <li className="dropdown-item"> items1 </li>
                                            <li className="dropdown-item"> items1 </li>


                                        </ul>

                                    </li>



                                    <li>
                                        <a className="dropdown-item" href="">Fresh Vegetables</a>

                                        <ul className="dropdown-menu submenu" >

                                            <li className="dropdown-item"> items3 </li>
                                            <li className="dropdown-item"> items4 </li>
                                        </ul>

                                    </li>




                                    {/* <li><hr className="dropdown-divider" /></li> */}




                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Import/Export
                                </a>


                                <ul className="dropdown-menu ">

                                    <li className="dropdown-item">
                                        nepal
                                    </li>

                                    <li className="dropdown-item">
                                        bhutan
                                    </li>



                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact Us </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Gallery </a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
