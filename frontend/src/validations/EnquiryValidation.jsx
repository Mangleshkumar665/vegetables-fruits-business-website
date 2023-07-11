import *as yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const schema = yup.object().shape({
    name: yup.string().min(1, { text: "Required" }),
    email: yup.string().email().required(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10,"too short").max(10 , "too long"),


    
    message: yup.string().max(100).required("Required"),
    captcha: yup.string().required("Required")
  });


