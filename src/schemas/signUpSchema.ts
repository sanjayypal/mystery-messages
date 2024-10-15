import {string, z} from 'zod'

export const usernameValidation = z
  .string()
  .min(5,'must be greater than 5 character')
  .max(20,'must not be more than 20 characters')
  .regex(/^[a-zA-Z0-9_]+$/,'username must note contains special character')



export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:'Invalid email address'}),
    password:z.string().min(6,'password must be greater than 6 character')
})