import { defineType, defineField } from "sanity";

export default defineType({
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image'
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'string',
        }),
        defineField({
            name: 'state',
            title: 'State',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: {type: 'category'},
        }),
    ]
})