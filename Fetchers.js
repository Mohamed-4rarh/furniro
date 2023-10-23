
const { createClient, groq } = require("next-sanity");

const client = createClient({
    projectId: '29pina09',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: false
})


//get all products
export async function getProducts(id) {
    if(id) {
        return client.fetch(
            groq`
                *[_type == 'product' && category->_id == $id][0] {
                    "image": image.asset->url,
                    _id,
                    name,
                    price,
                    state,
                    description,
                    "category": category->category_name
                }
            `, {id},
            {cache: 'no-store'}
        )
    }
    return client.fetch(
        groq`
            *[_type == 'product'] {
                "image": image.asset->url,
                _id,
                name,
                price,
                state,
                description,
                "category": category->category_name
            }
        `, {},
        {cache: 'no-store'}
    )
}

//get single product


//get categories
export async function getCategories() {
    return client.fetch(
        groq`
            *[_type == 'category']{
                _id,
                category_name,
                "image": image.asset->url
            }
        `
    )
}

//get blogs
export async function getBlos() {
    return client.fetch(
        groq`
            *[_type == 'blog']{
                _id,
                title,
                content,
                "image": image.asset->url,
                permision,
                date,
                category
            }
        `,{},
        {cache: 'no-store'}
    )
}
