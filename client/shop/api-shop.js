//Create a shop
const create = (params, credentials, shop) => {
    return fetch('/api/shops/by/' + params.userId, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
        body: shop
    })
    .then( response => response.json())
    .catch( err => console.log(err))
}

//List the shops
const list = () => {
    return fetch('/api/shops/', {
        method: 'GET'
    })
    .then( response => response.json() )
    .catch( err => console.log(err) )
}

//List shops by owner
const listByOwner = (params, credentials) => {
    return fetch('/api/shops/by/' + params.userId, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        }
    })
    .then( response => response.json() )
    .catch( err => console.log(err) )
}

// Read shop information
const read = (params) => {
    return fetch('/api/shop/' + params.shopId, {
        method: 'GET'
    })
    .then( response => response.json())
    .catch( err => console.log(err))
}

// Update a shop info
const update = (params, credentials, shop) => {
    return fetch('/api/shops/' + params.shopId, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.t 
        },
        body: shop
    })
    .then( response => response.json() )
    .catch( err => console.log(err) )
}

//Remove a shop
const remove = (params, credentials) => {
    return fetch('/api/shops/' + params.shopId, {
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

export { create, list, listByOwner, read, update, remove };