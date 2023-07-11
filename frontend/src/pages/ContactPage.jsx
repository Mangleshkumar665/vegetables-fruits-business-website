import back1 from '../images/contact/back1.jpg'
import { useState } from 'react';


const ContactPage = () => {

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

  return (
    <div className="contact-wrapper ">


      {/* <img className='clip1' src={clip1} alt="" /> */}

      <div className="contact-header">
        <div className='contact-back'>
          <img className=' ' src={back1} alt="" />
        </div>
      </div>

      <div className="contact-main row">
        <div className="contact-details col-sm-5 ">
          <tr className='contact-details-list d-flex flex-column justify-content-center '>
            <li>
              <div className='d-flex align-items-center'>
                <i className="fa-solid fa-house-user fa-2xl "></i>
                <h3 className='mx-4 display-5'>Visit Us</h3>
              </div>
              <p className=''>
                <h5>Register Office: 10, Vrajbhumi duplex, Nr. Chandra bhanu high school, Jivaraj park, Ahmedabad :380051, Gujarat, India.</h5>

              </p>
            </li>

            <li>
              <div className='d-flex align-items-center'>
                <i className="fa-solid fa-house-user fa-2xl "></i>
                <h3 className='mx-4 display-5'>Visit Us</h3>
              </div>
              <p className=''>
                <h5>Register Office: 10, Vrajbhumi duplex, Nr. Chandra bhanu high school, Jivaraj park, Ahmedabad :380051, Gujarat, India.</h5>

              </p>
            </li>

            <li>
              <div className='d-flex align-items-center'>

                <i className="fa-solid fa-phone fa-2xl"></i>

                <h3 className='mx-4 display-5'>Contact Us</h3>
              </div>

              <p>

                <h4>+91 4646565454</h4>
              </p>
            </li>
            <li>
              <div className='d-flex align-items-center'>

                <i className="fa-solid fa-envelope fa-2xl"></i>

                <h3 className='mx-4 display-5'>Mail Us</h3>
              </div>

              <p>

                <h4>abcd@gmail.com</h4>
              </p>
            </li>


          </tr>

        </div>
        <div className="contact-form col  form-container">

          <h2 className='display-5'> Send us a Message</h2>

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


      <div className="contact-map container d-flex justify-content-center">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8562438389454!2d83.4116217747832!3d26.780851976725945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399144d6e80c529f%3A0x4565b7d267007063!2sVishwakarmapuram%2C%20Gorakhpur%2C%20Uttar%20Pradesh%20273014!5e0!3m2!1sen!2sin!4v1688067484526!5m2!1sen!2sin" width={window.innerWidth - 100} height="320"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  )
}

export default ContactPage
