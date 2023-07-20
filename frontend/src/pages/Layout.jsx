import FrontPage from './FrontPage'
import About from '../components/About'
import Products from '../components/Products'
import WhyChooseUs from '../components/WhyChooseUs'
import Enquiry from '../components/Enquiry'

const Layout = () => {
  return (
    <>
      <div className='layout'>
        <FrontPage />
        <About />
        <Products />
        <WhyChooseUs />
        <Enquiry />
      </div>
    </>
  )
}

export default Layout
