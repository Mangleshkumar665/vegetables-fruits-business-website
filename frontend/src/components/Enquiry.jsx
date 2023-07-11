import { useState } from 'react'
import * as yup from "yup";
import { schema } from "../validations/EnquiryValidation";
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup'

const Enquiry = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });



    const onSubmit = (data) => {
        console.log(data)
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            {console.log(errors)}
                            <input
                                type="text"
                                id="name"
                                className='enq-input'

                                placeholder='Name'
                                {...register("name")}


                            />


                            <input
                                type="text"
                                id="phone"
                                placeholder='Phone Number'
                                className='enq-input'

                                {...register("phone")}

                            />


                            <input
                                type="email"
                                placeholder='Email'
                                id="email"
                                className='enq-input'

                                {...register("email")}

                            />


                        </div>
                        <div className=''>


                            <textarea
                                id="message"
                                placeholder='Write Your Message here '
                                className=' msg'

                                {...register("message")}

                            ></textarea>
                            
                            

                        </div>
                        <div className='captcha-wrapper '>
                            <label htmlFor="captcha">Captcha:</label>
                            <br />
                            14 + 21 = <input type="text"
                                className='enq-input captcha'
                                {...register("captcha")}
                            />
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
