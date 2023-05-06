import * as yup from "yup"

export const signUpSchema = yup.object({
    name :yup.string().min(2).max(25).required("please enter your name"),
    email :yup.string().email().required("please your email "),
    password :yup.string().min(6).required("please enter your password ")
})