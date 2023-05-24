import Navbar from './components/Navbar'
import Layout from './pages/Layout';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ImportExportPage from './pages/ImportExportPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import data from './data/data.json';

function App() {
  console.log(data.product)
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={< Layout />}>
          </Route>
          <Route path='/About-Us' element={< AboutPage />}>
          </Route>


          <Route path='/Products/:id' element={< ProductPage />}>
          </Route>

          <Route path='/Transportaion/:id' element={< ImportExportPage />}>
          </Route>

          <Route path='/Contact-Us' element={< ContactPage />}>
          </Route>
          <Route path='/Gallery' element={< GalleryPage />}>
          </Route>
          


        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
