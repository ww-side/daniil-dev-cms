import { Block } from 'payload'

export const Code: Block = {
  slug: 'code',
  fields: [
    {
      name: 'code',
      type: 'code',
      required: true,
    },
  ],
}
