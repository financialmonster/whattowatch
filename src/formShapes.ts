import { object, string } from 'yup';

export const loginFormShape = {
    initialValues: {
        email: ``,
        password: ``
    },
    schema: object().shape({
        email: string()
            .min(6, `Email should be more than 6 characters`)
            .required(`Email is required field`)
            .email(`Invalid email`)        
            .trim(),
        password: string()
            .min(6, `Password should be more than 6 characters`)
            .max(15, `Password should be less than 15 characters`)
            .required(`Password is required field`)
            .trim()
    })
}
