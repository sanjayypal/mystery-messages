import {string, z} from 'zod'

export const acceptMessagesSchema = z.object({
    acceptMessages:z.boolean(),
})