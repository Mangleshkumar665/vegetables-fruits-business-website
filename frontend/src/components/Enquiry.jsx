import { useState } from 'react'

const Enquiry = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState("");
    const [captcha, setCaptcha] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can send the form data to a server or perform any other action
        console.log('Form submitted:', { name, email, message });

        // Clear form fields
        setName('');
        setEmail('');
        setPhone("");
        setMessage('');
        setCaptcha("");

    };

    return (

        <>
            <div className='Enquiry-wrapper  '>
                <div className='about-head d-flex justify-content-center align-items-center flex-column'>
                    <div className="about-head-title">

                        Quick Enquiry
                    </div>

                </div>

                <div className='container cnt-enq-head'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                id="name"
                                className='enq-input'
                                value={name}
                                placeholder='Name'
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                id="phone"
                                placeholder='Phone Number'
                                className='enq-input'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />

                            <input
                                type="email"
                                placeholder='Email'
                                id="email"
                                className='enq-input'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className=''>


                            <textarea
                                id="message"
                                placeholder='Write Your Message here '
                                className=' msg'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>

                        </div>
                        <div className='captcha-wrapper '>
                            <label htmlFor="captcha">Captcha:</label>
                            <br />
                            14 + 21 = <input type="text"
                            value={captcha} className='enq-input captcha' onChange={(e) => setCaptcha(e.target.value)}
                                required />
                        </div>
                        <input id='submit' 
                                type='submit'
                                className='product-details-btn' />
                        


                    </form>
                </div>
            </div>
        </>
    )
}

export default Enquiry
