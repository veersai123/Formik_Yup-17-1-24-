import * as Yup from 'yup'

export const FormSchema=Yup.object({
    name:Yup.string().min(3).max(20).required("name is must"),
    email:Yup.string().email().required("Email is must")
})