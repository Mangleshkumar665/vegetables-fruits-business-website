import { useState } from "react";
import back1 from "../images/exportpage/back1.jpg";
import data from '../data/data.json'
const ImportExportPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, phone, message });
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const title = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')).slice(1)



  return (
    <div className="start-margin">
      <div className="contact-header">
        <div className='contact-back'>
          <img className=' ' src={back1} alt="" />
        </div>
      </div>

      <div className="import-export-body ">
        <div className="import-section">
          <h3> Fruit and Vegetable Importers in {title}</h3>
          <p>Dhanlaxmi International is one of the leading fresh fruit importers in {title} also suppliers & Export in {title} from india. wholesaler of fruits and vegetables importers in {title}. The quality approved assortment of vegetables that we offer has helped us set up a large customer base in different areas including food businesse. our company is offering Fresh Vegetables and Fresh Fruits in the market. fresh fruits importers in {title} like Pomegranate, Grapes, Mangoes, Coconut, Tomatoes, Onions, Green Chilies, Lemons and Green and organic fresh vegetables importers in {title}.</p>
        </div>


        <div className="export-section">
          <h3>fruit export company in {title}</h3>

          <ul>
            <li>Produce Professionals Source Quality Fruits & Vegetables</li>
            <li>Our Sales Team Provides Options, Solutions, & Competitive Pricing</li>
            <li>Global Sourcing from the India, USA, Canada</li>
            <li>Import and Distribution to the India</li>
            <li>Representing Growers and Packers to Maximize Opportunity</li>

          </ul>
          <p>
            Dhanlaxmi International is redefining the way premium fresh import vegetables in {title} produce is being distributed worldwide. Our dedication to supplying top-of-the-line freshֲ products as well as our long line of strong partnerships and customers, have helped us guarantee a reliable service of the finest organic products which we are proud to present vegetable and fruit importers in {title} to communities {title}.
          </p>


          <p>We are now vegetable importers companies in {title} and new products to our distribution product line. Don’t miss a unique opportunity to partner fresh fruit and vegetable exporters in {title} with a distribution company that originates from one of the most agriculturally advanced countries in {title}.</p>
        </div>
      </div>
      <div className="contact-section">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="phone"
              placeholder='Phone Number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              id="message"
              placeholder='Write Your Message Here!'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required style={{}}
            ></textarea>
          </div>

          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default ImportExportPage
