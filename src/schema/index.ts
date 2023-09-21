import * as yup from "yup"

export const contactSchema = yup.object().shape({
    first_name: yup.string().required('first name is required'),
    email: yup.string().required('email is required'),
    message: yup.string().required('message is required'),
});