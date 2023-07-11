import Navbar from './components/Navbar'
import Layout from './pages/Layout';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ImportExportPage from './pages/ImportExportPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import data from './data/data.json';

import Footer from './components/Footer';
import WhatasppChat from './components/WhatasppChat';
import ImageMotion from './pages/ImageMotion';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <WhatasppChat/>

        <Routes>
          <Route path='*' element={<ErrorPage/>} ></Route>

          <Route path='/' element={< Layout />}>
          </Route>
          <Route path='/About-Us' element={< AboutPage />}>
          </Route>


          <Route path='/Products/:id' element={< ProductPage />}>
          </Route>

          <Route path='/Transportation/:id' element={< ImportExportPage />}>
          </Route>

          <Route path='/Contact-Us' element={< ContactPage />}>
          </Route>
          <Route path='/Gallery' element={< GalleryPage />}>
          </Route>
          


        </Routes>
        
        <Footer/>


      </BrowserRouter>


    </>
  )
}

export default App
