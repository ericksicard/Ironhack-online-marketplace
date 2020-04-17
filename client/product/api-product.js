import queryString from 'query-string'

//Create a new product
const create = (params, credentials, product) => {
    return fetch('/api/products/by/' + params.shopId, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.t 
        },
        body: product
    })
    .then( response => response.json() )
    .catch( err => console.log(err) )
}

const listByShop = params => {
    return fetch('/api/products/by/' + params.shopId, {
        method: 'GET'
    })
    .then( response => response.json() )
    .catch( err => console.log(err) )
}

const listLatest = () => {
    return fetch('/api/products/latest', {
        method: 'GET'
    })
    .then( response => response.json() )
    .catch( err => console.log(err) )
}

const listRelated = params => {
    return fetch('/api/products/related/' + params.productId, {
        method: 'GET'
    })
    .then( response => response.json() )
    .catch( err => console.log(err) )
}

const read = params => {
    return fetch('api/products/' + params.productId, {
        method: 'GET'
    })
    .then( response => response.json() )
    .catch( err => console.log(err))
}

const update = (params, credentials, product) => {
    return fetch('/api/product/' + params.shopId + '/' + params.productId, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.t 
        },
        body: product
    })
    .then( response => response.json() )
    .catch( err => console.log(err) )
}

//Remove a product
const remove = (params, credentials) => {
    return fetch('/api/product/' + params.shopId + '/' + params.productId, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        }
    })
    .then( response => response.json() )
    .catch( err => console.log(err) )
}

// List product categories
const listCategories = () => {
    return fetch('/api/products/categories', {
        method: 'GET',
    })
    .then( response => response.json() )
    .catch( err => console.log(err) )
}

// List searched products
const list = params => {
    const query = queryString.stringify(params);
    return fetch('/api/product?' + query, {
        method: 'GET'
    })
    .then( response => response.json() )
    .catch( err => console.log(err) )
}


export { create, listByShop, listLatest, listRelated, read, update, remove, listCategories, list }