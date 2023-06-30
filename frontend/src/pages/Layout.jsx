import FrontPage from './FrontPage'
import About from '../components/About'
import Products from '../components/Products'
import WhyChooseUs from '../components/WhyChooseUs'
import Enquiry from '../components/Enquiry'

const Layout = () => {
  return (
    <>
      <FrontPage />
      <About/>
      <Products/>
      <WhyChooseUs />
        <Enquiry />
    </>
  )
}

export default Layout
