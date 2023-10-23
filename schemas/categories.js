import { defineType, defineField } from "sanity";

export default defineType({
    name: 'category',
    title: 'Categories',
    type: 'document',
    fields: [
        defineField({
            name:'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'category_name',
            title: 'Name',
            type: 'string'
        })
    ]
})