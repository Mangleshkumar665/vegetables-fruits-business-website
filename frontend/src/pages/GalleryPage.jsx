

import data from "../data/data.json"

const GalleryPage = () => {
  return (
    <div className="start-margin ">
      <span className="d-flex justify-content-center align-items-center gallery-heading "><h1 className="about-head-title  "> Gallery </h1></span>

      <section className="section nature">
      
      
      
        {
          data.gallery.map((ele)=> <img src={ele.img} title="nature-1" className="img sticky-top" data-id="1" key={ele.id} />
          )
        }

          <img src="../../public/gallery/18.jpg" title="nature-1" className="img" data-id="1" alt="nature-1" />


        
    
      </section>

      
    </div>
  )
}

export default GalleryPage
