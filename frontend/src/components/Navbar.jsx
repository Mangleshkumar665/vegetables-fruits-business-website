import { Link } from "react-router-dom"

import data from '../data/data.json'
const Navbar = () => {
    console.log(data.products[0].category,"chk")
    console.log(data.products.filter((e)=> e.category === 'Vgetables'))

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid  ">


                    <Link to="/" className="navbar-brand " >BalaJi Freshee OverSease</Link>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* d-flex justify-content-center align-items-center */}

                    <div className="collapse navbar-collapse  navbar-actions-wrapper    " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-actions-subwrapper  d-flex justify-content-start align-items-center ">
                            <li className="nav-item  ">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="About-Us" className="nav-link" >About Us </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Our Products
                                </a>


                                <ul className="dropdown-menu ">
                                    <li>
                                        <div className="dropdown-item" >Fresh Fruits</div>

                                        <ul className="dropdown-menu submenu" >

                                            {/* <Link to="/Products/Apples" className="dropdown-item"> Apples </Link> */}
                                            {
                                                data.products.filter((e)=> e.category === 'Fruits' ).map((e)=>{
                                                    return <Link key={e.id} to={`/Products/${e.title}`} className="dropdown-item"> {e.title} </Link>
                                                })
                                                


                                            }

                                            {/* <Link to="/Products/Banana" className="dropdown-item"> Banana </Link> */}


                                        </ul>

                                    </li>



                                    <li>
                                        <Link to="/Products/:id" className="dropdown-item" >Fresh Vegetables</Link>

                                        <ul className="dropdown-menu submenu" >

                                        {
                                                data.products.filter((e)=> e.category === 'Vegetables' ).map((e)=>{
                                                    return <Link key={e.id} to={`/Products/${e.title}`} className="dropdown-item"> {e.title} </Link>
                                                })
                                                


                                            }
                                        </ul>

                                    </li>




                                    {/* <li><hr className="dropdown-divider" /></li> */}




                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Import/Export
                                </div>


                                <ul className="dropdown-menu ">

                                    <Link to="/Transportation/idafmno" className="dropdown-item"> Australia  </Link>


                                    <Link to="/Transportation/idafmno" className="dropdown-item"> Bhutan  </Link>



                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="/Contact-Us" className="nav-link" >Contact Us </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Gallery" className="nav-link" >Gallery </Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
