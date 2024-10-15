import {string, z} from 'zod'

export const verifySchema = z.object({
    identifier:z.string(),
    password:z.string()
})