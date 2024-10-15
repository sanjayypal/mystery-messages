import {string, z} from 'zod'

export const messageSchema = z.object({
    content:z
    .string()
    .min(10,'content must be atleast of 10 character')
    .max(200,'content must no longer of 200 character')

})