import * as yup from "yup"

export const contactSchema = yup.object().shape({
    first_name: yup.string().required('first name is required'),
    email: yup.string().email().required('email is required'),
    message: yup.string().required('message is required'),
});

export const registrationSchema = yup.object().shape({
    email: yup.string().email().required('email is required'),
    phone_number: yup.string().required('phone number is required'),
    team_name: yup.string().required('team name is required'),
    project_topic: yup.string().required('project topic is required'),
});