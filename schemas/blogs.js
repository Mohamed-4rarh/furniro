import { defineType, defineField } from "sanity";

export default defineType({
    name: 'blog',
    title: 'Blogs',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image'
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: "Content",
            type: 'text',
        }),
        defineField({
            name: 'permision',
            title: 'Permision',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string'
        })
    ]
})